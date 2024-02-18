<template>
    <div class="shade" @click="close" :class="{ show: marketplace.modal.name == 'viewCourse' && marketplace.modal.show }">
        <div class="modal" @click.stop :class="{ show: marketplace.modal.name == 'viewCourse' && marketplace.modal.show }">
            <span v-if="!loading && courses.course.id != undefined">
                <div class="header">
                    <div class="row">
                        <div class="left">
                            <h2 class="modal-title">
                                {{ courses.course.title || 'Sem título' }}
                            </h2>
                        </div>
                        <div class="right">
                            <span @click="close" type="button" class="close" data-dismiss="modal"
                                aria-hidden="true">×</span>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <span>ID: <strong>{{ courses.course.id }}</strong></span>
                        </li>
                        <span style="opacity: 0.5">|</span>
                        <li>
                            <span>Curso: <strong>{{ courses.course.format == 'online' ? 'Online' : 'Prensencial'
                            }}</strong></span>
                        </li>
                        <span style="opacity: 0.5">|</span>
                        <li>
                            <span>Educador: <strong>{{ courses.course.educator.username
                            }}</strong></span>
                        </li>
                    </ul>
                </div>
                <div class="body">
                    <div class="cover_info" style="display: flex; gap: 1rem;">
                        <div class="cover">
                            <img :src="courses.course.cover">
                        </div>
                        <div class="info">
                            <div class="price">
                                <span>Investimento:</span>
                                <strong> {{ courses.course.price == 0 ? 'Grátis' : courses.course.price}}{{ courses.course.price == 0 ? '' : ' Kz' }}</strong>
                            </div>
                            <ul v-if="courses.course.format == 'presence'">
                                <li>
                                    <span>Local:</span> <strong> {{ courses.course.location }} </strong>
                                </li>
                                <li>
                                    <span>Abertura:</span> <strong> {{ courses.course.dataStart }} </strong>
                                </li>
                                <li>
                                    <span>Incerramento:</span> <strong> {{ courses.course.dataEnd }} </strong>
                                </li>
                                <li>
                                    <span>Dias:</span> <strong> {{ courses.course.daysatweek }} </strong>
                                </li>
                                <li>
                                    <span>Horário:</span> <strong> {{ courses.course.timeStart }} </strong> - <strong> {{
                                        courses.course.timeEnd }} </strong>
                                </li>
                            </ul>
                            <ul v-else>
                                <li>
                                    <span>Idioma:</span> <strong> Português
                                    </strong>
                                </li>
                                <li>
                                    <span>Módulos:</span> <strong> 2
                                    </strong>
                                </li>
                                <li>
                                    <span>Acesso:</span> <strong> Vitalício
                                    </strong>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Categoria:</span> <strong class="category"> {{ courses.course.category }}
                                    </strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tabs">
                        <div @click="setTab('description')" :class="`${tab == 'description' ? 'tab active' : 'tab'}`">
                            <span>Descrição</span>
                            <div class="border"></div>
                        </div>
                        <div @click="setTab('requirement')" :class="`${tab == 'requirement' ? 'tab active' : 'tab'}`">
                            <span>Requisitos</span>
                            <div class="border"></div>
                        </div>
                         <div @click="setTab('topics')" :class="`${tab == 'topics' ? 'tab active' : 'tab'}`">
                            <span>Tópicos</span>
                            <div class="border"></div>
                        </div>
                        <div @click="setTab('target')" :class="`${tab == 'target' ? 'tab active' : 'tab'}`">
                            <span>Público álvo</span>
                            <div class="border"></div>
                        </div>
                    </div>
                    <section v-show="tab == 'description'">
                        <p class="text"> {{ courses.course.description }} </p>
                    </section>
                    <section v-show="tab == 'requirement'">
                        <p class="text"> {{ courses.course.requirement }} </p>
                    </section>
                    <section v-show="tab == 'target'">
                        <p class="text"> {{ courses.course.target }} </p>
                    </section>
                    <section v-show="tab == 'topics'">
                        <p class="text"> {{ courses.course.topics }} </p>
                    </section>
                </div>
                <div class="modal-footer">
                    <div class="btns">
                        <button @click="close" class="btn cancel">Cancelar</button>
                        <a :href="'/checkout/' + courses.course.id" style="margin-left: 12px;"
                            class="btn active">Inscrever-se</a>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>
  
<script>
import { api } from "@/api";
import { mapState } from "vuex";

