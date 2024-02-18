<template>
    <div class="hero">
        <div class="background">

        </div>
        <div class="content">
            <div class="container">
                <h2 class="title">
                    A Plataforma Completa para <br />
                    Educar e <span>Aprender Online</span> <br />
                </h2>
                <p class="subtitle">
                    Na Eduka África, voce pode monetizar seu  conhecimento<br> e hablidades.
                    Recebendo uma  porcentagem das vendas dos <br> seus cursos, gerando assim uma fonte de renda extra. <br/>
                    Crie sua conta e comece agora!
                </p>
                <div class="actions">
                    <button type="submit" class="btn active" @click="goAuth()">Começar agora</button>
                </div>

                <div style="color: #0009;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 400;
    margin-top: 1rem;">Criar uma conta na Eduka é fácil, simples e grátis</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hero",
    data() {
        return {
            form: {
                email: ""
            }
        }
    },
    methods: {
        goAuth() {
            if(this.form.email != "") {
                this.$router.push({ path: "/account/signup", query: { email: this.form.email } });
            } else {
                this.$refs.heroFormEmail.focus()
            }
        }
    }
}
</script>

<style scoped>
.hero {
    display: flex;
    position: relative;
    text-align: center;
    background-color: #ffffff;
    height: 645px;
    text-align: left;
    color: #161616;
}

.hero .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    ;
}

.hero .content {
    display: flex;
    justify-content: center;
    margin-top: 8rem;
    color: var(--secundary);
    width: 100%;
    z-index: 111;
}

.hero .container {
    width: 83%;
    margin-right: auto;
    margin-left: auto;
}

.hero .title {
    font-size: 2.6rem;
    line-height: 1.3;
    margin: 0 0 1.3rem;
    font-weight: bold;
}

.hero .subtitle {
    font-size: 1.275rem;
    margin: 0 0 3.3rem;
    font-weight: 400;
}

.hero .actions {
    display: flex;
    flex-direction: row;
}

.hero .btn {
    display: inline-block;
    font-weight: 500;
    color: rgb(113 63 18 / 1);
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 1rem;
    padding: .75rem 1.5rem;
    border-radius: 0px !important;
    cursor: pointer;
    font-weight: 600;
    transition: color .25s ease-in-out, background-color .25s ease-in-out, border-color .25s ease-in-out,
}

.btn.active {
    transition: all .25s ease-in-out;
    background-color: transparent;
    color: rgb(4, 44, 52);
    border: 1px solid rgb(4, 44, 52);
}

.btn.active:hover {
    transition: all .25s ease-in-out;
    background-color: rgb(4, 44, 52);
    color: #fff;
}

a {
    background: #fff !important;
    margin-right: 17px;
    text-decoration: none;
    color: var(--primary) !important;
}
input {
    padding-left: 1rem;
    padding-right: 1rem;
    border: 1px solid;
    border-color: rgb(209 213 219 / 1);
    outline: none;
    color: rgb(17, 24, 39);
    font-size: 1rem;
    width: 388px !important;
    margin-right: 14px;
}
@media (max-width: 414px) {
    .hero {
        align-items: center;
        flex-direction: column !important;
    }

    .content {
        padding: 1.5rem 0.75rem;
        background-color: #fff;
        color: #fff;
        width: auto !important;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 16px -6px;
    }

    .hero .background {
        height: 336px;
        width: 100%;
        position: relative;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hero .container {
        width: 94%;
    }

    .hero .title {
        font-size: 1.375rem;
        line-height: 1.4;
    }

    .hero .subtitle {
        font-size: 15px;
    }

    .hero .actions {
        display: flex;
        flex-direction: column-reverse;
    }

    .hero .actions button {
        padding: 6px 15px;
        font-size: 1.125rem;
        line-height: 1.875rem;
        border-radius: 0.125rem;
        width: 100%;
    }

    .hero .actions a {
        padding: 6px 15px;
        font-size: 1.125rem;
        line-height: 1.875rem;
        border-radius: 0.125rem;
        background: transparent !important;
        color: #fff !important;
        border: 1px solid rgb(132 132 132 / 61%);
        margin-top: 12px;
        width: auto;
        margin-right: 0 !important;
    }

    .actions #gm {
        color: var(--primary) !important;
    }
}

/*
@media (max-width: 414px) {
    .hero {
        align-items: center;
        flex-direction: row;
    }

    .content {
        padding: 1.5rem 0.75rem;
        background-color: #161616;
        color: #fff;
    }
} */</style>