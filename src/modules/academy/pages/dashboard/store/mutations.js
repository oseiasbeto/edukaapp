import * as types from "./mutation-types"

export default {
    [types.SET_TOAST](state, payload) {
        state.toast = payload
    },
}