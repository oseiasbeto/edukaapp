<template>
    <div class="shade" @click="close" :class="{ show: marketplace.modal.name == 'EditProfile' && marketplace.modal.show }">
        <div class="modal" @click.stop :class="{ show: marketplace.modal.name == 'EditProfile' && marketplace.modal.show }">
            <div class="header">
                <div class="left">
                    <h2 class="modal-title">
                        Editar perfil
                    </h2>
                </div>
                <div class="right">
                    <span @click="close" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</span>
                </div>
            </div>
            <div class="body">
                <div class="e-group">
                    <label for="#title">Nome completo: <span class="required">*</span> </label>
                    <input v-model="form.username" id="title" type="text" class="einput">
                </div>
                <div class="e-group">
                    <label for="#title">Descrição: <span class="required">*</span> </label>
                    <textarea v-model="form.description" class="einput" style="height: 60px !important;"></textarea>
                    <p class="desc">Informe um título para este módulo ex: Módulo 1
                    </p>
                </div>
                <div class="e-group">
                    <label for="#title">Facebook:</label>
                    <input v-model="form.social.facebook" id="title" type="text" class="einput">
                </div>
                <div class="e-group">
                    <label for="#title">Twitter:</label>
                    <input v-model="form.social.twitter" id="title" type="text" class="einput">
                </div>
                <div class="e-group">
                    <label for="#title">Youtube:</label>
                    <input v-model="form.social.youtube" id="title" type="text" class="einput">
                </div>
            </div>
            <div class="modal-footer">
                <div class="btns">
                    <button @click="close" class="btn cancel">Cancelar</button>
                    <button @click="editProfile" style="margin-left: 12px;" class="btn active"
                        :disabled="form.username == ''">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { api } from "@/api";
import { mapState } from "vuex";

export default {
    name: "EditProfile",
    data() {
        return {
            form: {
                username: "",
                description: "",
                social: {
                    facebook: "",
                    twitter: "",
                    youtube: ""
                }
            }
        };
    },
    computed: {
        ...mapState(["marketplace", "auth"])
    },
    watch: {
        "marketplace.modal.name"() {
            Object.assign(this.form, this.auth.user)
        }
    },
    created() {

    },
    methods: {
        close() {
            this.$store.dispatch("actionSetModal", {
                name: "",
                id: "",
                show: false
            })
        },
        async editProfile() {
            if (this.form.username != '') {
                try {
                    this.close()
                    const res = await api.put('users', this.form)

                    if (res.status == 200) {
                        this.$store.dispatch("actionSetToast", { text: 'Alterações feitas com sucesso!', role: 'success' })
                        Object.assign(this.$store.state.auth.user, this.form)
                    }
                } catch (err) {
                    this.$store.dispatch("actionSetToast", { text: 'Aconteceu um erro', role: 'error' })
                    this.close()
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