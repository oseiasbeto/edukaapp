<template>
    <span class="badge">
        {{ number }}
    </span>
</template>

<script>
export default {
    name: "Badge",
    props: {
        number: Number
    }
}

</script>

<style>
.badge {
    position: absolute;
    top: 0.5rem;
    right: -3px;
    font-size: .6875rem;
    padding: 0 0.3875rem;
    font-size: .6875rem;
    line-height: 1.6em;
    text-overflow: clip;
    border-radius: 10rem;
    background-color: #fba707;
    color: #fff;
}
</style>