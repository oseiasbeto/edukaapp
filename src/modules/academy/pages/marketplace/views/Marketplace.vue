<template>
  <div class="marketplace">
    <header>
      <h1 class="title">
        {{ isSearch ? `Resultados para: ${this.$route.query.search}` : 'Marketplace' }}
      </h1>
      <p class="subtitle">Nesta página ficam todos os curso registrados em nossa plataforma</p>
    </header>
    <SearchField />
    <div v-if="!isSearch" class="marketplace-tabs">
      <div @click="setTab('online')" :class="`${tab == 'online' ? 'tab active' : 'tab'}`">
        <span>Cursos online</span>
        <div class="border"></div>
      </div>
      <div @click="setTab('presence')" :class="`${tab == 'presence' ? 'tab active' : 'tab'}`">
        <span>Cursos presenciais</span>
        <div class="border"></div>
      </div>
    </div>
    <div v-if="loading" class="loading">
      <EdukaLoading />
    </div>
    <div v-if="!loading && !isSearch" class="results">
      <section v-show="tab == 'online'">
        <CourseList v-if="marketplace.courses.data.length">
          <CardCourse v-for="course in marketplace.courses.data" :course="course" :key="course.id" />
        </CourseList>
        <div v-else class="empty">
          <h1>Nenhum curso</h1>
        </div>
      </section>
      <section v-show="tab == 'presence'">
        <CourseList v-if="marketplace.courses.data.length">
          <CardCourse v-for="course in marketplace.courses.data" :course="course" :key="course.id" />
        </CourseList>
        <div v-else class="empty">
          <h1>Nenhum curso</h1>
        </div>
      </section>
    </div>
    <div v-if="!loading && isSearch" class="sear">
      <CourseList v-if="marketplace.courses.data.length">
        <CardCourse v-for="course in marketplace.courses.data" :course="course" :key="course.id" />
      </CourseList>
      <div v-else class="empty">
        <h1>Nenhum resultado</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/api";
import SearchField from '../components/SearchField';
import CardCourse from '../components/CardCourse.vue';
import CourseList from '../components/CourseList.vue';
import EdukaLoading from "../../../components/theme/EdukaLoading.vue";

export default {
  name: "Dashboard",
  components: { CardCourse, CourseList, SearchField, EdukaLoading },
  computed: {
    ...mapState(["marketplace"])
  },
  data() {
    return {
      tab: "online",
      page: 1,
      limit: 40,
      loading: true,
      isSearch: false
    }
  },
  watch: {
    "$route.query.search"() {
      if (this.$route.query.search) {
        this.isSearch = true
        this.page = 1
        this.limit = 40
        this.searchCourses(this.$route.query.search, this.page, this.limit)
      } else {
        this.isSearch = false
        this.getCourses(this.page, this.limit, this.tab)
      } 
    }
  },
  created() {
    this.getCourses(this.page, this.limit, this.tab)
  },
  methods: {
    setTab(tab) {
      this.tab = tab
      this.getCourses(this.page, this.limit, tab)
    },
    async getCourses(page, limit, tab) {
      try {
        this.loading = true
        const res = await api.get(`users/courses?page=${page}&limit=${limit}&format=${tab}`)
        this.$store.dispatch("actionSetCourses", res.data.courses)
        this.loading = false
      } catch (err) {
        console.log(err.message)
      }
    },
    async searchCourses(keywords, page, limit) {
      try {
        this.loading = true
        const res = await api.get(`users/courses/search?keywords=${keywords}&page=${page}&limit=${limit}`)
        this.$store.dispatch("actionSetCourses", res.data.courses)
        this.loading = false
      } catch (err) {
        console.log(err.message)
      }
    },
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
  background: #31c178;
  -webkit-box-shadow: 0 4px 24px rgba(49, 193, 120, .25);
  box-shadow: 0 4px 24px rgba(49, 193, 120, .25);
}

.fast-links>a,
button {
  margin-right: 12px;
}

.marketplace-tabs {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
}

.marketplace-tabs .tab {
  display: block;
  position: relative;
  margin: 0;
  font-weight: 400;
  color: #161616;
  background: transparent !important;
  border-radius: 0;
  font-size: 15px;
  height: 35px;
  margin-right: 1.80rem;
  cursor: pointer;
  transition: all 0.2s;
}

.marketplace-tabs .tab .border {
  display: none;
  position: absolute;
  bottom: 0px;
  left: 0;
  font-weight: 500;
  height: 4px;
  width: 100%;
  background: rgba(85, 91, 97, 0.5);
  transition: all 0.3s;
}

.marketplace-tabs .tab:hover {
  transition: all 0.3s;
}

.marketplace-tabs .tab.active {
  font-weight: 500;
}

.tab.active>.border {
  display: block;
  background: #272d35;
  transition: all 0.2s;
}

.tab:hover>.border {
  display: block;
  transition: all 0.3s;
}

section {
  margin-top: 2rem;
}

section header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

section header .left-part {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

section .title {
  display: inline-block;
  margin: 0 0.75rem 0.5rem 0;
  font-size: 1.875rem;
  font-weight: 500;
}

section .subtitle {
  display: inline-block;
  font-weight: 400;
  color: #848484;
  font-size: 1rem;
  font-weight: 400;
}

@media (max-width: 414px) {
  section .title {
    font-size: 24px;
  }

  section .subtitle {
    font-size: 15px;
  }
}
</style>