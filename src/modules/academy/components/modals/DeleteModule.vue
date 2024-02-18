<template>
    <div class="shade" :class="{ show: this.$route.query.open == 'deletemodule' }">
        <div class="modal delete" @click.stop :class="{ show: this.$route.query.open == 'deletemodule' }">
            <div class="header">
                <div class="left">
                    <h2 class="modal-title">
                        Eliminar módulo
                    </h2>
                </div>
                <div class="right">
                    <span @click="close" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</span>
                </div>
            </div>
            <div class="body">
                <p style="font-size: 15px;">Tens a certeza que pretendes eliminar este módulo?</p>
            </div>
            <div class="modal-footer">
                <div class="btns">
                    <button @click="close" class="btn cancel">Cancelar</button>
                    <button @click="deleteModule()" style="margin-left: 12px;" class="btn active">Eliminar</button>
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
        };
    },
    computed: {
        ...mapState(["courses"])
    },
    watch: {

    },
    methods: {
        close() {
            this.$router.go(-1);
        },
        async deleteModule() {
            try {
                this.close()
                const id = this.$route.query.module_id
                let modules = this.$store.state.courses.modules
                await api.delete(`courses/module/${id}`)
                const index = modules.findIndex(module => module._id == id)
                if (index >= 0) {
                    modules.splice(index, 1)
                }
                this.$store.dispatch("actionSetToast", { text: 'Módulo eliminado com sucesso!', role: 'success' })
            } catch (err) {
                this.$store.dispatch("actionSetToast", { text: 'Aconteceu um erro', role: 'error' })
                console.log(err.message)
            }
        },
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

.desc {
    font-weight: 400;
    font-size: 85%;
    opacity: 0.8;
    margin-top: 3px;
}

.btn.active {
    background: var(--danger) !important;
}

.btn.active:hover {
    background: var(--manager-dark) !important;
}
</style>