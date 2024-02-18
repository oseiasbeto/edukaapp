<template>
  <div class="shade">

  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Loading",
  computed: {
    ...mapState(["home"])
  }
};
</script>

<style scoped>
.shade {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  width: 100vw !important;
  height: 100vh;
  z-index: 1000146;
  padding: 0 30px;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  transition: all .3s;
}

.loading {
  background-color: rgb(0 0 0 / 63%);
  font-size: 14px;
  z-index: 1110 !important;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: #fff;
  transform: scale(0.6);
  opacity: 0;
}

.body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 137px;
  height: 60px;
  padding: 0 16px;
}

.loading .spinner-content {
  transform: translate(-26%, 0%);
  padding: 20px 6px;
  border-radius: 5px;
}

.loading .spinner {
  width: 24px;
  height: 24px;
  border-width: 3px;
  border-style: solid;
  border-color: #fff transparent transparent #fff;
  opacity: 0.9;
  border-image: initial;
  border-radius: 30px;
  animation: pace-spinner 0.7s linear 0s infinite normal none running;
  display: block !important;
  overflow: visible !important;
}

.show {
  transform: none;
  transition: all .3s;
  opacity: 1;
  visibility: visible;
}

@-webkit-keyframes pace-spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}</style>