<template>
    <div class="screem-loading" :class="{ show: show }">
        <div class="loader"></div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "ScreemLoading",
    computed: {
        ...mapState(["panel"])
    },
    props: {
        show: Boolean
    }
}
</script>

<style scoped>
.screem-loading {
    background-color: rgb(255 255 255 / 50%);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw !important;
    height: 100vh;
    z-index: 1040;
    opacity: 0;
    transition: .25s all;
    visibility: hidden;
}

.loader {
    width: 26px;
    height: 26px;
    border: 4px solid;
    border-color: var(--primary) var(--border-color) var(--border-color);
    border-radius: 50%;
    animation: running 1.5s infinite;
}

.screem-loading.show {
    transition: .25s all;
    visibility: visible;
    opacity: 1;
}

@keyframes running {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>