export default {
    name: "ViewModule",
    computed: {
        ...mapState(["courses", "marketplace"])
    },
    data() {
        return {
            tab: "description",
            loading: false
        }
    },
    watch: {
        "marketplace.modal.id"() {
            if (this.marketplace.modal.show && this.marketplace.modal.name == 'viewCourse') {
                this.getCourseById(this.marketplace.modal.id)
            } else return
        }
    },
    methods: {
        close() {
            this.$store.dispatch("actionSetModal", {
                name: "",
                id: "",
                show: false
            })
            this.tab = 'description'
        },
        setTab(tab) {
            this.tab = tab
        },
        async getCourseById(id) {
            if (id) {
                try {
                    this.loading = true
                    const res = await api.get(`courses/${id}`);
                    this.$store.dispatch("actionSetCourse", res.data.course);
                    this.loading = false
                } catch (err) {
                    this.loading = false
                    this.close()
                    this.$store.dispatch("actionSetToast", { text: 'Aconteceu um erro', role: 'error' })
                    console.log(err.message)
                }
            } else return
        }
    },
    components: {}
};
</script>
<style scoped>
.shade {
    background-color: rgb(0 0 0 / 30%);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw !important;
    height: 100vh;
    z-index: 1040;
    opacity: 0;
    transition: .25s all;
    visibility: hidden;
    overflow: auto;
}
.text {
    font-weight: 400;
}
.modal {
    width: 600px !important;
    margin: auto 0;
    font-size: 14px;
    z-index: 1110 !important;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: .25s all;
    box-shadow: 0 6px 24px rgba(0, 0, 0, .35);
    background-color: #fff;
    border-radius: 6px;
}

.header {
    padding: 16px 24px 16px;
    border-bottom: 1px solid var(--border-color);
}

.header .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.info {
    width: calc(100% - 150px);
}

.header .left,
.right,
.close {
    display: flex;
    flex-direction: row;
}

.header ul {
    display: flex;
    align-items: center;
    color: #888;
    gap: 0.5rem;
    list-style: none;
}

.close {
    cursor: pointer;
    font-size: 28px;
    transform: scale(1.1);
    font-weight: 400;
    margin-top: -8px;
    opacity: .7;
}

.modal-title {
    font-weight: 500;
    font-size: 22px;
    line-height: 1.42857143;
}

.body {
    padding: 24px;
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow-y: auto;
}

.modal-footer {
    padding: 24px;
    border-radius: 0 0 6px 6px;
    margin-top: 0;
    padding-top: 12px;
    padding-bottom: 16px;
    border-top: 1px solid;
    border-color: var(--border-color);
}

.modal-footer .btns {
    display: flex;
    align-items: center;
    justify-content: end;
}

.modal ::-webkit-scrollbar {
    width: 4px;
}

.modal::-webkit-scrollbar-track {
    background: transparent;
    border: unset;
    width: 0;
}

.modal::-webkit-scrollbar-thumb {
    background: var(--color-secondary-bg-for-transparent);
}

.modal.show {
    transform: translate3d(0px, 0, 0);
    transition: .25s all;
}

.shade.show {
    transition: .25s all;
    opacity: 1;
    visibility: visible;
}

.e-group {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.days {
    pointer-events: none;
    position: absolute;
    right: 12px;
    top: 36px;
    font-size: 14px;
}

label {
    padding: 4px 0;
}

.required {
    color: #f14668;
}

.btn.active {
    background-color: #00b2bd;
    transition: background-color .25s ease-in-out;
}

.btn.active:hover {
    background-color: #00838a;
}

.error {
    color: #f14668 !important;
    border-color: #f14668 !important;
}
.cover {
    width: 150px;
    height: 150px;
    border-radius: 4px;
    overflow: hidden;
}

.cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.info ul {
    list-style: none;
}

.info ul li span {
    font-weight: 400;
}

.price {
    font-size: 1.5rem;
    margin-bottom: 12px;
}

.price span {
    font-weight: 400;
}

.price strong {
    font-family: "Raleway", sans-serif;
    color: var(--success);
}

.category {
    padding: 2px 4px;
    font-size: 11px;
    background-color: #ebfffc;
    border-color: transparent;
    color: #00947e;
    border: 1px solid;
    height: 13px;
    border-radius: 2px;
}

.tabs {
    display: flex;
    align-items: center;
    padding-top: 20px;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 16px;
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
    background: rgba(85, 91, 97, 0.5);
    transition: all 0.3s;
}

.tabs .tab:hover {
    transition: all 0.3s;
}

.tabs .tab.active {
    font-weight: 500;
}

.tab.active>.border {
    display: block;
    background: var(--manager);
    transition: all 0.2s;
}
</style>