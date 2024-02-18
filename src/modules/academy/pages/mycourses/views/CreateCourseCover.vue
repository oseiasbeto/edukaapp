<template>
    <div class="page">
        <header>
            <h1 class="title">Capa do curso</h1>
            <p class="subtitle">Descreve abaixo com cautela como vai ser o seu curso</p>
        </header>
        <div class="body">
            <div class="form">
                <div class="e-group">
                    <label for="#">Capa do curso: <span class="required">*</span>
                    </label>
                    <label for="file" class="upload-area" style="padding: 0px !important; cursor: pointer"
                        :class="{ error: errors.file.show }">
                        <p v-if="courses.newCourse.file == ''">Selecione a imagem</p>
                        <div v-if="courses.newCourse.file != '' && errors.file.show == false" class="selected-image">
                            <img :src="createURLMedia(courses.newCourse.file)" />
                        </div>
                    </label>
                    <input accept="image/*" type="file" id="file" ref="file" style="display: none" @change="selectFile">
                    <p class="desc" :class="{ error: errors.file.show }">
                        <span v-if="!errors.file.show">Recomendamos uma imagem de 400x400px e com o mínimo de 5MB.</span>
                        <span v-else style="
    color: #f14668 !important;" class="desc">
                            {{ errors.file.message }}
                        </span>
                    </p>
                </div>
                <div class="btns">
                    <button @click="createCourse()" class="btn active" :disabled="courses.newCourse.file == ''">Criar e
                        continuar</button>
                    <button @click="goBack" class="btn cancel">Voltar</button>
                </div>
            </div>
        </div>
        <ScreemLoading :show="loading" />
    </div>
</template>
  
<script>
import { api } from "@/api"
import { mapState } from "vuex";
import ScreemLoading from "../../../components/theme/ScreemLoading.vue";

export default {
    name: "CreateCourse",
    data() {
        return {
            loading: false,
            errors: {
                file: {
                    show: false,
                    message: ""
                }
            }
        }
    },
    created() {
        const data = this.courses.newCourse
        if (data.price == '') {
            this.$router.push("/epanel/new_course")
        } else return
    },
    computed: {
        ...mapState(["courses"])
    },
    methods: {
        createURLMedia(media) {
            return URL.createObjectURL(media)
        },
        selectFile(e) {
            const file = e.target.files || this.$refs.file;
            const allowedTypes = ['image/jpg',
                'image/png',
                'image/jpeg'];
            const MAX_SIZE = 2 * 1024 * 1024;
            const sizeOk = file[0].size < MAX_SIZE;
            const typeOk = allowedTypes.includes(file[0].type)

            if (typeOk && sizeOk) {
                this.$store.state.courses.newCourse.file = file[0];
                this.errors.file.show = false;
                this.errors.file.message = "";
            } else {
                this.$store.state.courses.newCourse.file = ""
                if (!sizeOk) {
                    this.errors.file.show = true;
                    this.errors.file.message =
                        "A imagem escolhida deve ter no mínimo 2MB";
                    console.log("tamanho")
                } else if (!typeOk) {
                    this.errors.file.show = true;
                    this.errors.file.message =
                        "A imagem escolhida deve estar nos formatos: jpeg, jpg ou png.";
                    console.log("tipo")
                }
            }
        },
        goBack() {
            this.$router.go(-1);
        },
        async createCourse() {
            const data = this.courses.newCourse
            if (data.file != "") {
                try {
                    this.loading = true
                    const formData = new FormData();
                    formData.append("file", data.file);
                    formData.append("title", data.title);
                    formData.append("price", data.price);
                    formData.append("category", data.category);
                    formData.append("idioma", data.idioma);
                    formData.append("emailSupport", data.emailSupport);
                    formData.append("description", data.description);
                    formData.append("target", data.target);
                    formData.append("dataStart", data.dataStart);
                    formData.append("dataEnd", data.dataEnd);
                    formData.append("location", data.location);
                    formData.append("daysatweek", data.daysatweek);
                    formData.append("timeStart", data.timeStart);
                    formData.append("timeEnd", data.timeEnd);
                    formData.append("requirement", data.requirement);
                    formData.append("format", data.format);
                    formData.append("topics", data.topics);

                    await api.post("courses/create", formData);
                    this.$router.push("/epanel/mycourses")
                    this.$store.dispatch("actionSetToast", { text: "Curso criado com sucesso!", role: 'success' })
                } catch (err) {
                    this.$store.dispatch("actionSetToast", { text: "Aconteceu um erro", role: 'error' })
                    console.log(err.message)
                } finally {
                    this.loading = false
                }
            } else return

        }
    },
    components: {
        ScreemLoading
    }
};
</script>
  
<style scoped>
.page {
    color: #333;
}

header {
    margin-bottom: 24px;
}

h1 {
    font-size: 32px;
    font-weight: 500;
    color: #333;
    padding-right: 30px
}

.subtitle {
    opacity: .75;
    font-weight: 400;
}

/*Body style */
.fast-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
}

.body {
    width: 50%;
}

.e-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
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

.upload-area {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 140px;
    background-color: #fff;
    font-size: 14px;
    border-radius: 4px;
    border: 1px dashed;
    border-color: #dbdbdb;
}

.selected-image {
    position: relative;
    height: 100%;
}

.selected-image img {
    height: 100%;
    object-fit: cover;
}

.btns button {
    margin-right: .75rem;
}

@media(max-width: 767px) {
    .body {
        width: 100%;
    }
}
</style>