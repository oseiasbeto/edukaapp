<template>
  <div class="authentication">
    <SigninForm v-if="this.$route.path == '/account/signin'"/>
    <SignupForm v-if="this.$route.path == '/account/signup'"/>
    <Slider/>
  </div>
</template>
<script>
//Pages
import SigninForm from "./components/theme/SigninForm.vue";
import SignupForm from "./components/theme/SignupForm.vue";
import Slider from "./components/theme/Slider.vue";

//Components

export default {
  components: {
    SigninForm,
    Slider,
    SignupForm
},
  name: "ModuleView",
  data() {
    return {
      starting: true,
    };
  },
  created() {

  },
  methods: {

  }
};
</script>
  
<style scoped>
.authentication {
  min-height: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>