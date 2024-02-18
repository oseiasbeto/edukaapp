<template>
    <div class="form">
        <div class="form-wrapper">
            <div v-show="alert.show" class="alert" :class="`${alert.type}`">
                <p class="alert-text">
                    {{ alert.message }}
                </p>
            </div>
            <div class="form-wrapper-header">
                <div style="width: 124px; color: #5d6266;">
                    <a href="/" style="margin-left: -5px;">
                        <img style="margin-left: -3px" src="@/assets/images/Eduka - Artes/Dark.png" width="100%">
                    </a>

                </div>
            </div>
            <div class="body">
                <div class="body-header">
                    <h2 class="body-title">Entrar</h2>
                </div>

                <div>
                    <div class="form-group">
                        <div class="input-group" :class="{
                            error: errors.email.show
                        }">
                            <span class="input-icon">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.9999 4H14V4.0001L13.9999 4ZM12.4382 4H3.56191L7.35986 7.16496C7.73071 7.474 8.26939 7.474 8.64023 7.16496L12.4382 4ZM2.00018 4H2V4.00021L2.00018 4ZM2 5.30182V12H14V5.3019L9.9206 8.7014C8.80806 9.62852 7.19203 9.62852 6.0795 8.7014L2 5.30182ZM0 4C0 2.89543 0.895431 2 2 2H14C15.1046 2 16 2.89543 16 4V12C16 13.1046 15.1046 14 14 14H2C0.895431 14 0 13.1046 0 12V4Z"
                                        fill="#92A7A7"></path>
                                </svg>
                            </span>
                            <input v-model="form.email" class="form-control" type="email" placeholder="email@exemplo.com">
                        </div>
                        <div v-if="errors.email.show" class="feedback-error">
                            {{ errors.email.message }}
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group" :class="{
                            error: errors.password.show
                        }">
                            <span class="input-icon">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3 5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5C14.1046 5 15 5.89543 15 7V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V7C1 5.89543 1.89543 5 3 5ZM8 2C9.65685 2 11 3.34315 11 5H5C5 3.34315 6.34315 2 8 2ZM3 7L3 13H13V7H3ZM7 11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V10C9 9.44771 8.55228 9 8 9C7.44772 9 7 9.44772 7 10V11Z"
                                        fill="#92A7A7"></path>
                                </svg>
                            </span>
                            <input v-model="form.password" class="form-control" type="password" placeholder="Palavra-passe">
                        </div>
                        <div v-if="errors.password.show" class="feedback-error">
                            {{ errors.password.message }}
                        </div>
                        <p class="forgot-password">
                            <small><a href="#">Esqueceste a senha?</a> </small>
                        </p>

                        <div class="remember-me">
                            <div class="checkbox">
                                <label class="small" for="rm">
                                    <input v-model="form.rememberMe" type="checkbox" name="rm" id="rm">
                                    <span style="font-size: 14px; font-weight: 400; margin-left: 8px;">
                                        Lembrar de mim neste dispositivo
                                    </span>

                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="btns-group">
                        <button @click="signin()" class="btn active" :class="{ btnLoading: loading }">Continuar</button>
                    </div>
                    <div class="login-social">
                        <p class="social-signup-title text-muted">
                            <small>Ou podes:</small>
                        </p>
                        <div class="social-actions">

                            <a href="#" class="btn btn-primary btn-social btn-fb" id="faceebook_btn">
                                <img src="../../../../assets/svgs/logo-icon-facebook-sub.svg" width="18" height="18">
                                <span>Entrar com Facebook</span> </a>
                            <a href="#" class="btn btn-social btn-action btn-google" id="google_btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 262"
                                    preserveAspectRatio="xMidYMid">
                                    <path
                                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                        fill="#4285F4" />
                                    <path
                                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                        fill="#34A853" />
                                    <path
                                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                        fill="#FBBC05" />
                                    <path
                                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                        fill="#EB4335" />
                                </svg>
                                Entrar com Google </a>
                        </div>
                        <p class="clearfix padding-bottom-20">&nbsp;</p>
                        <p style=" margin: 0 0 10.5px;">
                            <em class="small light-grey">
                                Você não tem uma conta? <a class="bold" href="/account/signup">
                                    Inscrever-se
                                </a>
                            </em>
                        </p>
                        <div class="login-support small">
                            Problemas ao entrar? <a href="/support" target="_blank">Contacte o
                                suporte</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { api } from "@/api";
