<template>
    <div class="module">
        <div class="module-header">
            <div class="left">
                <div class="actions">
                    <span title="Selecionar" @click="select(module._id)" class="select-box"
                        :class="{ active: courses.selected.id == module._id }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-check">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </span>
                </div>
                <div class="data">
                    <h1 @click="select(module._id)" class="module-title">
                        {{ module.title }}
                    </h1>
                    <div class="rw">
                        <div class="status" :title="module.isActive ? 'Público' : 'N/Público'"
                            :class="{ active: module.isActive }"></div>
                        <p class="module-subtitle">
                            <span> {{ module.lessons.length }} aulas </span>
                        </p>
                    </div>

                </div>
            </div>
            <div class="right">
                <div class="btns">
                    <button @click="deleteModule(module._id)" class="btn action">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-trash-2">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                        Eliminar
                    </button>
                    <router-link style="text-decoration: none;" :to="`/epanel/course/module/${module._id}/edit`"
                        class="btn action">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-edit">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Editar
                    </router-link>
                </div>
            </div>
        </div>
        <div class="module-body">
            <div class="bar">
                <button @click="toggleIsView" class="btn-open">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-chevron-up">
                        <polyline points="18 15 12 9 6 15" />
                    </svg>
                </button>
            </div>
            <div class="contents" :class="{ open: isView }">
                <ul v-if="module.lessons.length" class="lessons">
                    <li v-for="lesson in module.lessons" :key="lesson.id" class="lesson">
                        <div class="left">
                            <div class="lesson-title">
                                {{ lesson.title }}
                            </div>
                        </div>
                        <div class="right">
                            <a title="Ver" :href="`/classroom/${lesson._id}`" target="_blank" class="btn action">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-external-link">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </a>
                            <button title="Eliminar" @click="deleteLesson(lesson._id, module._id)" class="btn action">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-trash-2">
                                    <polyline points="3 6 5 6 21 6" />
                                    <path
                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" y1="11" x2="10" y2="17" />
                                    <line x1="14" y1="11" x2="14" y2="17" />
                                </svg>
                            </button>
                            <router-link title="Editar" :to="`/epanel/course/lesson/${lesson._id}/edit`" class="btn action">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-edit">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </router-link>
                        </div>
                    </li>
                </ul>
                <div class="empty">
                    <router-link :to="`/epanel/course/${this.courses.course._id}/${module._id}/new_lession`"
                        class="btn active">+ Novo conteúdo</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Module",
    computed: {
        ...mapState(["courses"])
    },
    data() {
        return {
            isView: false
        }
    },
    props: {
        module: Object
    },
    methods: {
        select(id) {
            if (this.courses.selected.id != id) {
                this.$store.dispatch("actionSetSelected", {
                    type: "module",
                    id
                })
            } else {
                this.$store.dispatch("actionSetSelected", {
                    type: "",
                    id: ""
                })
            }
        },
        toggleIsView() {
            this.isView = !this.isView
        },
        deleteModule(id) {
            this.$router.push({ path: `${this.$route.path}`, query: { open: 'deletemodule', module_id: id } });
        },
        deleteLesson(lesson_Id, module_id) {
            this.$router.push({ path: `${this.$route.path}`, query: { open: 'deletelesson', lesson_id: lesson_Id, module_id: module_id } });
        }
    }
}
</script>

<style scoped>
.module {
    position: relative;
    width: auto;
    background-color: #Fff;
    border: 1px solid #D5DFFF;
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 12px;
}

.module-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.module-title {
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    color: inherit;
}

.module-subtitle {
    font-size: 15px;
    color: var(--gray);
    font-weight: 400;
}

.bar {
    position: relative;
    display: flex;
    width: auto;
    justify-content: center;
    align-items: center;
    border-top: 1px dashed var(--border-color);
    margin: 8px 0;
}

.btn-open {
    position: absolute;
    top: -13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: 24px;
    height: 24px;
    outline: none;
    border: 1px solid var(--border-color);
    background-color: #Fff;
    border-radius: 100px;
}

.btn-open:hover {
    transform: scale(1.1);
}

.left,
.right,
.btns {
    display: flex;
}

.btns>.btn.action {
    border-color: var(--border-color);
    color: var(--gray);
}

.btn-open svg {
    width: 14px;
    height: 14px;
}

.select-box:hover {
    box-shadow: 0 0 0 .125em rgba(0, 176, 144, .25);
    border-color: var(--success);
}

.select-box.active {
    background-color: var(--success);
    border-color: var(--success);

}

.contents {
    height: 0px;
    overflow: hidden;
    transition: all .3s cubic-bezier(.87, 0, .13, 1);
}

.contents.open {
    height: auto;
    overflow: auto;
    transition: all .3s cubic-bezier(.87, 0, .13, 1);
}

.lessons {
    list-style: none;
}

.lessons li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    color: inherit;
    padding: 12px 8px;
    font-size: 14px;
    border-top: 0.5px solid var(--border-color);
    transition: all .3s;
}

.lessons li:hover {
    transition: all .3s;
    background-color: rgba(228, 255, 246, 0.27);
    color: var(--success);
}

.lessons li .right>.btn.action {
    padding: 4px;
    border-width: 0.2px;
    border-color: var(--border-color);
    text-decoration: none;
}

.lessons li .right>.btn.action svg {
    margin: 0px;
}

.rw {
    display: flex;
    align-items: center
}

.status {
    width: 12px;
    height: 12px;
    background-color: var(--border-color);
    margin-right: 4px;
    border-radius: 100px;
}

.status.active {
    background-color: var(--success);
}
</style>