<template>
    <div class="manager">
        <div v-if="loadingCourse" class="loading">
            <EdukaLoading />
        </div>
        <div v-if="!loadingCourse && !pageError" class="result">
            <header>
                <div class="left">
                    <div class="cover">
                        <img :src="courses.course.cover" alt="Capa do courso">
                    </div>
                    <div class="data">
                        <h1 class="title"> {{ courses.course.title }} </h1>
                        <div class="sub">
                            <span>ID: {{ courses.course.id }}</span>
                            <div class="status">
                                <p v-if="courses.course.role == 'n'">Em construção</p>
                                <p v-if="courses.course.role == 'p'">Pendente</p>
                                <p v-if="courses.course.role == 'a'">Activo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="btns">
                        <button v-if="courses.course.role == 'n' && courses.modules.length"
                            @click="sendToAdmin(courses.course._id)" class="btn action send">Enviar para aprovação</button>
                        <button @click="deleteCourse(courses.course._id)" class="btn action delete">Eliminar este
                            curso</button>
                    </div>
                </div>
            </header>
            <div class="border"></div>
            <div class="body">
                <ul class="options">
                    <li v-if="courses.course.format == 'online'" @click="setTab('modules')" class="options-item"
                        :class="{ active: tab == 'modules' }">
                        <span>Módulos</span>
                        <span class="border"></span>
                    </li>
                    <li v-else @click="setTab('enrollments')" class="options-item"
                        :class="{ active: tab == 'enrollments' }">
                        <span>Inscrições</span>
                        <span class="border"></span>
                    </li>
                    <li @click="setTab('data')" class="options-item" :class="{ active: tab == 'data' }">
                        <span>Dados básicos</span>
                        <span class="border"></span>
                    </li>
                    <li @click="setTab('links')" class="options-item" :class="{ active: tab == 'links' }">
                        <span>PaiaLinks</span>
                        <span class="border"></span>
                    </li>

                </ul>
                <div class="content">
                    <article v-if="tab == 'modules'" class="modules">
                        <div class="content-header">
                            <div class="left">
                                <h1>Módulos</h1>
                            </div>
                            <div class="right">
                                <button @click="openNewModule()" class="btn active">+ Adicionar módulo</button>
                            </div>
                        </div>
                        <div class="content-body">
                            <div v-if="loadingModules" class="loading">
                                <EdukaLoading />
                            </div>
                            <div v-else class="results">
                                <div v-if="courses.modules.length" class="modules">
                                    <div class="actions" style="    margin: 16px 0;">
                                        <p style="    margin-right: 8px;">Ações:</p>
                                        <ul class="actions" :class="{ disable: courses.selected.id == '' }">
                                            <button @click="toggleActiveModule(true)" title="Publicar" class="btn action">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-arrow-up">
                                                    <line x1="12" y1="19" x2="12" y2="5" />
                                                    <polyline points="5 12 12 5 19 12" />
                                                </svg>
                                                Publicar
                                            </button>
                                            <button @click="toggleActiveModule(false)" title="Despublicar"
                                                class="btn action">
                                                <svg title="Despublicar" xmlns="http://www.w3.org/2000/svg" width="14"
                                                    height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-arrow-down">
                                                    <line x1="12" y1="5" x2="12" y2="19" />
                                                    <polyline points="19 12 12 19 5 12" />
                                                </svg>
                                                Despublicar
                                            </button>
                                            <button @click="goToCreateLession()" title="Novo conteúdo" class="btn action
                                            new
                                            ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-file-plus">
                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                    <polyline points="14 2 14 8 20 8" />
                                                    <line x1="12" y1="18" x2="12" y2="12" />
                                                    <line x1="9" y1="15" x2="15" y2="15" />
                                                </svg>
                                                Conteúdo
                                            </button>
                                        </ul>
                                    </div>
                                    <Module v-for="module in courses.modules" :key="module.id" :module="module" />
                                </div>
                                <div v-else class="empty">
                                    <h1>Sem módulos</h1>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article v-if="tab == 'enrollments'" class="modules">
                        
                        <div class="content-body">
                            <div class="empty">
                                <h1>Nenhum inscrito</h1>
                            </div>
                        </div>
                    </article>
                    <article v-if="tab == 'data'" class="data">
                        <h1>Dados básicos</h1>
                        <div class="form">
                            <div class="e-group">
                                <label for="#title">Título do curso: <span class="required">*</span> </label>
                                <input v-model="form.title" id="title" type="text" class="einput">
                                <p class="desc">Informe um título chamativo, algo que irá cativar os estudantes a comprarem
                                    este curso.</p>
                            </div>

                            <div class="e-group">
                                <label for="#title">Descrição: <span class="required">*</span></label>
                                <textarea v-model="form.description" class="einput"
                                    style="height: 150px !important;"></textarea>
                                <p class="desc">Faça uma descrição do seu curso </p>
                            </div>
                            <div class="e-group">
                                <label for="category">Categoria: <span class="required">*</span></label>
                                <select v-model="form.category" id="category" class="einput">
                                    <option value="">-- Selecione --</option>
                                    <option value="Administração e Negócios">Administração e Negócios</option>
                                    <option value="Animais de Estimação">Animais de Estimação</option>
                                    <option value="Arquitetura e Engenharia">Arquitetura e Engenharia</option>
                                    <option value="Artes e Música">Artes e Música</option>
                                    <option value="Auto-ajuda e Desenvolvimento Pessoal">Auto-ajuda e Desenvolvimento
                                        Pessoal</option>
                                    <option value="Automóveis">Automóveis</option>
                                    <option value="Blogs e Redes Sociais">Blogs e Redes Sociais</option>
                                    <option value="Casa e Jardinagem">Casa e Jardinagem</option>
                                    <option value="Culinária, Gastronomia, Receitas">Culinária, Gastronomia, Receitas
                                    </option>
                                    <option value="Design e Templates PSD, PPT ou HTML">Design e Templates PSD, PPT ou HTML
                                    </option>
                                    <option value="Edição de Áudio, Vídeo ou Imagens">Edição de Áudio, Vídeo ou Imagens
                                    </option>
                                    <option value="Educacional, Cursos Técnicos e Profissionalizantes">Educacional, Cursos
                                        Técnicos e
                                        Profissionalizantes</option>
                                    <option value="Eletrodomésticos">Eletrodomésticos</option>
                                    <option value="Eletrônicos">Eletrônicos</option>
                                    <option value="Eletroportáteis">Eletroportáteis</option>
                                    <option value="Entretenimento, Lazer e Diversão">Entretenimento, Lazer e Diversão
                                    </option>
                                    <option value="Esportes e Fitness">Esportes e Fitness</option>
                                    <option value="Filmes e Cinema">Filmes e Cinema</option>
                                    <option value="Geral">Geral</option>
                                    <option value="Histórias em Quadrinhos">Histórias em Quadrinhos</option>
                                    <option value="Idiomas">Idiomas</option>
                                    <option value="Informática">Informática</option>
                                    <option value="Internet Marketing">Internet Marketing</option>
                                    <option value="Investimentos e Finanças">Investimentos e Finanças</option>
                                    <option value="Jogos de Cartas, Poker, Loterias">Jogos de Cartas, Poker, Loterias
                                    </option>
                                    <option value="Jogos de Computador, Jogos Online">Jogos de Computador, Jogos Online
                                    </option>
                                    <option value="Jurídico">Jurídico</option>
                                    <option value="Literatura e Poesia<">Literatura e Poesia</option>
                                    <option value="Marketing de Rede">Marketing de Rede</option>
                                    <option value="Marketing e Comunicação">Marketing e Comunicação</option>
                                    <option value="Meio Ambiente">Meio Ambiente</option>
                                    <option value="Moda e vestuário<">Moda e vestuário</option>
                                    <option value="Moveis e decoração">Moveis e decoração</option>
                                    <option value="Música, Bandas e Shows">Música, Bandas e Shows</option>
                                    <option value="Paquera, Sedução e Relacionamentos">Paquera, Sedução e Relacionamentos
                                    </option>
                                    <option value="Perfumaria">Perfumaria</option>
                                    <option value="Pessoas com deficiência">Pessoas com deficiência</option>
                                    <option value="Plugins, Widgets e Extensões">Plugins, Widgets e Extensões</option>
                                    <option value="Produtividade e Organização Pessoal">Produtividade e Organização Pessoal
                                    </option>
                                    <option value="Produtos infantis">Produtos infantis</option>
                                    <option value="Relatórios, Artigos e Pesquisa">Relatórios, Artigos e Pesquisas</option>
                                    <option value="Religião e Crenças">Religião e Crenças</option>
                                    <option value="Romances, Dramas, Estórias e Contos">Romances, Dramas, Estórias e Contos
                                    </option>
                                    <option value="RPG e Jogos de Mesa">RPG e Jogos de Mesa</option>
                                    <option value="Saúde, Bem-estar e Beleza">Saúde, Bem-estar e Beleza</option>
                                    <option value="Scripts">Scripts</option>
                                    <option value="Segurança do Trabalho">Segurança do Trabalho</option>
                                    <option value="Sexologia e Sexualidade">Sexologia e Sexualidade</option>
                                    <option value="Snippets (Trechos de Vídeo)">Snippets (Trechos de Vídeo)</option>
                                    <option value="Trader">Trader</option>
                                    <option value="Turismo">Turismo</option>
                                </select>
                                <p class="desc">Informe a categoria do seu curso.</p>
                            </div>
                            <div class="e-group">
                                <label for="#title">Email de suporte: </label>
                                <input v-model="form.emailSupport" id="title" type="text" class="einput">
                                <p class="desc">Informe um email de suporte para o seu curso. (opicional)</p>
                            </div>
                            <div class="e-group">
                                <label for="idioma">Idioma: <span class="required">*</span></label>
                                <select id="idioma" class="einput">
                                    <option value="pt">Português</option>
                                </select>
                                <p class="desc">Informe o idioma do seu curso.</p>
                            </div>
                            <div class="btns">
                                <button class="btn edit" @click="updateCourse(courses.course._id)"
                                    :disabled="form.title == '' || form.category == '' || form.description == ''">Salvar
                                    alterações</button>

                            </div>
                        </div>
                    </article>
                    <article v-if="tab == 'links'" class="link">
                        <h1>Paialinks</h1>
                        <div class="e-group">
                            <label for="#title">Checkout: </label>
                            <input readonly :value="`https:/edukaafrica.com/checkout/${courses.course.id}`" id="title"
                                type="text" class="einput">

                        </div>
                    </article>
                </div>
            </div>
        </div>
        <PageError v-if="pageError" />
        <ScreemLoading :show="loadingActions || loadingUpdateCourse || loadingSendToAdmin" />
    </div>
