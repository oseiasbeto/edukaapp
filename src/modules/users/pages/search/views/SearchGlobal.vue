<template>
    <div class="search-global">
        <div class="paper">
            <div class="paper--body">
                <div v-if="isResults" class="search-results">
                    <div class="title">
                        <p>Resultados da pesquisa: </p>
                    </div>

                    <ul class="courses-finded">
                        <li class="course-item">
                            <div class="course-inner">
                                <router-link class="cover" to="/course/292982/como-aprender-a-programara">
                                    <img src="http://localhost:4040/files/marcus-marques.jpg" alt="" srcset="">
                                </router-link>
                                <router-link class="course-title" to="/course/9919/hshshs">
                                    Canva for Beginners: Create Professional Designs
                                </router-link>
                                <h4 class="course-createdby">
                                    Oséias BC
                                </h4>

                                <div class="course-status">
                                    <ul class="list-status">
                                        <li class="stat-item">
                                            <i class="bi bi-cart"></i>
                                            <b>68</b>
                                        </li>
                                        <li class="stat-item">
                                            <i class="bi bi-heart"></i>
                                            <b>4</b>
                                        </li>
                                    </ul>
                                </div>

                                <div class="course-tags">
                                    <ul class="tags-list">
                                        <li class="tag-item">
                                            <div class="tag">
                                                Empreendedorimos
                                            </div>
                                        </li>
                                        <li class="tag-item">
                                            <div class="tag">
                                                Designer Gráfico
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div v-else class="search-no-results"></div>
            </div>
        </div>
        <div class="cs">
            <h2>Cursos que podem ser do teu interesse</h2>
        </div>
        <CourseList>
            <CardCourse :course="course" />
            <CardCourse :course="course" />
            <CardCourse :course="course" />
        </CourseList>
        <BtnMoreCourse/>
    </div>
</template>
  
<script>

import BtnMoreCourse from '../../../components/theme/BtnMoreCourse.vue';

export default {
    name: "SearchGlobal",
    components: {
        BtnMoreCourse
    },
    data() {
        return {
            isResults: true,
            course: {
                banner: "http://localhost:4040/files/FB_IMG_16877125875316852.jpg",
                title: "Introdução ao Adobe XD para aplicativos móveis",
                createdBy: {
                    name: "Walt de Jesus"
                },
                isRecommended: false,
                price: 10000,
                description: "Aprenda do zero a criar um app para iOS e Android como um profissional"
            }
        }
    },
    methods: {

    }
};
</script>
  
<style scoped>
.search-global {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
}

.paper {
    width: 100%;
    background: #fff;
    margin-top: 30px;
    margin-bottom: 30px;
    border-bottom: 2px solid rgba(22, 22, 22, .15);
}

.paper .paper--body {
    padding: 32px;
}

.search-results .title {
    font-weight: 400;
    margin-bottom: 1.3125rem;
}

.courses-finded {
    list-style: none;
    margin-bottom: 40px;
}

.courses-finded .course-item {
    padding: 15px 0 !important;
    border-bottom: 1px solid #e8e8e8 !important;
}

.course-item .course-inner {
    position: relative;
    min-height: 92px;
    padding-left: 105px;
}

.course-inner .cover {
    top: 0;
    left: 0;
    position: absolute;
    overflow: hidden;
    border-radius: 2px;
}

.course-inner .cover img {
    width: 90px;
    transition: all .25s ease-out;
    opacity: .75;
    border: 1px solid #e8e8e8;
}

.course-title {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.29;
    color: inherit;
    font-size: 1.125rem;
    transition: all .25s ease-out;
}

.course-title:hover {
    color: var(--primary);
    transition: all .25s ease-out;
}

.course-createdby {
    font-family: inherit;
    font-weight: 400;
    line-height: 1.29;
    color: #848484;
    font-size: .8125rem;
    text-transform: none;
}

.course-status {
    margin-top: 5px;
}

.list-status {
    display: flex;
    align-items: center;
    margin-left: -3px;
    font-size: .8125rem;
    color: #b0b0b0;
}

.list-status li {
    padding: 0 3px;
    margin-right: 0.7rem;
}

.list-status b {
    font-size: .6875rem;
    font-weight: 500;
    color: #848484;
}

.list-status .stat-item i {
    margin-right: 0.2rem;
}

.tags-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.tag-item {
    position: relative;
    margin-top: 4px;
    margin-bottom: 3px;
    margin-right: 8px;
}

.tag-item .tag {
    display: inline-block;
    position: relative;
    height: 16px;
    padding: 0 3px;
    font-size: .6875rem !important;
    font-weight: 500 !important;
    line-height: 16px;
    color: #00464a;
    background: #c6f2f5;
    border: 1px solid;
    border-color: #00b2bd;
    transition: none .15s ease-in-out;
    border-radius: 2px;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

.cs h2 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.29;
    color: inherit;
    font-size: 1.375rem;
    margin-top: 0.8203125rem;
    margin-bottom: 2rem !important;
}

@media (max-width: 414px) {
    .search-global {
        max-width: 100%;
    }

    .paper .paper--body {
        padding: 12px;
    }

    .search-results .course-title {
        font-size: 1rem;
    }
    .cs h2 {
        font-size: 1.125rem;
    }
}
</style>