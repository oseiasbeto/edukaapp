<template>
    <div class="container">
        <slot>

        </slot>
    </div>
</template>

<script>
export default {
    name: "ContainerCheckout"
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
}

@media(max-width: 767px) {
    .container {
        width: 90% !important
    }
}
</style>