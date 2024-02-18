<template>
    <div class="shade" @click="close"
        :class="{ show: marketplace.modal.name == 'EditProfileAvatar' && marketplace.modal.show }">
        <div class="modal" @click.stop
            :class="{ show: marketplace.modal.name == 'EditProfileAvatar' && marketplace.modal.show }">
            <div class="header">
                <div class="left">
                    <h2 class="modal-title">
                        Editar avatar
                    </h2>
                </div>
                <div class="right">
                    <span @click="close" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</span>
                </div>
            </div>
            <div class="body">
                <label for="file" class="select" :class="{ error: errors.file.show }">
                    <div v-if="file == ''" class="empty">
                        <h1>Selecione a imagem</h1>
                    </div>
                    <div v-if="file != '' && errors.file.show == false" class="selected-image">
                        <img :src="createURLMedia(file)" />
                    </div>
                    <input accept="image/*" type="file" id="file" ref="file" style="display: none" @change="selectFile">
                </label>
                <p style="    padding: 4px 0;
    font-size: 12px;
    color: #f14668;" v-if="errors.file.show">
                    {{ errors.file.message }}
                </p>
            </div>
            <div class="modal-footer">
                <div class="btns">
                    <button @click="close" class="btn cancel">Cancelar</button>
                    <button @click="editProfileAvatar" style="margin-left: 12px;" class="btn active"
                        :disabled="file == ''">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { api } from "@/api";
import { mapState } from "vuex";

export default {
    name: "EditProfileAvatar",
    data() {
        return {
            file: "",
            errors: {
                file: {
                    message: "",
                    show: false
                }
            }
        };
    },
    computed: {
        ...mapState(["marketplace", "auth"])
    },
    created() {

    },
    methods: {
        close() {
            this.$store.dispatch("actionSetModal", {
                name: "",
                id: "",
                show: false,
            })
            this.file = ""
            this.errors = {
                file: {
                    message: "",
                    show: false
                }
            }
        },
        createURLMedia(media) {
            return URL.createObjectURL(media)
        },
        selectFile(e) {
            const file = e.target.files || this.file;
            const allowedTypes = ['image/jpg',
                'image/png',
                'image/jpeg'];
            const MAX_SIZE = 2 * 1024 * 1024;
            const sizeOk = file[0].size < MAX_SIZE;
            const typeOk = allowedTypes.includes(file[0].type)

            if (typeOk && sizeOk) {
                this.file = file[0];
                this.errors.file.show = false;
                this.errors.file.message = "";
            } else {
                this.file = ""
                if (!sizeOk) {
                    this.errors.file.show = true;
                    this.errors.file.message =
                        "A imagem escolhida deve ter no mínimo 2MB";
                } else if (!typeOk) {
                    this.errors.file.show = true;
                    this.errors.file.message =
                        "A imagem escolhida deve estar nos formatos: jpeg, jpg ou png.";
                }
            }
        },
        async editProfileAvatar() {
            if (this.file != '') {
                try {
                    this.$store.dispatch("actionSetModal", {
                        name: "",
                        id: "",
                        show: false
                    })
                    const formData = new FormData();
                    formData.append("file", this.file);

                    const res = await api.put('users/avatar', formData)

                    if (res.status == 200) {
                        this.$store.dispatch("actionSetToast", { text: 'Alterações feitas com sucesso!', role: 'success' })
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

.select {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    border: 2px dashed #ddd;
    padding: 0px !important
}

.selected-image {
    height: 150px
}

.select img {
    height: 100%;
}

.select .empty h1 {
    font-size: 16px;
    font-weight: 500 !important
}
</style>