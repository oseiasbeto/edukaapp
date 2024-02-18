<template>
    <div class="content-hero">
        <div class="container">
            <div class="title-wrapper">
                <h3 class="subtitle">Como Começar</h3>
                <h1 class="title">
                    <span>Comece o seu negócio digital em </span>
                    <strong>poucos passos</strong>
                </h1>
            </div>
            <div class="tabs-wrapper">
                <div class="left">
                    <div class="steps">
                        <div class="step">
                            <div class="number">
                                01
                                <span style="color: var(--primary)">.</span>
                            </div>
                            <div class="text">
                                <p class="title-text">
                                    Inscreve-se
                                </p>
                                <p class="description">
                                    A inscrição é simples e totalmente gratuita
                                </p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="number">
                                02
                                <span style="color: var(--primary)">.</span>
                            </div>
                            <div class="text">
                                <p class="title-text">
                                    Crie seu curso
                                </p>
                                <p class="description">
                                    Em questão de minutos, você terá acesso a tudo o que precisa para criar e vender seu
                                    produto digital. E não se preocupe se você ainda não souber o que ou como vender, temos
                                    suporte e conteúdos gratuitos que te ajudarão a cada passo
                                </p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="number">
                                03
                                <span style="color: var(--primary)">.</span>
                            </div>
                            <div class="text">
                                <p class="title-text">
                                    Comece a paiar
                                </p>
                                <p class="description">
                                    Os melhores recursos para você paiar o seu produto online e conquistar sua primeira
                                    venda de muitas estão na Eduka África. Não perca mais tempo e mbora começar!!
                                </p>
                            </div>
                        </div>
                    </div>
                    <a style="    display: flex;
    justify-content: center;
    align-items: center;
    width: 228px;
    padding: 12px 0px;
    font-size: 18px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 8px;" href="/account/signup" class="btn active">
                        Começar gratuitamente
                    </a>
                </div>
                <div class="back"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HowToStart"
}
</script>

<style scoped>
.content-hero {
    background-color: #171a2b;
    padding: 0px 0px;
}

.container {
    padding: 80px 6%;
    padding-top: 40px;
}

.subtitle {
    color: #fff !important;
    font-size: 16px;
    font-weight: 500 !important;
    text-transform: uppercase;
    margin-bottom: 24px;
}

.title-wrapper {
    margin-bottom: 24px;
}

.subtitle::after {
    content: "";
    display: block;
    width: 64px;
    height: 2px;
    margin-top: 4px;
    background: var(--primary);
}

.title {
    color: #fff !important;
    font-size: 3rem !important;
}

.title strong {
    color: #fff;
    padding-left: 0.125em;
    padding-right: 0.125em;
    background-image: linear-gradient(0deg, var(--primary), var(--primary));
    background-repeat: no-repeat;
    background-position: center 60%;
    background-size: 100% 80%;
}

.tabs-wrapper {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}

.tabs-wrapper .left,
.back {
    width: 50%;
}

.tabs-wrapper .left {
    display: grid;
    grid-gap: 40px;
    gap: 40px;
    padding: 56px 64px 56px 32px;
}

.steps {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    gap: 20px;
}

.steps .step {
    display: flex;
    grid-gap: 18px;
    gap: 18px;
    color: #171a2b;
}

.steps .number {
    position: relative;
    font-weight: 700;
    font-size: 32px;
    color: #171a2b;
    display: flex;
    margin-bottom: 0;
}

.steps .number::before {
    content: "";
    position: absolute;
    left: 0.6em;
    top: 1.4em;
    bottom: -0.4em;
    border-left: 2px dashed #e6e9ed;
}

.title-text {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 0;
    color: #171a2b;
}

.description {
    font-size: 16px;
    font-weight: 400 !important;
}

.back {
    background: linear-gradient(180deg, transparent 10%, var(--primary));
}

@media(max-width: 767px) {
    .title {
        font-size: 2rem !important;
        line-height: 1.2;
    }
    .tabs-wrapper .left {
        padding: 32px 16px;
    }
    .tabs-wrapper .left {
        width: 100%;
    }
    .tabs-wrapper .back {
        display: none;
    }
    .step .number {
        font-size: 24px;
    }

    .step .title-text {
        font-size: 24px;
    }

    .step .description {
        font-size: 14px;
    }
    .btn.active {
        font-size: 16px !important;
    }
}</style>