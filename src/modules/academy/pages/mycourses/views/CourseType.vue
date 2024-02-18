<template>
    <div class="balance">
        <header>
            <h1 class="title">Qual é o formato do curso?</h1>
        </header>
        <div class="body">
            <div class="list">
                <div @click="change('online')" class="box">
                    <div class="img">

                    </div>
                    <div class="text">
                        <h3>Curso online</h3>
                        <p>Aulas em um ambiente seguro</p>
                    </div>
                </div>
                <div @click="change('presence')" class="box">
                    <div class="img">

                    </div>
                    <div class="text">
                        <h3>Curso presenciais</h3>
                        <p>Inscrições seguras</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: "CourseType",
    components: {

    },
    methods: {
        change(format) {
            this.$router.push({ path: '/epanel/new_course', query: { format: format } })
        }
    }
};
</script>
  
<style scoped>
header {
    margin-bottom: 24px;
}

h1 {
    font-size: 32px;
    font-weight: 500;
    color: #333;
    padding-right: 30px
}

.subtitle {
    opacity: .75;
    font-weight: 400;
}

/*Body style */
.fast-links {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.fast-links a,
button {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 8px 12px;
    font-size: 15px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
    color: inherit;
    border: none;
    background: #fff;
    color: #5c6a70;
    white-space: nowrap;
    -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
    box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
    text-decoration: none;
}

.fast-links>a,
button {
    margin-right: 12px;
}

.box {
    cursor: pointer;
    width: 12rem;
    padding: 20px;
    font-size: 15px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: inherit;
    border: none;
    background: #fff;
    color: #5c6a70;
    white-space: nowrap;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
    text-decoration: none;
}

.box .img {
    width: 200px;
}

.text {
    text-align: center;
    margin-bottom: 1rem;
}

.text h3 {
    margin-bottom: 4px;
}

.text p {
    font-size: 13px;
}

.box .img img {
    width: 100%;
    height: 100%;
}

.list {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
}

@media(max-width: 767px) {
    h1 {
        font-size:  26px !important;
    }
    .list {
        display: flex;
        flex-direction: column;
        gap: 0 !important;
        justify-content: center;
       
    }
    .list .box {
        width: auto;
        margin-bottom: 18px !important;
    }
}
</style>