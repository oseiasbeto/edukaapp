<template>
  <div class="dashboard">
    <header>
      <h1 class="title">Painel de controle</h1>
      <p class="subtitle">Olá  {{ auth.user.username }}, seja bem vindo ao nosso painel de controle</p>
    </header>
    <div class="body">
      <div class="fast-links">
        <router-link to="/epanel/course_type" class="create">Criar um novo curso</router-link>
        <router-link to="/epanel/mycourses">Meus cursos</router-link>
        <router-link to="/epanel/enrollments">aprendizado</router-link>
        <router-link :to="'/epanel/profile/'+auth.user._id">Minha Conta</router-link>
        <router-link to="/epanel/balance">Meu kumbu</router-link>
      </div>
      <BalanceCard/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BalanceCard from "../../../components/theme/BalanceCard.vue"

export default {
  name: "Dashboard",
  computed: {
    ...mapState(["auth", "panel"])
  },
  components: {
    BalanceCard
  }
};
</script>

<style scoped>
.dashboard {
  color: #333;
}

header {
  margin-bottom: 24px;
}

h1 {
  font-size: 32px;
  font-weight: 500;
  color: #333;
  padding-right: 30px
}

.subtitle {
  opacity: .75;
  font-weight: 400;
}

/*Body style */
.fast-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
}

.fast-links a,
button {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 8px 12px;
  font-size: 15px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  color: inherit;
  border: none;
  background: #fff;
  color: #5c6a70;
  white-space: nowrap;
  -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
  box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
  text-decoration: none;
}

.fast-links .create {
  color: #fff;
  background: var(--primary);
}
.fast-links>a, button {
    margin-right: 12px;
}
@media(max-width: 767px) {
    .fast-links {
      display: block !important;
    }
    .fast-links a {
      margin-bottom: 12px
    }
}
</style>