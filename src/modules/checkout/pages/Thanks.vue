<template>
    <div class="thanks">
        <div v-if="loading" class="loading">
            <EdukaLoading />
        </div>
        <div v-else class="result">
            <div class="box">
                <div class="thanks-title">
                    <div class="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24" aria-label="check" role="presentation"
                            class="h-icon-light h-features-reviews-section__feature-check-icon"
                            style="width: 12px; height: 24px;" fill="currentColor">
                            <g>
                                <g>
                                    <path
                                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <span> Obrigado/a por se inscrever!!</span>
                </div>
                <div class="form">
                    <div class="info-heade" style="    color: var(--gray);
    line-height: 16px;">
                        <p>Olá <strong style="    text-transform: uppercase;">{{ checkout.purchase.customer.username
                        }}</strong></p>
                        <br>
                        <p style="    color: var(--success);
    font-weight: 600;">Sua inscrição foi registrada com sucesso :)</p>
                    </div>
                    <br>
                    <ul class="info-list">
                        <li class="info-item">
                            <span>Curso: </span>
                            <strong> {{ checkout.purchase.course.title }} </strong>
                        </li>
                        <li class="info-item">
                            <span>Preço do curso: </span>
                            <strong> {{ checkout.purchase.course.price }} Kz</strong>
                        </li>
                        <li class="info-item">
                            <span>Data da inscrição: </span>
                            <strong> {{ checkout.purchase.createdAt }} </strong>
                        </li>
                        <li class="info-item">
                            <span>Inscrição_id: </span>
                            <strong> {{ checkout.purchase.id }} </strong>
                        </li>
                    </ul>
                    <br>
                    <p style="color: var(--gray);">Sua inscrição foi registrada com sucesso. Agora, pra teres acesso ao
                        curso você deve efectuar um pagamento no valor de: <strong>{{ checkout.purchase.course.price }}
                            kz</strong> para as seguintes coordenadas bancarias: </p>
                    <br>
                    <ul class="info-list">
                        <li class="info-item">
                            <span>Nome: </span>
                            <strong>Anacleto Chihombo Adriano José</strong>
                        </li>
                        <li class="info-item">
                            <span>IBAN: </span>
                            <strong> 0055.0000.1967.9463.1017.5</strong>
                        </li>
                        <li class="info-item">
                            <span>Montante a pagar: </span>
                            <strong>{{ checkout.purchase.course.price }} Kz</strong>
                        </li>
                    </ul>
                    <br>
                    <p style="color: var(--gray);">
                        Apos efectuar o pagamento com sucesso, envie o comprovativo e a <strong>inscrição_id</strong> para o
                        nosso Whatsapp: <strong>931 327
                            966</strong> para que o pagamento seja submetido ao processo de validação.
                    </p>
                    <br>
                    <div class="link">
                        <a style="color: var(--primary);" href="/epanel">Voltar para o painel</a>
                    </div>
                    <br>

                    <div style="    display: flex;
    flex-direction: column;">
                        <span style="color: var(--gray)">Abraços</span>
                        <strong>Eduka África</strong>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from "vuex";
import EdukaLoading from '../../academy/components/theme/EdukaLoading.vue';
import { api } from "@/api";

export default {
    name: "Thanks",
    computed: {
        ...mapState(["checkout", "auth"])
    },
    data() {
        return {
            loading: true,

        };
    },
    created() {
        this.getCurrentPurchase()
    },
    methods: {
        async getCurrentPurchase() {
            try {
                const res = await api.get(`users/purchase/${this.$route.params.purchase_id}`)
                this.$store.state.checkout.purchase = res.data.purchase
            } catch (err) {
                
                console.log(err)
            } finally {
                this.loading = false
            }
        },

    },
    components: { EdukaLoading }
}
</script>

<style scoped>
.thanks {
    position: relative;
    width: 100%;
}

.thanks-title {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 700 !important;
    margin-bottom: 1.5rem
}

.form {
    position: relative;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 16%);
    margin-bottom: 3rem;
}

.required {
    color: #f14668;
}

.e-group {
    display: flex;
    flex-direction: column;
}

.circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: var(--success);
    color: #fff;
    border-radius: 100px;
    margin-right: 8px;
}

.circle svg {
    width: 14px !important;
    height: 32px !important;
    margin-top: 1px;
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

.info-list {
    list-style: none;
    padding: 12px;
    background: #eff5fb;
    color: #296fa8 !important;
    font-family: monospace;
    font-size: 16px;
    border-radius: 4px;
}

.info-list li {
    line-height: 32px;
}

@media(max-width: 767px) {
    .container {
        width: 90% !important
    }

    .box {
        width: 100%
    }
}</style>