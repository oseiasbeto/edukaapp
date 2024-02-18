<template>
    <div class="content-hero">
        <div class="container">
            <div class="title-wrapper">
                <h3 class="subtitle">FAQ</h3>
                <h1 class="title">
                    Perguntas e respostas mais frequentes
                </h1>
            </div>
            <ul class="accordion">
                <li class="accordion-item">
                    <div class="accordion-title">
                        <span>Oque é a Eduka África?</span>
                        <span class="icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-down" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                class="icon svg-inline--fa fa-angle-down fa-fw">
                                <path fill="currentColor"
                                    d="M360.5 217.5l-152 143.1C203.9 365.8 197.9 368 192 368s-11.88-2.188-16.5-6.562L23.5 217.5C13.87 208.3 13.47 193.1 22.56 183.5C31.69 173.8 46.94 173.5 56.5 182.6L192 310.9l135.5-128.4c9.562-9.094 24.75-8.75 33.94 .9375C370.5 193.1 370.1 208.3 360.5 217.5z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div class="accordion-body">
                        <p>
                            Eduka África é uma plataforma de ensino a distância (EAD) que tem como o principal objetivo, proporcionar novos métodos de ensino no continente Africano por intermédio das novas tecnologías
                        </p>
                    </div>
                </li>
                <li class="accordion-item">
                    <div class="accordion-title">
                        <span>Quanto custa para usar a Eduka?</span>
                        <span class="icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-down" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                class="icon svg-inline--fa fa-angle-down fa-fw">
                                <path fill="currentColor"
                                    d="M360.5 217.5l-152 143.1C203.9 365.8 197.9 368 192 368s-11.88-2.188-16.5-6.562L23.5 217.5C13.87 208.3 13.47 193.1 22.56 183.5C31.69 173.8 46.94 173.5 56.5 182.6L192 310.9l135.5-128.4c9.562-9.094 24.75-8.75 33.94 .9375C370.5 193.1 370.1 208.3 360.5 217.5z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div class="accordion-body">
                        <p>A Eduka África não cobra taxas de adesão e nem mensalidades. Para montar todo o seu negócio digital na Eduka, você não paga nada, apenas uma porcentagem por cada venda realizada</p>
                    </div>
                </li>
                <li class="accordion-item">
                    <div class="accordion-title">
                        <span>Para quem é?</span>
                        <span class="icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-down" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                class="icon svg-inline--fa fa-angle-down fa-fw">
                                <path fill="currentColor"
                                    d="M360.5 217.5l-152 143.1C203.9 365.8 197.9 368 192 368s-11.88-2.188-16.5-6.562L23.5 217.5C13.87 208.3 13.47 193.1 22.56 183.5C31.69 173.8 46.94 173.5 56.5 182.6L192 310.9l135.5-128.4c9.562-9.094 24.75-8.75 33.94 .9375C370.5 193.1 370.1 208.3 360.5 217.5z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div class="accordion-body">
                        <p>
                            A Eduka África é para quem quer vender e lucrar com o conhecimento e também é para quem quer aprender sem limitações.
                        </p>
                    </div>
                </li>
                <li class="accordion-item">
                    <div class="accordion-title">
                        <span>Ainda não tenho um produto digital pronto, a Eduka pode me ajudar??</span>
                        <span class="icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-down" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                class="icon svg-inline--fa fa-angle-down fa-fw">
                                <path fill="currentColor"
                                    d="M360.5 217.5l-152 143.1C203.9 365.8 197.9 368 192 368s-11.88-2.188-16.5-6.562L23.5 217.5C13.87 208.3 13.47 193.1 22.56 183.5C31.69 173.8 46.94 173.5 56.5 182.6L192 310.9l135.5-128.4c9.562-9.094 24.75-8.75 33.94 .9375C370.5 193.1 370.1 208.3 360.5 217.5z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div class="accordion-body">
                        <p>
                            Sim! Temos muitos conteúdo gratuito feito por especialistas para que você entenda como pode entrar no mercado digital, qual produto criar, e em qual formato. Com essas informações, a sua decisão fica muito mais fácil.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Faq"
}
</script>

<style scoped>
.content-hero {
    background-color: #171a2b;
    padding: 0px 0px;
}

.container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: -webkit-min-content 1fr;
    grid-template-rows: min-content 1fr;
    align-items: flex-start;
    align-items: center;
    grid-template-columns: .9fr 1fr;
    padding: 80px 6%;
    padding-top: 40px;
}

.title-wrapper {
    margin-bottom: 24px;
}

.subtitle {
    color: #fff !important;
    font-size: 16px;
    font-weight: 500 !important;
    text-transform: uppercase;
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
    font-size: 2.8rem !important;
    line-height: 1.2;
    max-width: 75%;

}

.accordion {
    background-color: #fff;
    list-style: none;
    user-select: none;
}

.accordion li {
    margin-bottom: 0 !important;
    border-left: 4px solid transparent;
    transition: .25s;
    border-top: 1px solid #e6e9ed;
    cursor: pointer;
}
.accordion li:hover {
    transition: .25s;
    border-left-color: var(--primary);
}

.accordion-title {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 16px;
    align-items: center;
    border-radius: 0 !important;
    padding: 16px;
    background: none !important;
    color: #171a2b;
    transition: .25s;
    font-size: 20px;
    font-weight: 700;
}

.icon {
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    justify-content: center;
    background: var(--primary-bg);
    color: var(--primary);
    transition: .25s
}

.icon svg {
    height: 1em;
}

.accordion-body {
    font-weight: 400 !important;
    padding: 0 16px 16px;
}

@media(max-width: 767px) {
    .title {
        font-size: 2rem !important;
        line-height: 1.2;
    }

    .btn.active {
        font-size: 16px !important;
    }
    .container {
        display: block !important;
    }
}
</style>