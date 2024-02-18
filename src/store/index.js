import Vue from "vue";
import modules from "./modules";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({ modules })
export default store