export default {
    name: "SigninForm",
    data() {
        return {
            alert: {
                show: false,
                message: "",
                type: ""
            },
            errors: {
                email: {
                    show: false,
                    message: ""
                },
                password: {
                    show: false,
                    message: ""
                }
            },
            form: {
                email: "",
                password: "",
                rememberMe: true
            },
            loading: false
        }
    },
    created() {
        this.setData()
    },
    methods: {
        setData() {
            const rememberMe = JSON.parse(localStorage.getItem("remember_me"));
            if (rememberMe != null) {
                this.form = {
                    email: rememberMe.email,
                    password: rememberMe.password,
                };
                this.form.rememberMe = true;
            } else return;
        },
        async signin() {
            try {
                if (this.form.email == "") {
                    this.errors.email = {
                        show: true,
                        message: "Informe o teu email"
                    }
                } else {
                    this.errors.email = {
                        show: false,
                        message: ""
                    }
                }
                if (this.form.password == "" && this.form.email != "") {
                    this.errors.password = {
                        show: true,
                        message: "Informe a tua palavra-passe"
                    }
                } else {
                    this.errors.password = {
                        show: false,
                        message: ""
                    }
                }
                if (this.form.email != "" && this.form.password != "") {
                    this.loading = true
                    const res = await api.post("users/signin", this.form)

                    if (res.status == 200) {
                        localStorage.setItem("access_token", res.data.token);
                        this.$store.dispatch("actionSetToken", res.data.token);
                        api.headers.common['Authorization'] = "Bearer " + localStorage.getItem("access_token")

                        if (this.form.rememberMe) {
                            const rememberMe = {
                                email: this.form.email,
                                password: this.form.password,
                            };
                            localStorage.setItem("remember_me", JSON.stringify(rememberMe));
                        }
                        this.alert = {
                            show: true,
                            message: "Gafanhoto logado com sucesso!",
                            type: "success"
                        }
                        setTimeout(() => {
                            window.location.reload()
                        }, 1500);
                    }
                }
            } catch (err) {
                this.loading = false
                if (err.status == 400) {
                    this.alert = {
                        show: true,
                        message: "As credencias informadas estão inválidas",
                        type: "error"
                    }
                    setTimeout(() => {
                        this.alert = {
                            show: false,
                            message: ""
                        }
                    }, 5000);
                } else {
                    this.$router.push(`/error/${err.status}`)
                }
            }
        }
    }
}
</script>
  