</template>
  
<script>
import { mapState } from "vuex";
import { api } from "@/api";
import Module from "../components/Module.vue";
import ScreemLoading from "../../../components/theme/ScreemLoading.vue";
import EdukaLoading from "../../../components/theme/EdukaLoading.vue";
import PageError from "../../../pages/mycourses/components/PageError";

export default {
    name: "ManagerCourse",
    computed: {
        ...mapState(["courses"])
    },
    data() {
        return {
            pageError: false,
            page: 1,
            limit: 10,
            loadingCourse: true,
            loadingUpdateCourse: false,
            loadingActions: false,
            loadingModules: true,
            loadingSendToAdmin: false,
            tab: '',
            form: {
                title: "",
                category: "",
                idioma: "pt",
                emailSupport: "",
                description: ""
            },
        };
    },
    created() {
        this.getCourse(this.$route.params.id);
    },
    methods: {
        async getCourse(id) {
            try {
                this.loadingCourse = true;
                const res = await api.get(`courses/${id}`);
                this.$store.dispatch("actionSetCourse", res.data.course);
                this.tab = res.data.course.format == 'presence' ? 'enrollments' : 'modules'
                this.loadingCourse = false;
                if(res.data.course.format == 'online') {
                    this.getModulesByCourse(res.data.course._id)
                }
                this.setValuesFromForms()
            }
            catch (err) {
                this.pageError = true
                console.log(err.message);
            } finally {
                this.loadingCourse = false;
            }
        },
        async getModulesByCourse(id) {
            if (id) {
                try {
                    this.loadingModules = true;
                    const res = await api.get(`courses/modules/${id}`);
                    this.loadingModules = false;
                    this.$store.dispatch("actionSetModules", res.data.modules);
                }
                catch (err) {
                    console.log(err);
                }
            }
            else
                return;
        },
        async toggleActiveModule(action) {
            const id = this.courses.selected.id
            if (id) {
                try {
                    this.loadingActions = true
                    await api.put(`courses/module/${id}/toggle_active`, {
                        action
                    });
                    const module = this.courses.modules.find(module => module._id == id)
                    module.isActive = action
                    this.loadingActions = false
                    this.$store.dispatch("actionSetToast", { text: 'Feito', role: 'success' })
                }
                catch (err) {
                    console.log(err);
                    this.$store.dispatch("actionSetToast", { text: 'Aconteceu um erro', role: 'error' })
                } finally {
                    this.loadingActions = false
                }
            }
            else return;
        },
        async sendToAdmin(id) {
            if (id) {
                try {
                    this.loadingSendToAdmin = true
                    const res = await api.put(`courses/${id}/pushed`);
                    if(res.status == 200) {
                        this.$store.state.courses.course.role = 'p'
                        this.$store.dispatch("actionSetToast", { text: "Feito!", role: "success" })
                    }
                    
                }
                catch (err) {
                    console.log(err);
                    this.$store.dispatch("actionSetToast", { text: "Aconteceu um erro", role: "error" })
                } finally {
                    this.loadingSendToAdmin = false
                }
            }
            else return;
        },
        async updateCourse(id) {
            if (this.form.title != '' || this.form.category != '' || this.form.description != '') {
                try {
                    this.loadingUpdateCourse = true
                    await api.put(`courses/${id}`, this.form)
                    const course = this.courses.course
                    Object.assign(course, this.form)
                    this.$store.dispatch("actionSetToast", { text: 'Feito', role: 'success' })
                } catch (err) {
                    console.log(err)
                    this.$store.dispatch("actionSetToast", { text: 'Aconteceu um erro', role: 'error' })
                } finally {
                    this.loadingUpdateCourse = false
                }
            } else return
        },
        deleteCourse(id) {
            this.$router.push({ path: `${this.$route.path}`, query: { open: 'deletecourse', course_id: id } })
        },
        setTab(tab) {
            this.tab = tab;
        },
        setValuesFromForms() {
            Object.assign(this.form, this.courses.course)
        },
        openNewModule() {
            this.$router.push({ path: `${this.$route.path}`, query: { open: 'createmodule' } });
        },
        goToCreateLession() {
            if (this.courses.selected.id != "") {
                const id = this.courses.selected.id
                this.$router.push(`/epanel/course/${this.courses.course._id}/${id}/new_lession`)
            } else return
        }
    },
    components: { Module, ScreemLoading, EdukaLoading, PageError }
};
</script>
  
