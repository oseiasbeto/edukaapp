<template>
    <div class="page">
        <header>
            <h1 class="title">Precificação</h1>
            <p class="subtitle">Após criar o curso o tipo de precificação não poderá mais ser alterado.</p>
        </header>
        <div class="body">
            <div class="form">
                <div class="e-group">
                    <label for="#title">Tipo de moeda: <span class="required">*</span> </label>
                    <select class="einput">
                        <option value="kz">Kwanza (Kz)</option>
                    </select>

                </div>
                <div class="e-group">
                    <label for="#title">Preço: <span class="required">*</span> </label>
                    <input v-model="form.price" type="number" min="1" class="einput">
                    <p class="desc">Informe um preço justo que vá de acordo com a qualidade do seu curso.</p>
                </div>
                <div class="btns">
                    <button @click="nextPage()" class="btn active" :disabled="form.price == ''">Salvar e continuar</button>
                    <button @click="goBack" class="btn cancel">Voltar</button>
                </div>
            </div>
        </div>
        <ScreemLoading :show="loading" />
    </div>
</template>
  
<script>
import { mapState } from "vuex";
import ScreemLoading from "../../../components/theme/ScreemLoading.vue";


export default {
    name: "CreateCourse",
    computed: {
        ...mapState(["courses"])
    },
    data() {
        return {
            loading: false,
            form: {
                price: 1000
            },
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
        if (data.title == '' || data.category == '' || data.description == '') {
            this.$router.push("/epanel/new_course")
        } else return
    },
    methods: {

        goBack() {
            this.$router.go(-1);
        },
        nextPage() {
            if (this.form.price != '') {
                this.$store.state.courses.newCourse.price = this.form.price
                this.loading = true
                setTimeout(() => {
                    this.$router.push('/epanel/new_course/cover');
                }, 1500);
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