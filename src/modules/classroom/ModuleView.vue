<template>
    <div class="classroom-module">
        <ClassRoom v-if="this.$route.path == `/classroom/${this.$route.params.id}`"/>
    </div>
</template>

<script>
import ClassRoom from './pages/ClassRoom.vue';

export default {
    name: "ModuleView",
    components: { ClassRoom }
}
</script>

<style scoped>

</style>