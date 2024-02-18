<template>
    <div class="shade" :class="{ show: this.$route.query.open == 'createmodule' }">
        <div class="modal" @click.stop :class="{ show: this.$route.query.open == 'createmodule' }">
            <div class="header">
                <div class="left">
                    <h2 class="modal-title">
                        Novo módulo
                    </h2>
                </div>
                <div class="right">
                    <span @click="close" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</span>
                </div>
            </div>
            <div class="body">
                <div class="e-group">
                    <label for="#title">Título do módulo: <span class="required">*</span> </label>
                    <input v-model="form.title" id="title" type="text" class="einput">
                    <p class="desc">Informe um título para este módulo ex: Módulo 1
                    </p>
                </div>
                <div class="e-group">
                    <label for="freeAt">Acesso após a compra: <span class="required">*</span></label>
                    <select v-model="form.freeAt" id="freeAt" class="einput">
                        <option :value="null">Imediato</option>
                        <option :value="1">1 dia</option>
                        <option :value="2">2 dias</option>
                        <option :value="3">3 dias</option>
                        <option :value="4">4 dias</option>
                        <option :value="5">5 dias</option>
                        <option :value="6">6 dias</option>
                        <option :value="7">7 dias</option>
                    </select>
                    <div class="desc">
                        <p v-if="form.freeAt == null">Nesta opção, este módulo estará acesível logo após o estudante fazer
                            compra.</p>

                        <p v-else>Nesta opção, este módulo estará acessível em até {{ form.freeAt }} dia(s) após a compra.
                        </p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="btns">
                    <button @click="close" class="btn cancel">Cancelar</button>
                    <button @click="createModule" style="margin-left: 12px;" class="btn active"
                        :disabled="form.title == ''">Criar</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { api } from "@/api";
import { mapState } from "vuex";

export default {
    name: "NewModule",
    data() {
        return {
            form: {
                title: "",
                freeAt: null
            }
        };
    },
    computed: {
        ...mapState(["courses"])
    },
    watch: {

    },
    methods: {
        close() {
            this.form = {
                title: "",
                freeAt: null
            }
            this.$router.go(-1);
        },
        async createModule() {
            if (this.form.title != '' && this.courses.course._id != undefined) {
                try {
                    this.$router.go(-1)
                    const res = await api.post(`courses/module/${this.courses.course._id}`, {
                        title: this.form.title,
                        courseId: this.courses.course._id,
                        freeAfterDays: this.form.freeAt
                    })
                    this.$store.state.courses.modules.push(res.data.newModule)
                    this.$store.dispatch("actionSetToast", { text: 'Módulo criado com sucesso!', role: 'success' })
                    this.form = {
                        title: "",
                        freeAt: null
                    }
                } catch (err) {
                    this.$store.dispatch("actionSetToast", { text: 'Aconteceu um erro', role: 'error' })
                    this.form = {
                        title: "",
                        freeAt: null
                    }
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

.modal {
    width: 400px !important;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px 12px;
    border-bottom: 1px solid transparent;
}

.header .left,
.right,
.close {
    display: flex;
    flex-direction: row;
    align-items: center;
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

.error {
    color: #f14668 !important;
    border-color: #f14668 !important;
}

.desc {
    font-weight: 400;
    font-size: 85%;
    opacity: 0.8;
    margin-top: 3px;
}
</style>