<style scoped>
.manager {
    color: #333;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
}

.left,
.right,
.btns {
    display: flex;
    align-items: center;
}

h1 {
    font-size: 24px;
    font-weight: 500;
    color: #333;
}

.sub {
    display: flex;
    align-items: center;
    color: var(--gray);
    font-size: 14px;
    font-weight: 400;
}

.subtitle {
    opacity: .75;
    font-weight: 400;
}

.cover {
    position: relative;
    width: 62px;
    height: 62px;
    overflow: hidden;
    border-radius: 4px;
    margin-right: 20px;
    background-color: var(--gray);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .1);
}

.cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    padding: 30px 0;
}

.content-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.body .options {
    display: flex;
    align-items: center;
    padding-top: 20px;
    border-bottom: 1px solid #d9d9d9;
}

.options li {
    display: block;
    position: relative;
    margin: 0;
    font-weight: 400;
    color: #161616;
    background: transparent !important;
    border-radius: 0;
    font-size: 15px;
    height: 35px;
    margin-right: 1.8rem;
    cursor: pointer;
    transition: all 0.2s;
}

.border {
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

.options li.active {
    font-weight: 500;
}

.options li.active>.border {
    display: block;
    color: var(--manager);
    background: var(--manager);
    transition: all 0.3s;
}

.actions {
    display: flex;
    align-items: center;
    font-size: 14px;
    list-style: none;
    font-weight: 400;
    color: var(--gray);
}

.status {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10px;
    font-size: 10px;
    border-radius: 30px;
    padding: 4px 10px;
    margin-left: 6px;
    color: #fff;
    background-color: var(--gray);
}

.btns button {
    background-color: #fff;
    font-size: 13px;
    color: rgb(22, 22, 22);
    border-color: var(--border-color);
    border-radius: 100px;
}

.disable {
    pointer-events: none;
    opacity: .5;
}

.actions:not(.disable)>.btn.action {
    color: #666;
    border-color: #666;
}

.e-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.desc {
    font-weight: 400;
    font-size: 85%;
    opacity: 0.8;
    margin-top: 3px;
}

.required {
    color: #f14668;
}

label {
    padding: 4px 0;
}

.btn.edit {
    background: var(--primary);
    color: #fff;
    border-radius: 6px;
}

.btn.edit:hover {
    background-color: var(--primary-dark);
}

@media(max-width: 767px) {
    header {
        display: block !important;
        margin-bottom: 0px !important;
    }

    h1 {
        display: -webkit-box;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
    }

    header .left {
        margin-bottom: 20px;
    }

    .right {
        margin-bottom: 0px !important;
    }

    .btns .btns .btn {
        margin-left: 0px !important;
    }

    .btn.new {
        display: none;
    }

    .data {
        width: 100%;
    }
}
</style>