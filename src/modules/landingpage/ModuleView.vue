<template>
    <div class="landing-page">
        <Home v-if="this.$route.path == '/'"/>
    </div>
</template>
<script>
import Home from './page/Home.vue';

//Pages

//Components
export default {
    components: {
    Home
},
    name: "ModuleView",
    created() {

    },
    methods: {

    }
};
</script>
    
<style scoped></style>