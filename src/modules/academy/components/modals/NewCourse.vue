<template>
    <div class="shade show">
        <div class="modal-dialog">
            <div class="modal show" @click.stop>
                <div class="header">
                    <h4>Etapas {{ et }} / 4</h4>
                    <button @click="close" class="close">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m5.5 5.5 13 13m-13 0 13-13" class="icon_svg-stroke" stroke="#666" stroke-width="1.5"
                                fill="#fff" fill-rule="evenodd" stroke-linecap="round"></path>
                        </svg>
                    </button>
                    <div :style="`width: ${progress}%`" class="progress"></div>
                </div>
                <div class="body">
                    <div class="alert" :class="{ error: alert.type == 'error' }" v-show="alert.show">
                        <p>
                            {{ alert.message }}
                        </p>
                    </div>
                    <section v-show="et == 1" id="et-1" class="et">
                        <div class="et-container">
                            <header>
                                <h1 class="et-title">
                                    Qual será o título do seu Curso?
                                </h1>
                                <p class="et-subtitle">
                                    Escolhe um título curto e objetivo. Algo que identifique o teu curso.
                                </p>
                            </header>

                            <div class="et-body">
                                <input v-model="form.title" class="form-control" type="text"
                                    placeholder="Por ex: Aprenda Programação do zero">
                            </div>
                        </div>
                    </section>
                    <section v-show="et == 2" id="et-1" class="et">
                        <div class="et-container">
                            <header>
                                <h1 class="et-title">
                                    Que categoria melhor se encaixa no conhecimento que você vai compartilhar?
                                </h1>
                                <p class="et-subtitle">
                                    Se você não tem certeza da categoria certa, é possível alterá-la mais tarde.
                                </p>
                            </header>

                            <div class="et-body">
                                <select class="form-control" id="categoria" name="categoria" data-container="body"
                                    data-toggle="popover" data-trigger="focus" data-placement="right"
                                    data-content="Selecione a categoria que mais se enquadra no seu produto." title=""
                                    data-original-title="<i class='fa fa-bolt padding-right-sm'></i> Dica">
                                    <option value="">-- Selecione --</option>
                                    <option value="1">Administração e Negócios</option>
                                    <option value="2">Animais de Estimação</option>
                                    <option value="3">Arquitetura e Engenharia</option>
                                    <option value="4">Artes e Música</option>
                                    <option value="5">Auto-ajuda e Desenvolvimento Pessoal</option>
                                    <option value="6">Automóveis</option>
                                    <option value="7">Blogs e Redes Sociais</option>
                                    <option value="8">Casa e Jardinagem</option>
                                    <option value="9">Culinária, Gastronomia, Receitas</option>
                                    <option value="10">Design e Templates PSD, PPT ou HTML</option>
                                    <option value="11">Edição de Áudio, Vídeo ou Imagens</option>
                                    <option value="12">Educacional, Cursos Técnicos e Profissionalizantes</option>
                                    <option value="48">Eletrodomésticos</option>
                                    <option value="46">Eletrônicos</option>
                                    <option value="47">Eletroportáteis</option>
                                    <option value="13">Entretenimento, Lazer e Diversão</option>
                                    <option value="14">Esportes e Fitness</option>
                                    <option value="15">Filmes e Cinema</option>
                                    <option value="16">Geral</option>
                                    <option value="17">Histórias em Quadrinhos</option>
                                    <option value="18">Idiomas</option>
                                    <option value="19">Informática</option>
                                    <option value="20">Internet Marketing</option>
                                    <option value="21">Investimentos e Finanças</option>
                                    <option value="22">Jogos de Cartas, Poker, Loterias</option>
                                    <option value="23">Jogos de Computador, Jogos Online</option>
                                    <option value="24">Jurídico</option>
                                    <option value="25">Literatura e Poesia</option>
                                    <option value="26">Marketing de Rede</option>
                                    <option value="27">Marketing e Comunicação</option>
                                    <option value="28">Meio Ambiente</option>
                                    <option value="44">Moda e vestuário</option>
                                    <option value="49">Moveis e decoração</option>
                                    <option value="29">Música, Bandas e Shows</option>
                                    <option value="30">Paquera, Sedução e Relacionamentos</option>
                                    <option value="50">Perfumaria</option>
                                    <option value="43">Pessoas com deficiência</option>
                                    <option value="31">Plugins, Widgets e Extensões</option>
                                    <option value="32">Produtividade e Organização Pessoal</option>
                                    <option value="45">Produtos infantis</option>
                                    <option value="33">Relatórios, Artigos e Pesquisas</option>
                                    <option value="34">Religião e Crenças</option>
                                    <option value="35">Romances, Dramas, Estórias e Contos</option>
                                    <option value="36">RPG e Jogos de Mesa</option>
                                    <option value="37">Saúde, Bem-estar e Beleza</option>
                                    <option value="38">Scripts</option>
                                    <option value="39">Segurança do Trabalho</option>
                                    <option value="40">Sexologia e Sexualidade</option>
                                    <option value="41">Snippets (Trechos de Vídeo)</option>
                                    <option value="52">Trader</option>
                                    <option value="42">Turismo</option>
                                </select>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="footer">
                    <button @click="prev">Anterior</button>
                    <button @click="next()" class="next" :class="{ disable: form.title.length == 0 }">Continuar</button>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
