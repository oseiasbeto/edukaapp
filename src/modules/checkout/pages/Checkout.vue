<template>
    <div class="checkout">
        <div v-if="loading" class="loading">
            <EdukaLoading />
        </div>
        <div v-else class="result">
            <div class="box">
                <div class="checkout-title">
                    Você está quase lá! Complete a sua inscrição
                </div>
                <div class="form">
                    <div class="course">
                        <div class="cover">
                            <img :src="courses.course.cover">
                        </div>
                        <div class="data">
                            <div class="data-title">
                                {{ courses.course.title }}
                            </div>
                            <p class="data-educator">
                                Um curso de {{ courses.course.educator.username }}
                            </p>
                            <div class="data-price">
                                <span>Investimento: </span>
                                <span class="count"> {{ courses.course.price }} kz</span>
                            </div>
                            <div title="Idioma" class="data-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-globe">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path
                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                                <span>Português</span>
                            </div>
                            <div title="Categoría" class="data-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-grid">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                </svg>
                                <span> {{ courses.course.category }} </span>
                            </div>
                        </div>
                    </div>
                    <div class="e-group">
                        <label for="#title">Nome completo </label>
                        <input v-model="form.username" type="text" placeholder="Digite o seu nome completo" class="einput">
                    </div>
                    <div class="e-group">
                        <label for="#title">Email </label>
                        <input v-model="form.email" type="text" placeholder="Digite o email para receber o curso"
                            class="einput">
                    </div>
                    <div class="e-group">
                        <label for="#title">Confirmar email </label>
                        <input v-model="form.confirmEmail" type="text" placeholder="Confirmar email" class="einput">
                    </div>
                    <div class="border"></div>
                    <div class="total">
                        <div class="left" style="display: flex;
    align-items: center;">
                            <svg style="margin-right: 8px;    color: var(--success);" xmlns="http://www.w3.org/2000/svg"
                                width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag">
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                <line x1="7" y1="7" x2="7.01" y2="7" />
                            </svg>
                            <span>Total</span>
                        </div>
                        <div class="right" style="    color: var(--success);
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;">{{ courses.course.price }} kz</div>
                    </div>
                    <div>
                        <p style="    color: var(--gray);
    font-size: 14px;
    line-height: 1.4;
    padding: 15px 0;"> <strong>Óptima escolha!</strong> Comprando este curso <strong>{{ courses.course.title
    }}</strong> do educador <strong>{{ courses.course.educator.username }}</strong> você tem
                            7 dias de <strong>garantia de reembolso.</strong> </p>
                    </div>
                    <div class="center">
                        <button @click="checkout"
                            :disabled="form.username == '' || form.email == '' || form.email != form.confirmEmail"
                            class="btn active">
                            Inscrever-se agora
                        </button>

                    </div>
                </div>
            </div>
        </div>
        <ScreemLoading :show="loadingSubscribe" />
    </div>
</template>

<script>
import { mapState } from "vuex";
import EdukaLoading from '../../academy/components/theme/EdukaLoading.vue';
import ScreemLoading from '../../academy/components/theme/ScreemLoading.vue';
import { api } from "@/api";

export default {
    name: "Checkout",
    computed: {
        ...mapState(["courses"])
    },
    data() {
        return {
            loading: true,
            loadingSubscribe: false,
            form: {
                username: "",
                email: "",
                confirmEmail: ""
            }
        };
    },
    created() {
        this.getCurrentCourse()
    },
    methods: {
        async getCurrentCourse() {
            try {
                const res = await api.get(`courses/${this.$route.params.course_id}`)
                this.$store.dispatch("actionSetCourse", res.data.course)
            } catch (err) {
                console.log(err)
            } finally {
                this.loading = false
            }
        },
        async checkout() {
            if (this.form.username != '' && this.form.email != '' && this.form.email == this.form.confirmEmail) {
                try {
                    this.loadingSubscribe = true
                    const res = await api.post(`users/purchase/${this.courses.course._id}`, this.form)
                    window.location.href = '/thanks/' + res.data.newPurchase.id
                } catch (err) {
                    if (err.data.message == 'you already purchased this course.') {
                        console.log("aki")
                        this.$store.dispatch("actionSetToast", { text: "Você já se inscreveu neste curso", role: 'error' })
                    }
                } finally {
                    this.loadingSubscribe = false
                }
            } else return
        }
    },
    components: { EdukaLoading, ScreemLoading }
}
</script>

<style scoped>
.checkout {
    position: relative;
    width: 100%;
}

.checkout-title {
    font-size: 24px;
    font-weight: 700 !important;
    margin-bottom: 1.5rem
}

.form {
    position: relative;
    padding: 12px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 16%);
    margin-bottom: 3rem;
}

label {
    padding: 8px 0;
    font-size: 13px;
}

.required {
    color: #f14668;
}

.error {
    color: #f14668 !important;
    border-color: #f14668 !important;
}

.e-group {
    display: flex;
    flex-direction: column;
}

.course {
    display: flex;
}

.course .cover {
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin-right: 12px;
}

.cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.course .data-title {
    font-size: 15px;
    line-height: 22px;
}

.course .data-educator {
    font-size: 13px;
    line-height: 18px;
    font-weight: 400 !important;
    margin-bottom: 8px;
}

.data-price {
    font-size: 14px;
    margin-bottom: 4px;
}

.data-price .count {
    color: var(--success);
    font-family: Raleway, sans-serif;
    font-weight: 600;
}

.data-icon {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: var(--gray);
    font-weight: 400;
}

.data-icon svg {
    margin-right: 8px;
}

.total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: #00b09003;
    border: 1px solid;
    border-color: var(--success);
    border-radius: 4px;
    font-size: 17px;
}

.border {
    width: 100%;
    height: 1px;
    background-color: var(--border-color);
    margin: 28px 0;
}

.center {
    display: flex;
    justify-content: center;
    margin-bottom: 7px;
}

.btn.active {
    background-color: var(--success);
    font-size: 1.125rem;
    border-radius: 100px;
    padding: 12px 28px;
}

.btn.active:hover {
    background-color: var(--success-dark);
}

.result {
    display: flex;
    justify-content: center;
}

.box {
    width: 60%;
}

@media(max-width: 767px) {
    .container {
        width: 90% !important
    }

    .box {
        width: 100%
    }
}</style>