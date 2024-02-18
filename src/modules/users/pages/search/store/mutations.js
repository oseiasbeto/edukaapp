import * as types from "./mutation-types"

export default {
    [types.SET_SEARCH_GLOBAL](state, payload) {
        state.searchGlobal = payload
    }
}