<template>
  <div class="user-modules">
    <div class="page">
      <Navbar />
      <div class="dv">
        <Home v-if="this.$route.path == '/'" />
        <div class="page" style="display: flex;
    justify-content: center;">
          <Container>
            <Categories v-if="this.$route.path == '/categories'" />
            <Marketplace v-if="this.$route.path == '/marketplace'" />
            <Cart v-if="this.$route.path == '/cart'" />
            <Search v-if="this.$route.name == 'Pesquisa - Eduka'" />
            <Course v-if="this.$route.name == 'Curso'" />
          </Container>
        </div>
      </div>
      <Sidebar />
      <Footer />
    </div>

    <!--poups-->
    <Loading />

    <!-- Modals -->

  </div>
</template>
<script>
import { api } from "@/api"
import { mapState } from "vuex";

//Pages
import Home from "./pages/home/views/Home.vue"
import Categories from "./pages/categories/views/Categories.vue"
import Marketplace from "./pages/marketplace/views/Marketplace"
import Cart from "./pages/cart/views/Cart.vue"
import Search from "./pages/search/views/SearchGlobal"
import Course from "./pages/courses/views/Course.vue"
//Components
import Container from "./components/theme/Container.vue";
import Navbar from "./components/theme/Navbar.vue";
import Sidebar from "./components/theme/Sidebar.vue";
import Loading from "./components/utils/Loading";
import Footer from "./components/theme/Footer.vue";

export default {
  components: {
    //pages 
    Home,
    Categories,
    Marketplace,
    Cart,
    Search,
    Course,
    //components
    Navbar,
    Sidebar,
    Container,
    Loading,
    Footer,
},
  name: "ModuleView",
  data() {
    return {
      starting: true,
    };
  },
  watch: {
    "users.token"() {
      if (this.users.token != null) {
        this.getCurrentUser()
      }
    }
  },
  created() {
    if (this.users.token != null) {
      this.getCurrentUser()
    }
  },
  computed: {
    ...mapState(["users", "home"]),
  },

  methods: {
    async getCurrentUser() {
      const res = await api.get("users/current_user")

      if (res.status == 200) {
        this.$store.dispatch("actionSetUser", res.data.current_user);
      }
    }
  },
};
</script>
  
<style scoped>
.page {
  box-sizing: border-box;
}

.dv {
  display: flex;
  flex-direction: column;
}
</style>