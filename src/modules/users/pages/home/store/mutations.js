import * as types from "./mutation-types"

export default {
    [types.SET_NEWSALBUM](state, payload) {
        state.newsAlbum = payload
    },
    [types.SET_MODAL](state, payload) {
        state.modal = payload
    },
    [types.SET_LOADINGSMALL](state, payload) {
        state.loadingSmall = payload
    },
    [types.SET_TOAST](state, payload) {
        state.toast = payload
    },
    [types.SET_DISABLESCROLL](state, payload) {
        state.disableScroll = payload
    },
    [types.SET_SEARCHGLOBAL](state, payload) {
        state.searchGlobal = payload
    },
    [types.SET_SEARCHKEYWORDS](state, payload) {
        state.searchKeywords = payload
    }
}