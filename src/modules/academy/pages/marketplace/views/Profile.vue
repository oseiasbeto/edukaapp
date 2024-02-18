<template>
    <div class="profile">
        <div v-if="loading" class="loading">
            <EdukaLoading />
        </div>
        <div v-if="!loading && marketplace.profile._id != undefined" class="content">
            <div class="row">
                <div class="profile-cover">
                    <button v-if="marketplace.profile._id.toString() == auth.user._id.toString()"
                        @click="openEditProfileAvatar" class="btn-upload">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"
                            fill="currentColor">
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                                d="M20 4h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z">
                            </path>
                        </svg>
                    </button>
                    <img :src="marketplace.profile.avatar">

                </div>
                <div class="text">
                    <h2 class="username">
                        {{ marketplace.profile.username }}
                    </h2>
                    <div class="follows">
                        <div class="followers">
                            <div class="count">{{ marketplace.courses.data.length }}</div>
                            <p class="txt">Cursos publicados</p>
                        </div>
                        <div class="followings">
                            <div class="count">0</div>
                            <p class="txt">Alunos</p>
                        </div>
                    </div>
                    <div class="btns">
                        <button @click="openEditProfile"
                            v-if="marketplace.profile._id.toString() == auth.user._id.toString()" style="margin-top: 28px;"
                            class="btn">
                            Editar perfil
                        </button>
                        <span style="    display: flex;
    gap: 0.75rem;" v-if="marketplace.profile.social != null">
                            <a v-if="marketplace.profile.social.facebook" :href="marketplace.profile.social.facebook"
                                target="_blank" style="margin-top: 28px;" class="btn">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                </svg>
                                Facebook
                            </a>
                            <a v-if="marketplace.profile.social.twitter" :href="marketplace.profile.social.twitter"
                                target="_blank" style="margin-top: 28px;" class="btn">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </svg>
                                Twitter
                            </a>
                            <a v-if="marketplace.profile.social.youtube" :href="marketplace.profile.social.youtube"
                                target="_blank" style="margin-top: 28px;" class="btn">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                </svg>
                                Youtube
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="tabs">
                <div @click="setTab('courses')" :class="`${tab == 'courses' ? 'tab active' : 'tab'}`">
                    <span>Cursos</span>
                    <div class="border"></div>
                </div>
                <div @click="setTab('description')" :class="`${tab == 'description' ? 'tab active' : 'tab'}`">
                    <span>Descrição</span>
                    <div class="border"></div>
                </div>
                <div @click="setTab('conquest')" :class="`${tab == 'conquest' ? 'tab active' : 'tab'}`">
                    <span>Conquistas</span>
                    <div class="border"></div>
                </div>
            </div>
            <section v-if="tab == 'courses'">
                <div v-if="!loading" class="sear">
                    <CourseList v-if="marketplace.courses.data.length">
                        <CardCourse v-for="course in marketplace.courses.data" :course="course" :key="course.id" />
                    </CourseList>
                    <div v-else class="empty">
                        <h1>Nenhum curso</h1>
                    </div>
                </div>
            </section>
            <section class="description" v-if="tab == 'description'">
                <p class="text">
                    {{ marketplace.profile.description || '' }}
                </p>
            </section>
            <section v-if="tab == 'conquest'">
                <div class="empty">
                    <h1>Nenhuma conquista</h1>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import { api } from "@/api";
import { mapState } from "vuex";
import EdukaLoading from "../../../components/theme/EdukaLoading.vue";
import CardCourse from '../components/CardCourse.vue';
import CourseList from '../components/CourseList.vue';

