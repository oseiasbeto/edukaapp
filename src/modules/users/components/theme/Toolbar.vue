<template>
  <div class="toolbar">
  <div class="shade"></div>

  <nav >
  <ul>
  <li>
  <router-link to="/">INÍCIO</router-link>
  </li>
  <li>
  <router-link to="/">COMO VENDER</router-link>
  </li>
  <li>
  <router-link to="/">MINHA CARTEIRA</router-link>
  </li>
  <li>
  <router-link to="/">INÍCIO</router-link>
  </li>
  </ul>
  </nav>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  components: {
    
  },
  computed: {
    ...mapState(["users"])
  },
  name: "Toolbar",
  methods: {
  }
};
</script>

<style scoped>
.toolbar {
    position: fixed;
    top: 77px;
    display: flex;
    left: 0;
    justify-content: center;
    width: 100%;
    color: rgba(0,0,0,.87);
    box-sizing: border-box;
    padding: 16px;
    background-color: rgba(0,0,0,.03);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0.1);
    z-index: 1111;
}
.shade {
   display: flex;
  background: rgb(0 0 0 / 50%);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 220px;
  right: 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100vw !important;
  height: 100vh;
  z-index: 0;
  padding: 0 30px;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all .3s;
  transition: all .3s;
}
nav {
    position: relactive;
    width: 80%;
}
nav ul {
    list-style: none;
    display: flex;
    align-items: center;
}
nav li {
    margin-right: 24px
}
nav li a {
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.12px;
    color: rgba(0,0,0,.87);
    padding: 15px 0;
}
@media (max-width: 414px) {
 .toolbar {
   opacity: 0;
   visibility: hidden;
 }
 .shade {
    opacity: 1;
    visibility: visible;
 }
 .toolbar.show {
   opacity: 1;
   visibility: visible;
   z-index: 1111;
   top: 56px;
 }
} 
</style>