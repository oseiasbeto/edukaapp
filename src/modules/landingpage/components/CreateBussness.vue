<template>
    <div class="content-hero">
        <div class="container">
            <div class="title-wrapper">
                <h1 class="title">
                    Crie, acelere, gerencie e escale o seu negócio digital com a Eduka.
                </h1>
            </div>
            
            <a style="    display: flex;
    justify-content: center;
    align-items: center;
    width: 228px;
    padding: 12px 0px;
    font-size: 18px;
    background-color: var(--primary-dark);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 8px;" href="/account/signup" class="btn active">
                        Começar gratuitamente
                    </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateBussness"
}
</script>

<style scoped>
.content-hero {
    background-color: var(--primary);
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
    line-height: 1.2;
    width: 80%;
}
.steps .number::before {
    content: "";
    position: absolute;
    left: 0.6em;
    top: 1.4em;
    bottom: -0.4em;
    border-left: 2px dashed #e6e9ed;
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