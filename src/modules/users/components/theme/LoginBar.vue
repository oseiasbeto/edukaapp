<template>
    <div class="login-bar">
        <div class="btn-link">
            <a href="/account/signin" class="btn">
                Criar o meu cursos online
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginBar"
}
</script>

<style>
.login-bar {
    display: block;
    transition: transform 1s ease 0s;
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 101;
    padding: 8px 16px;
    float: right;
    border-bottom: 1px none rgb(25, 31, 40);
    border-left: 1px none rgb(25, 31, 40);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(25, 31, 40, 0.1) 0px 2px 10px 0px;
    border-bottom-left-radius: 30px;
    text-align: left;
}

.login-bar .btn-link {
    display: inline-block;
    padding-top: 12px;
    padding-bottom: 12px;
    float: right;
}

.login-bar .btn-link a {
    display: inline-block;
    border-radius: 50px;
    transition: all 500ms ease 0s;
    line-height: 24px;
    font-weight: 800;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 0px;
    padding: 8px 32px;
    float: right;
    border-style: none;
    border-color: rgba(255, 255, 255, 0);
    background-color: rgb(252, 167, 0);
    color: rgb(255, 255, 255);
    font-size: 12px;
}
.btn-link a:hover {
    box-shadow: rgb(252, 167, 0) 0px 10px 30px -14px;
}
</style>