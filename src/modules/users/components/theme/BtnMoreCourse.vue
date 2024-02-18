<template>
  <div class="area">
    <router-link to="/marketplace">
      Ver mais cursos
      <svg aria-hidden="true" style="width: 0.75rem;
                  height: 0.75rem;
                  margin-left: 0.3125rem;" focusable="false" data-prefix="fal" data-icon="arrow-right"
        class="svg-inline--fa fa-arrow-right fa-w-14 fontawesome-icon" role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path fill="currentColor"
          d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z">
        </path>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BtnMoreCourse"
}
</script>

<style>
.area {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 0.1px;
  padding-bottom: 30px;
}

.area a {
  padding: 11px 23px;
  font-size: 1.125rem;
  text-decoration: none;
  color: #fff;
  background-color: var(--primary);
  line-height: 1.2;
  border-radius: 0.125rem;
  transition: all .25s ease-in-out;
  border-radius: 8px;
  transition: all .25s ease-in-out;
}

.viewmore a:hover {
  transition: all .25s ease-in-out;
  background-color: #e01033;
}
</style>