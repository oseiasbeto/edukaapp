import * as types from "./mutation-types"

export default {
    [types.SET_COURSE](state, payload) {
        state.course = payload
    }
}