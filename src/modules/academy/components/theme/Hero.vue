<template>
    <div class="hero">
        <div class="background">

        </div>
        <div class="content">
            <div class="container">
                <h2 class="title">
                    A plataforma completa para <br />
                    educadores Angolanos
                </h2>
                <p class="subtitle">
                    A eduka tem todas as ferramentas para impulsionar as suas vendas <br class="d-none d-sm-block">online
                    escalando assim o teu negócio digital.
                </p>
                <div class="actions">
                    <router-link id="gm" class="btn" to="/marketplace">Marketplace</router-link>
                    <button class="btn active">Começar agora</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hero"
}
</script>

<style scoped>
.hero {
    display: flex;
    position: relative;
    text-align: center;
    background-color: #e8e8e8;
    height: 624px;
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
}

.hero .content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #374957;
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
    margin: 0 0 1rem;
    font-weight: bold;
}

.hero .subtitle {
    font-size: 1.375rem;
    margin: 0 0 2rem;
    font-weight: 400;
}

.hero .actions {
    display: flex;
    flex-direction: row;
}

.hero .btn {
    display: inline-block;
    font-weight: 500;
    color: #161616;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 1.125rem;
    line-height: 1.875rem;
    padding: 12px 25px;
    cursor: pointer;
    font-weight: 600;
    transition: color .25s ease-in-out, background-color .25s ease-in-out, border-color .25s ease-in-out,
}

.btn.active {
    transition: all .25s ease-in-out;
    background-color: var(--primary);
    color: #fff;
}

.btn.active:hover {
    transition: all .25s ease-in-out;
    background-color: #107be0;
}

a {
    background: #fff !important;
    margin-right: 17px;
    text-decoration: none;
    color: var(--primary) !important;
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