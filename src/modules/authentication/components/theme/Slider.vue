<template>
    <div class="slider">

    </div>
</template>

<script>
export default {
    name: "Slider"
}
</script>

<style scoped>
.slider {
    position: fixed;
    right: 0;
    width: 54%;
    max-width: 54%;
    height: 100%;
    /*background-position: 50% 50%;*/
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../../assets/images/garota-negra-em-uma-cidade-de-verao-com-laptop..jpg");
}
@media (max-width: 414px) {
  .slider {
    display: none;
  }

}
</style>