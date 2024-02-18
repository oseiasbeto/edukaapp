<template>
    <div class="page-error">
        <h1 class="title">Aconteceu um erro</h1>
        <p>Aconteceu um erro ao solicitar está requisição ao nosso servidor. Purfavor tente novamente mais tarde</p>
    </div>
</template>

<script>
export default {
    name: "PageError"
}
</script>

<style scoped> .page-error {
     border-radius: 0.375em;
     position: relative;
     padding: 1.25rem 2.5rem 1.25rem 1.5rem;
     background-color: #feecf0;
     color: #cc0f35;
     font-weight: 400;
 }
 .page-error .title {
    font-size: 20px !important;
    font-weight: 500;
    color: inherit !important;
 }
</style>