<style scoped> .form {
     display: flex;
     -webkit-box-align: center;
     -ms-flex-align: center;
     justify-content: center;
     width: 46%;
     height: 100%;
     background-color: #fff;
 }

 .form-wrapper {
     width: 64%;
 }

 .form-wrapper .form-wrapper-header {
     padding: 30px 0;
 }

 .form-wrapper header a {
     float: left;
     width: 230px;
     display: block;
     padding: 0;
     min-height: 30px;
 }

 .form-wrapper .body {
     margin: 15px auto;
 }

 .form-wrapper .body .body-header {
     margin-bottom: 30px;
 }

 .form-wrapper .body .body-header h2 {
     margin: 0;
     font-size: 24px;
     font-weight: bold;
     color: #333;
 }

 .form-control {
     border-bottom-left-radius: 0;
     border-top-left-radius: 0;
     height: 21px !important;
     width: 100%;
 }

 .forgot-password {
     padding-top: 5px;
 }

 .forgot-password a {
     text-decoration: none;
     color: #0b99b2;
     cursor: pointer;
     font-weight: 400;
 }

 .forgot-password a:hover {
     text-decoration: underline;
 }

 .remember-me {
     padding: 12px 0;
 }

 .remember-me label {
     display: flex;
     cursor: pointer;
     font-weight: 400;
 }

 .remember-me label small {
     margin-left: 6px;
 }

 .social-actions {
     display: flex;
     align-items: center;
     margin-bottom: 4.4rem;
 }

 .btn.active {
     background-color: var(--primary);
     color: #fff;
     min-width: 100px;
     transition: all 0.3ms ease-in;
 }
 .btn.active:hover {
    background: var(--primary-dark);
    transition: all 0.3ms ease-in;
 }

 .text-muted {
     color: #5c6a70;
     margin: 0 0 10.5px;
 }

 small {
     font-weight: 400;
 }

 a {
     text-decoration: none;
     color: inherit;
 }

 .login-social {
     padding: 24px 0;
 }

 .btn-fb {
     background-color: #1877f2;
     border-color: #1877f2;
     color: #fff;
     margin-right: 5px;
     display: flex;
     align-items: center;
     max-width: 168px;
 }

 .btn-google {
     display: flex;
     align-items: center;
     max-width: 168px;
     border-color: #d6e3e3;
     color: #5c6a70;
     box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
 }

 .btn-google,
 .btn-google:hover {
     background-color: #fff;
 }


 .btn-google svg {
     margin-left: -2px;
     margin-right: 6px;
     margin-top: 1px
 }

 .light-grey {
     color: #999;
 }

 .bold {
     text-decoration: none;
     color: var(--primary);
     cursor: pointer;
     font-weight: bold;
 }

 em,
 small,
 .small {
     font-size: 86%;
 }


 .login-support a {
     text-decoration: none;
     color: var(--primary);
     cursor: pointer;
 }

 .btn-fb img {
     margin-left: -2px;
     margin-right: 6px;
 }

 .alert {
     position: absolute;
     top: 108px;
     font-size: 13px;
     padding: 10px 24px;
     background: transparent;
     border-radius: 4px;
     border: none;
     box-shadow: 0 10px 20px rgba(0, 0, 0, .1);
     animation: fade-in-out 1s ease-in-out;
 }

 .alert.error {
     background-color: #f65858;
     border-color: #bb364d;
     color: #ffffff;
     font-weight: bold;
 }

 .alert.success {
     background-color: #2eb570;
     color: #ffffff;
     font-weight: bold;
 }

 .feedback-error {
     position: absolute;
     font-size: 11px;
     top: 40px;
     left: 42px;
     margin-top: 4px;
     padding: 5px 8px;
     z-index: 12;
     border-radius: 4px;
     color: #f65858;
     background-color: #ffefef;
 }

 .feedback-error::after {
     content: "";
     position: absolute;
     bottom: 100%;
     left: 8px;
     border-width: 5px;
     border-style: solid;
     border-color: transparent transparent #ffefef;
 }

 .btnLoading {
     position: relative;
     opacity: 1;
     pointer-events: none;
     -moz-user-select: none;
     -webkit-user-select: none;
     -ms-user-select: none;
     user-select: none
 }

 .btnLoading::before {
     content: '';
     position: absolute;
     z-index: 99;
     width: 100%;
     height: 100%;
     top: 0;
     left: 0;
     border-radius: 2px;
     background-color: rgba(178, 191, 200, .85);
     -webkit-box-shadow: 0 0 0 1px rgba(178, 191, 200, .6);
     box-shadow: 0 0 0 1px rgba(178, 191, 200, .6);
     background-repeat: no-repeat;
     background-position: 50%;
     background-size: 30px
 }

 @media (max-width: 414px) {
     .form {
         width: 100%;
     }

     .form-wrapper {
         width: 90%;
     }

     .form-wrapper-header {
         padding-bottom: 8px !important;
     }

     .social-actions {
         display: block !important;
     }

     .btn-fb {
         margin-bottom: 8px;
     }

     .alert {
         top: 100px !important;
     }
 }

 @keyframes fade-in-out {
     0% {
         opacity: 0;
     }

     50% {
         opacity: 1;
     }

     100% {
         opacity: 1;
     }
 }
</style>