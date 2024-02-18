import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)
const api = Vue.http

api.options.root = 'http://51.222.200.112:3333/'

api.headers.common['Authorization'] = "Bearer " + localStorage.getItem("access_token")

export { api }