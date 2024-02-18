<template>
  <div class="balance">
    <header>
      <h1 class="title">Meu aprendizado</h1>
      <p class="subtitle">Nesta págnia você consegue ver os cursos que vc já se inscreveu</p>
    </header>
    <div class="body">
      <div v-if="loading" class="loading">
        <EdukaLoading />
      </div>
      <div v-if="!loading && marketplace.enrollments.data.length" class="results">
        <div v-for="d in marketplace.enrollments.data" :key="d.id" class="card-course"
          @click="viewCourseFromEnrollment(d.cours.id)">
          <div class="card-item-top">
            <div class="card-cover">
              <picture>
                <img :src="d.cours.cover">
              </picture>
              <div v-show="d.cours.isRecommended" class="metadata" :class="{
                recommended: d.cours.isRecommended
              }">
                <div v-show="d.cours.isRecommended" class="tag">
                  <span>RECOMENDADO</span>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div>
                <div class="category">
                  <span> {{ d.cours.category }} </span>
                </div>
                <h3 class="title">
                  {{ d.cours.title }}
                </h3>
              </div>

              <p class="educator">
                Acesso ilimitado
              </p>

              <h4 class="description">
                {{ courses.course.description }}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!loading && !marketplace.enrollments.data.length" class="box">
        <h2>Nenhum curso</h2>
        <div class="col">
          <p>Parece que vc ainda não se inscreveu em nenhu curso.</p>
          <p>Que tal dar uma olha em nosso marketplace.</p>
          <a href="/epanel/marketplace" class="btn active">Ver marketplace</a>
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
  name: "Enrollments",
  computed: {
    ...mapState(["courses", "marketplace"])
  },
  data() {
    return {
      loading: true,
      page: 1,
      limit: 40,
    }
  },
  created() {
    this.getMyEnrollments(this.page, this.limit)
  },
  methods: {
    async getMyEnrollments(page, limit) {
      try {
        this.loading = true
        const res = await api.get(`users/enrollments?page=${page}&limit=${limit}`);
        console.log(res)
        this.$store.dispatch("actionSetEnrollments", res.data.enrollments);
        this.loading = false
      } catch (err) {
        this.loading = false
      }
    },
    viewCourseFromEnrollment(id) {
      this.$store.dispatch("actionSetModal", {
        name: 'viewCourseFromEnrollment',
        id,
        show: true
      })
    }
  },
  components: {
    EdukaLoading
  }
};
</script>

<style scoped>
.balance {
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

.box {
  text-align: center;
  background-color: #fff;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
}

.box .col {
  margin-top: 4px;
}

.box .col a {
  margin-top: 12px;
}

.box .col p {
  font-weight: 400;
  color: #888;
  font-size: 14px;
}

.card-course {
  display: flex;
  position: relative;
  min-width: 250px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
}

.card-item-bottom {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 1rem 1rem;
}

.card-cover {
  cursor: pointer;
  display: block;
  width: 100%;
  background-color: #f2f2f2;
  position: relative;
  text-decoration: none;
  transition: all .25s;
  overflow: hidden;
}

.card-cover:before {
  display: block;
  content: "";
}

.play {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  font-size: 1rem;
  line-height: 40px;
  align-items: center;
  justify-content: center;
  color: #fff;
  transform: translate(-50%, -50%);
  background-color: rgba(22, 22, 22, .6);
  border-radius: 50%;
}

.metadata {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
}

.metadata.recommended {
  background-color: var(--primary);
}

.metadata .tag {
  display: inline-block;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  padding: 0 0.25rem;
  font-size: .6875rem;
  text-transform: uppercase;
  border-radius: 2px;
  font-weight: 500;
  line-height: 1.125rem;
  vertical-align: middle;
  color: #fff;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1rem 0.75rem;
}

.card-body .title {
  cursor: pointer;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 78px;
  -webkit-line-clamp: 3;
  font-weight: 600;
}

.card-body .title {
  font-size: 1.125rem;
  line-height: 1.5rem;
  transition: all .25s ease-in-out;
}

.title:hover {
  transition: all .25s ease-in-out;
  color: var(--primary);
}

.card-body .educator {
  display: block;
  display: -webkit-box;
  font-size: .8125rem;
  line-height: 1.25rem;
  height: 18px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-body .description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  max-height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  font-size: .80rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: #848484 !important;
}

.price {
  font-size: 1.125rem;
}

.category {
  display: inline-block;
  overflow: hidden;
  max-width: 206px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  padding: 0 0.25rem;
  margin-bottom: 0.32rem;
  font-size: .6875rem;
  text-transform: uppercase;
  border-radius: 2px;
  font-weight: 500;
  line-height: 1.125rem;
  vertical-align: middle;
  color: #161616;
  border: 1px solid #d9d9d9;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 1.5rem;
  font-weight: 600;
  border-radius: 2px;
  text-align: center;
  border: 0;
  text-decoration: none;
  transition: background-color .25s ease-in-out;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: inherit;
  line-height: 1.5rem;
  padding: 12px 16px;
  background-color: #00b2bd;
  color: #fff;
}

.btn:hover {
  background-color: #00838a;
}

.btn span {
  overflow: hidden;
  text-overflow: ellipsis;
}

.status {
  display: flex;
  align-items: center;
  margin-top: 0.5rem !important;
}

.status .stat {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  font-size: .8125rem;
  color: #848484;
  font-weight: 400;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

i {
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: 6px;
  font: normal normal normal 14px/1 predencio-icons;
  font-size: inherit;
  color: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

picture {
  overflow: hidden;
}

picture img {
  display: block;
  width: 100%;
  height: 157.5px;
  object-fit: cover;
  transition: all .25s;
}

.card-cover:hover>picture img {
  transition: all .25s;
  transform: scale(1.2);
}

.price {
  font-family: "Raleway", sans-serif;
  margin-left: 4px;
  font-size: 20px;
}

.educator a {
  text-decoration: underline !important;
  transition: all .25s;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
  -moz-column-gap: 20px;
  grid-column-gap: 20px;
  column-gap: 20px;
  grid-row-gap: 3rem;
  row-gap: 3rem;
  padding-bottom: 3rem;
}
</style>