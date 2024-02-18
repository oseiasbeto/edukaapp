<template>
  <div class="mycourses">
    <header>
      <div class="left">
        <h1 class="title">Sou Educador(a)</h1>
        <p class="subtitle">Nesta página ficam os cursos que você criou. Gerencie-os quantas vezes
          precisar.</p>
      </div>
      <div class="right">
        <router-link to="/epanel/course_type" class="btn active">Criar novo curso</router-link>
      </div>
    </header>
    <div class="border"></div>
    <div class="body">
      <div v-if="loading" class="loading">
        <EdukaLoading />
      </div>
      <div v-else class="results">
        <div v-if="courses.myCourses.data.length" class="courses">
          <span class="total"> Total de registros: <strong>{{ courses.myCourses.data.length }}</strong> </span>
          <router-link :to="`/epanel/course/manager/${item.id}`" v-for="item in courses.myCourses.data" :key="item.id"
            class="course-item">
            <div class="cover">
              <img :src="item.cover">
            </div>
            <div class="data">
              <span class="title"> {{ item.title }} </span>
              <span class="sub">
                <span>ID: {{ item.id }} </span>
                <span class="dot">--</span>
                <span class="created-at"> criado em {{ item.createdAt }}</span>
              </span>
            </div>
          </router-link>
        </div>
        <div class="empty">

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/api";
import EdukaLoading from "../../../components/theme/EdukaLoading.vue";

export default {
  name: "Mycourses",
  computed: {
    ...mapState(["courses"])
  },
  data() {
    return {
      page: 1,
      limit: 10,
      loading: true
    };
  },
  created() {
    this.getMyCourses(this.page, this.limit);
  },
  methods: {
    async getMyCourses(page, limit) {
      try {
        this.loading = true;
        const res = await api.get(`courses/current_educator?page=${page}&limit=${limit}`);
        this.$store.dispatch("actionSetMyCourses", res.data.courses);
        this.loading = false;
      }
      catch (err) {
        console.log(err.message);
      }
    }
  },
  components: { EdukaLoading }
};
</script>

<style scoped>
.mycourses {
  color: #333;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.courses {
  list-style: none;
}

.courses .course-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-top: 8px;
  padding: 8px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  transition: all .2s;
  text-decoration: none;
}

.courses .course-item:hover {
  transition: all .2s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
}

.course-item .data {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.course-item .data .title {
  color: var(--primary);
}

.course-item .data .sub,
.total {
  color: var(--gray);
  font-weight: 400;
  font-size: 13px;
}

.cover {
  position: relative;
  width: 34px;
  height: 34px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 8px;
  background-color: var(--gray);
}

.border {
  background-color: var(--border-color);
  height: 1px;
  width: auto;
  margin-bottom: 8px;
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media(max-width: 767px) {
  .left .title {
    font-size: 22px;
  }

  .subtitle {
    display: none;
  }

  .dot,
  .created-at {
    display: none;
  }
  .data .title {
    width: calc(100% - 42px);
  }
}</style>