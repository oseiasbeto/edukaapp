import * as types from "./mutation-types"

export default {
    [types.SET_LESSON](state, payload) {
        state.lesson = payload
    },
    [types.SET_ROOM](state, payload) {
        state.room = payload
    }
}