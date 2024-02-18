import * as types from "./mutation-types"

export default {
    [types.SET_CATEGORIES](state, payload) {
        state.categories = payload
    },
    [types.SET_CATEGORY](state, payload) {
        state.category = payload
    }
}