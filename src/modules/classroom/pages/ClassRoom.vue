<template>
    <div class="classroom">
        <div class="background"></div>
        <Navbar/>
        <div v-if="!loading" class="contents">
            <div v-if="!errorPage" class="col" style="width: 100%; margin-top: 4.5rem;">
                <div class="player">
                    <div class="player-area">
                        <iframe width="100%" height="100%"
                            :src="'https://www.youtube.com/embed/' + classroom.lesson.videoId"
                            title="DEPLOY DE UMA APLICAÇÃO NODEJS COM TYPESCRIPT" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div class="info-lesson" style="margin-bottom: 1.2rem;">
                        <p class="info" style="font-size: 12px;
    font-weight: 400;
    opacity: 0.6;">
                            Idioma: Português
                        </p>
                        <h4 class="title">
                            {{ classroom.lesson.title }}
                        </h4>
                    </div>
                </div>
                <p style="font-size: 13px;
    opacity: .8;
    font-weight: 400;
    padding: 12px 0;" class="description">
                    {{ classroom.lesson.description }}
                </p>
                <div class="modules">
                    <ul class="list" v-if="classroom.room.modules">

                        <li v-for="module in classroom.room.modules" :key="module.id">
                            <div class="box">
                                <p style="padding-bottom: 4px; font-size: 12px; opacity: .5;">Módulo</p>
                                <div class="module-title">
                                    {{ module.title }}
                                </div>
                                <ol style="    list-style: none;
    opacity: .6;" class="lessons">
                                    <li style="
        
    border-bottom: 1px solid;
    border-color: rgb(255 255 255 / 8%);
                            " v-for="lesson in module.lessons" :key="lesson.id" class="lesson">
                                        <a style="  
                                        display: block;  color: inherit;
    text-decoration: none;
    font-size: 14px;
    padding: 8px 0;" :href="'/classroom/' + lesson._id">{{ lesson.title }}</a>
                                    </li>
                                </ol>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div style="    padding: 30px;
    position: relative;
    z-index: 111111;
    color: #fff;" v-else class="div">
                <h3>Aconteceu um erro ao fazer está requisição</h3>
            </div>
        </div>
        <div v-else style="    padding: 30px;
    position: relative;
    z-index: 111111;
    color: #fff;" class="loading">
            <h4>Carregando...</h4>
        </div>
    </div>
</template>

<script>
import { api } from "@/api";
import Navbar from "../components/Navbar"
import { mapState } from "vuex";

export default {
    name: "ClassRoom",
    computed: {
        ...mapState(["classroom"])
    },
    data() {
        return {
            videoSrc: "",
            loading: true,
            errorPage: false
        }
    },
    created() {
        this.getLessonById(this.$route.params.id)
        console.log(this.$store.state.classroom.lesson)
    },
    methods: {
        async getLessonById(id) {
            try {
                this.loading = true
                const res = await api.get(`users/lesson/${id}`)
                this.$store.dispatch("actionSetLesson", res.data.lession)
                this.getClassRoom(this.classroom.lesson.courseId)
            } catch (err) {
                console.log(err.message)
                this.errorPage = true
            } finally {
                this.loading = false
            }
        },
        async getClassRoom(id) {
            try {
                const res = await api.get(`users/classroom/${id}`)
                this.$store.dispatch("actionSetRoom", res.data.classRoom)
                console.log(res)
            } catch (err) {
                console.log(err.message)
            }
        }
    },
    components: {
        Navbar
    }
}
</script>

<style scoped>
.classroom {
    width: 100%;
    display: flex;
    justify-content: center;
}

.background {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #14171a;
    pointer-events: none;
}

.contents {
    position: relative;
    width: 40%;
    display: flex;
    z-index: 111;
    color: #f9f9f9;
}

.player {
    border-bottom: 1px solid;
    border-color: rgb(255 255 255 / 8%);
}

.player-area {
    width: 100%;
    height: 390px;
    background-color: #111;
    border-radius: 6px;
    overflow: hidden;
    text-align: center;
    margin: 22px 0;
}

.title {
    font-size: 24px;
    font-weight: 500;
}

.modules .list {
    list-style: none;
}

.box {
    border-radius: 6px;
    padding: 12px;
    border: 1px solid;
    border-color: rgb(255 255 255 / 8%);
    margin-bottom: 16px;
}

@media(max-width: 767px) {
    .contents {
        width: 90%;
    }
    .player-area {
        height: 280px;
    }
}
</style>