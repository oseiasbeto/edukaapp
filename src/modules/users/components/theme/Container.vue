<template>
  <div class="container">
    <slot> </slot>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "Container",
  computed: {
    ...mapState(["home"])
  },
  mounted() {
  }
};
</script>

<style scoped>
.container {
    position: relative;
    box-sizing: border-box;
    width: 83%;
    z-index: 111;
    color: var(--gray-lighter);
}
.pd {
   padding: 0 30px;
}
.disableScroll {
  overflow: hidden;
}
@media (max-width: 414px) {
  .container {
    width: 94%;
    margin-left: 0;
  }
}
@media (max-width: 320px) {
  .container {
    width: 94%;
    margin-left: 0;
  }
}
</style>