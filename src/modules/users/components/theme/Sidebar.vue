<template>
  <div id="sidebar" class="sidebar">
    <header>
      <div class="left">
        <button @click="close()" id="close">
          ×
        </button>
      </div>
      <div class="right">
        <router-link to="/signin">Entrar</router-link>
        <router-link id="signup" to="/signup">Cadastrar-se</router-link>
      </div>
    </header>
    <div class="body">
      <ul class="menu">
        <li class="menu-item">
          <router-link to="/">Principal</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/categories?t=designergrafico">Categorias</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/marketplace">Marketplace <span class="top-badge">Novo</span> </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "Sidebar",
  data() {
    return {

    }
  },
  methods: {
    close() {
      const body = document.querySelector("body")
      const sidebar = document.querySelector("#sidebar")
      sidebar.classList.remove("show")
      body.classList.remove("o-h")
    }
  },
  mounted() {
    const links = document.querySelectorAll("a")
    links.forEach(link => {
      link.addEventListener("click", () => {
        const body = document.querySelector("body")
        const sidebar = document.querySelector("#sidebar")
        sidebar.classList.remove("show")
        body.classList.remove("o-h")
      })
    })
  }
}

</script>


<style scoped>
.sidebar {
  display: none;
  position: fixed;
  top: 0;
  background-color: #1d262d;
  width: 100%;
  height: 100vh;
  z-index: 1111;
}

.sidebar header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)
}

.sidebar header .right a {
  overflow: hidden;
  display: inline;
  font-weight: 700;
  color: #a5b7c6;
  line-height: 24px;
  padding: 5px 15px;
  text-decoration: none;
}

.right #signup {
  padding: 4px 10px;
  border: 1px solid #4a6375;
}

.left #close {
  width: 44px;
  height: 44px;
  font-size: 38px;
  line-height: 44px;
  color: #fff;
  text-align: left;
  background: transparent;
  border: none;
}

.sidebar .body {
  padding: 20px;
}

.sidebar .body .menu {
  list-style: none;
}

.menu .menu-item {
  margin: 0;
}

.menu .menu-item a {
  display: block;
  text-decoration: none;
  padding: 10px 0;
  color: #a5b7c6;
  font-weight: bold;
}

.category {
  padding: 10px 0;
  text-transform: uppercase;
  pointer-events: none;
  font-size: 14px;
  color: #869fb2;
}

.submenu {
  background-color: initial;
  display: block;
  padding: 0px 20px;
  margin-top: 0;
}

.submenu a {
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-transform: none;
  color: #a5b7c6;
  opacity: 1 !important;
}

.top-badge {
  background: #c7ebff;
  color: #04458f;
  font-weight: bold;
  font-size: 9px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 2px;
  margin-left: 5px;
  line-height: initial;
  text-transform: uppercase;
  font-family: inherit;
}

@media (max-width: 414px) {
  .show {
    display: block;
  }

}
</style>