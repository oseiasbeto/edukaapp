<template>
    <div class="content-hero">
        <div class="container">
            <div class="title-wrapper">
                <h3 class="subtitle">Dúvida</h3>
                <h1 class="title">
                    <span>Quanto custa a criação de um curso <br> na Eduka <strong>África</strong> ?</span>
                </h1>
                <h4>Criar é de graça, você só paga se vender</h4>
                <div class="perc">
                    <span class="number">10</span>
                    <span class="simb">%</span>
                </div>
                <p class="description">E, a partir do momento em que você fizer sua primeira venda, <br> serão retidos 10%
                    do valor de inscrição</p>
            </div>
            <div class="body">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HowMuch"
}
</script>

<style scoped>
.content-hero {
    background-color: #fff;
    color: #171a2b;
}

.container {
    padding: 6%;
    ;
}

.subtitle {
    font-size: 16px;
    font-weight: 500 !important;
    text-transform: uppercase;
    margin-bottom: 24px;
    color: #171a2b !important;
}

.title-wrapper {
    margin-bottom: 24px;
    text-align: center;
}

.subtitle::after {
    content: "";
    display: block;
    width: 64px;
    height: 2px;
    margin-top: 4px;
    background: var(--primary);
    margin-left: auto;
    margin-right: auto;
}

.title {
    font-size: 3rem !important;
    line-height: 1.2;
    color: #171a2b !important;
    margin-bottom: 8px;
}

h4 {
    font-size: 2rem;
    font-weight: 400;
    color: #171a2b !important;
}

.description {
    font-size: 18px;
    font-weight: 400 !important;
    color: #171a2b !important;
}

.perc {
    font-size: 130px;
    color: var(--primary);
    font-weight: 400;
}

@media(max-width: 767px) {
    .title {
        font-size: 2rem !important;
        line-height: 1.2 !important;
    }
    h4 {
        font-size: 1.1rem !important;
    }
    .description {
        font-size: 16px;
    }
}</style>