<template>
    <div class="balance-card">
        <div class="header">
            <h4 class="title">Saldo</h4>
            <p class="subtitle">
                Valor total
            </p>
        </div>

        <div class="body">
            <div class="status">
                <section class="on">
                    <div class="price">
                        0 kz
                    </div>
                </section>
          
                <section class="to">
                    <button class="btn disible">Solicitar saque</button>
                </section>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.balance-card {
    position: relative;
    width: 60%;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #d6e3e3;
    padding: 20px;
}

.balance-card .header .title {
    font-weight: 500;
    font-family: inherit;
    font-size: 17px;
    margin-bottom: 10px;
}

.balance-card .header .subtitle {
    font-weight: 500;
    font-size: 12px;
    opacity: 0.8;
}

.balance-card .on .price {
    font-size: 28px;
    font-weight: 700;
    color: #636363;
    font-family: "Raleway", sans-serif;
}

.balance-card .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.balance-card .on button {
    padding: 8px 12px;
    font-size: 13px;
    background-color: transparent;
    border: 1px solid;
    border-radius: 30px;
}

.balance-card .on button.d {
    border-color: #53dec9;
    color: #53dec9;
}
.disible {
    pointer-events: none;
}

@media(max-width: 767px) {
    .balance-card {
      width: auto !important;
    }
}
</style>