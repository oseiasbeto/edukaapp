<template>
    <div class="marketplace">
        <div class="marketplace-tabs">
            <div @click="setTab('recommends')" :class="`${tab == 'recommends' ? 'tab active' : 'tab'}`">
                <span>Recomendados</span>
                <div class="border"></div>
            </div>
            <div @click="setTab('news')" :class="`${tab == 'news' ? 'tab active' : 'tab'}`">
                <span>Recentes</span>
                <div class="border"></div>
            </div>
            <div @click="setTab('+saled')" :class="`${tab == '+saled' ? 'tab active' : 'tab'}`">
                <span>Mais vendidos</span>
                <div class="border"></div>
            </div>
        </div>
        <section v-show="tab == 'recommends'">
            <header>
                <article class="left-part">
                    <h4 class="title">
                        Cursos recomendados
                    </h4>
                    <p class="subtitle">Cursos que A eduka recomenda especialmente para si.</p>
                </article>
                <article class="right-part">

                </article>
            </header>

            <CourseList>
                <CardCourse :course="course" />
                <CardCourse :course="course" />
                <CardCourse :course="course" />
                <CardCourse :course="course" />
                <CardCourse :course="course" />
            </CourseList>
        </section>
        <section v-show="tab == 'news'">
            <header>
                <article class="left-part">
                    <h4 class="title">
                        Cursos recentes
                    </h4>
                    <p class="subtitle">Desfrute dos cursos que acabaram de chegar na eduka. </p>
                </article>
                <article class="right-part">

                </article>
            </header>
            <CourseList>
                <CardCourse :course="course" />
                <CardCourse :course="course" />
                <CardCourse :course="course" />
                <CardCourse :course="course" />
                <CardCourse :course="course" />
            </CourseList>
        </section>
        <section v-show="tab == '+saled'">
            <header>
                <article class="left-part">
                    <h4 class="title">
                        Cursos mais vendidos
                    </h4>
                    <p class="subtitle">Página esclusiva para os cursos que mais vendem na eduka. </p>
                </article>
                <article class="right-part">

                </article>
            </header>
            <CourseList>
                <CardCourse :course="course" />
                <CardCourse :course="course" />
                <CardCourse :course="course" />
                <CardCourse :course="course" />
                <CardCourse :course="course" />
            </CourseList>
        </section>
    </div>
</template>
  
<script>
import CourseList from '../../courses/components/CourseList.vue';
import CardCourse from '../../courses/components/CardCourse.vue';

export default {
    name: "Marketplace",
    components: {
        CourseList,
        CardCourse
    },
    data() {
        return {
            tab: "recommends",
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
        setTab(tab) {
            this.tab = tab
        }
    }
};
</script>
  
<style scoped>
.marketplace-tabs {
    display: flex;
    align-items: center;
    padding-top: 20px;
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
    margin-top: 4rem;
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