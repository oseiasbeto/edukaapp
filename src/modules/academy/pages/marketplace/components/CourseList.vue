<template>
    <div class="course-list">
        <slot></slot>
    </div>
</template>

<style scoped>
.course-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
    -moz-column-gap: 20px;
    grid-column-gap: 20px;
    column-gap: 20px;
    grid-row-gap: 3rem;
    row-gap: 3rem;
    padding-bottom: 3rem;
}
</style>