///import { api } from "@/api";
import { mapState } from "vuex"

export default {
    name: "NewCourse",
    components: {

    },
    computed: {
        ...mapState(["home", "users"])
    },
    data() {
        return {
            form: {
                title: "",
                isPrivate: false
            },
            et: 1,
            progress: 25,
            alert: {
                show: false,
                type: "",
                message: ""
            },
            loading: false
        };
    },
    props: {
        id: String,
    },

    methods: {
        close() {
            this.$store.dispatch("actionSetModal", {
                name: "",
                option: 1,
            })
        },

        next() {
            switch (this.et) {
                case 1:
                    if (this.form.title == "") {
                        this.alert = {
                            show: true,
                            type: "error",
                            message: "Aconteceu um erro ao tentar passar para a próxima etapa, purfavor tente novamente."
                        }
                    } else {
                        this.et = 2
                        this.progress = (this.progress + 25)
                    }
                    break;
                case 2:
                    if (this.form.category == "") {
                        this.alert = {
                            show: true,
                            type: "error",
                            message: "Aconteceu um erro ao tentar passar para a próxima etapa, purfavor tente novamente."
                        }
                    } else {
                        this.et = 3
                        this.progress = (this.progress + 25)
                    }
                    break;
            }
        },
        prev() {
            if (this.et > 1) {
                this.et = (this.et - 1)
                this.progress = (this.progress - 25)
            }
        }

    }
};
</script>
<style scoped>
.shade {
    display: flex;
    background: rgb(0 0 0 / 50%);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1070;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
}

.modal-dialog {
    margin: 1.75rem auto;
}

.modal {
    position: relative;
    width: 600px !important;
    min-height: 120px;
    max-height: 600px;
    background-color: #ffffff;
    font-size: 14px;
    z-index: 1110 !important;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #1d262d;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all .3s;
    transform: translate(0%, -66%);
}

.header {
    position: relative;
    border-bottom: 1px solid;
    border-color: rgb(0 0 0 / 12%);
    padding: 12px 12px 20px 18px;
}

.footer {
    display: flex;
    justify-content: space-between;
    position: sticky;
    bottom: 0;
    left: 0;
    padding: 12px 16px;
    border-top: 1px solid rgb(0 0 0 / 12%);
}

.footer button {
    color: #1c1d1f;
    background-color: transparent;
    border: 1px solid #1c1d1f;
    border-radius: 0;
    width: 81px;
    height: 45px;
    font-weight: 700;
    font-size: 15px;
    padding: 0 !important;
    min-width: 0px !important;
    cursor: pointer;
}

.footer button.next {
    background-color: #1c1d1f;
    color: #fff;
    width: 100px;
}

.next.disable {
    pointer-events: none;
    background-color: #1c1d1f;
    cursor: not-allowed !important;
    user-select: none;
    opacity: .5;
}

.alert {
    padding: 12px;
    background: #c8fdcc;
    color: #419773;
    margin-bottom: 14px;
}

.alert.error {
    background: #fdc8c8;
    color: #974141;
}

section {
    height: 100%;
}

.body {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 50px 16px;
}

.modal-title {
    font-size: 16px;
    font-weight: 600;
}

.form-control {
    width: calc(100% - 24px);
    flex: 1;
    background-clip: padding-box;
    background-color: transparent;
    color: #000;
    font-size: 15px;
    font-weight: 500;
    border: 1px solid #000;
    line-height: 1.5;
    padding: 10px 11px;
    /* border-radius: 4px; */
    margin-top: 6px;
    outline: none;
}

.et {
    display: flex;
    justify-content: center;
}

.et header {
    margin-bottom: 3.2rem;
}

.et-container {
    width: 480px;
}

.et-title {
    font-weight: 700;
    font-size: 1.8rem;
    text-align: center;
}

.et-subtitle {
    font-size: inherit;
    font-weight: 400;
    text-align: center;
}

.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
}


option {
    background: #333;
    color: #fff;
    padding: 8px;
}

.danger {
    border-color: var(--danger)
}

.feedback-error {
    display: none;
    font-size: 11px;
    color: var(--danger);
    font-weight: 600;
    padding: 4px 0;
}

.feedback-error.show {
    display: block
}

.show {
    visibility: visible;
    opacity: 1;
    transform: translate(0%, 0%);
}

.progress {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #2bc48a;
    height: 4px;
    width: auto;
}

button:disabled {
    pointer-events: none;
}

.close {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    right: 0px;
    top: 0;
    width: 40px;
    height: 40px;
    border-radius: 0px;
    z-index: 111111111;
    pointer-events: auto;
    cursor: pointer;
    background: transparent;
    border: none;
}

h4 {
    font-size: 18px;
    font-weight: 500;
}

.isprivate {
    display: flex;
    align-items: center;
    margin-top: 16px;
    cursor: pointer;
    width: 200px;
}

.isprivate span {
    margin-top: 2px;
    margin-left: 8px;
}

.sended {
    float: right;
    pointer-events: all;
    cursor: pointer;
    background: var(--color-primary);
    color: #fff;
    border-radius: 100px;
    height: 44px;
    width: 148px;
}</style>