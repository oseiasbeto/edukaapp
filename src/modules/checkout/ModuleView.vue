<template>
  <div class="checkout-area">
    <Toast/>
    <NavbarCheckout />
    <ContainerCheckout>
      <div class="checkout-body" style="    margin-top: 90px;">
        <Checkout v-if="this.$route.path == `/checkout/${this.$route.params.course_id}`" />
        <Thanks v-if="this.$route.path == `/thanks/${this.$route.params.purchase_id}`"/>
      </div>

    </ContainerCheckout>
  </div>
</template>
<script>
//Pages
import ContainerCheckout from "./components/theme/ContainerCheckout.vue";
import NavbarCheckout from "./components/theme/NavbarCheckout.vue";
import Checkout from "./pages/Checkout.vue";
import Thanks from "./pages/Thanks.vue";
import Toast from "../academy/components/theme/Toast.vue";
//Components

export default {
  components: {
    Checkout,
    NavbarCheckout,
    ContainerCheckout,
    Thanks,
    Toast
},
  name: "ModuleView",
  created() {

  },
  methods: {

  }
};
</script>
  
<style scoped>
.checkout-area {
  display: flex;
  justify-content: center;
}

.checkout-body {
  width: 100%;
}
</style>