export default {
    name: "Profile",
    computed: {
        ...mapState(["marketplace", "auth"])
    },
    data() {
        return {
            tab: "courses",
            loading: true,
            page: 1,
            limit: 10
        };
    },
    created() {
        this.getProfile();
    },
    methods: {
        setTab(tab) {
            this.tab = tab;
        },
        async getProfile() {
            try {
                const res = await api.get(`users/user/${this.$route.params.id}`);
                this.$store.dispatch('actionSetProfile', res.data.user);
                this.searchCourses(res.data.user.username, this.page, this.limit)
                document.title = `${this.marketplace.profile.username} | Eduka África`;
            }
            catch (err) {
                console.log(err.message);
            }
        },
        async searchCourses(keywords, page, limit) {
            try {
                const res = await api.get(`users/courses/search?keywords=${keywords}&page=${page}&limit=${limit}`)
                this.$store.dispatch("actionSetCourses", res.data.courses)
                this.loading = false
            } catch (err) {
                console.log(err.message)
            }
        },
        openEditProfile() {

            this.$store.dispatch("actionSetModal", {
                name: 'EditProfile',
                id: "",
                show: true
            })
        },
        openEditProfileAvatar() {
            this.$store.dispatch("actionSetModal", {
                name: 'EditProfileAvatar',
                id: "",
                show: true
            })
        }
    },
    components: { EdukaLoading, CardCourse, CourseList }
}
</script>
<style scoped>
.profile {}

.profile-cover {
    position: relative;
    width: 150px;
    height: 150px;
    background-color: #888;
    border-radius: 100px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
}

.profile-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
}

.row {
    display: flex;
    flex-direction: row;
}

.text {
    margin-left: 18px;
}

.row h2 {
    font-size: 33px;
    font-family: "Raleway", sans-serif;
}

.follows {
    display: flex;
    flex-direction: row;
}

.follows .followers {
    margin-right: 23px;
}

.follows div {
    display: flex;
    align-items: center;
}

.count {
    font-family: "Raleway", sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
}

.txt {
    font-weight: 400;
    margin-left: 4px;
    opacity: 0.8;
}

.tabs {
    display: flex;
    align-items: center;
    padding-top: 20px;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 33px;
    user-select: none;
}

.desc {
    font-weight: 400;
}

.tabs .tab {
    display: block;
    position: relative;
    margin: 0;
    font-weight: 400;
    color: #161616;
    background: transparent !important;
    border-radius: 0;
    font-size: 14px;
    height: 35px;
    margin-right: 1.80rem;
    cursor: pointer;
    transition: all 0.2s;
}

.tabs .tab .border {
    display: none;
    position: absolute;
    bottom: 0px;
    left: 0;
    font-weight: 500;
    height: 4px;
    width: 100%;
    background-color: #272d35;
    transition: all 0.3s;
}

.tabs .tab:hover>.border {
    transition: all 0.3s;
    background: rgba(85, 91, 97, 0.5);
}

.tabs .tab.active {
    font-weight: 500;
}

.tab.active>.border {
    display: block;
    transition: all 0.2s;
}

.btn {
    background-color: #fff;
    border: 1px solid var(--border-color)
}

.description .text {
    font-weight: 400;
    margin: 0 !important
}

.btns {
    display: flex;
    gap: 0.75rem
}

.btns a {
    display: flex;
    color: #161616;
}

.btns svg {
    width: 16px;
    margin-right: 5px;
    opacity: 0.5;
}

.btn-upload {
    position: absolute;
    bottom: 0;
    left: 113px;
    cursor: pointer;
    min-width: 36px;
    height: 36px;
    padding: 0px 3px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    z-index: 111
}

.btn-upload svg {
    width: 17px;
    height: 17px
}

@media(max-width: 767px) {
    .profile-cover {
        width: 80px;
        height: 80px;
    }

    .btn-upload {
        left: 50px;
        min-width: 28px !important;
        height: 28px !important;
    }

    .username {
        font-size: 24px !important;
        font-family: "Raleway", sans-serif;
    }

    .btn-upload svg {
        width: 14px;
        height: 14px;
        z-index: 1 !important;
    }

    .follows {
        font-size: 14px !important;
    }

    .text {
        width: calc(100% - 80px);
        margin-left: 0 !important;
    }
    .btn {
        margin-top: 0 !important;
    }

    .btns {
        margin-top: 20px;
        overflow: hidden;
        overflow-x: auto;
    }
    .username, .follows {
        margin-left: 12px;
    }
    .btns a {
        margin-top: 0 !important;
    }
}</style>