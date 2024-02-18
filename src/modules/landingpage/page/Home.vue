<template>
    <div class="home">
        <Navbar/>
        <Hero/>
        <HowToStart/>
        <HowMuch/>
        <CreateBussness/>
        <Faq/>
        <Footer/>
    </div>
</template>

<script>
import HowToStart from '../components/HowToStart.vue';
import Hero from '../components/Hero.vue';
import Navbar from '../components/Navbar.vue';
import HowMuch from '../components/HowMuch.vue';
import CreateBussness from '../components/CreateBussness.vue';
import Faq from '../components/Faq.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "Home",
    components: { Navbar, Hero, HowToStart, HowMuch, CreateBussness, Faq, Footer }
}
</script>
<style scoped>
.home {
    position: relative;
    box-sizing: border-box;
}
</style>