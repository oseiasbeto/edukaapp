import * as types from "./mutation-types"

export const actionSetNewsAlbum = ({commit}, payload) => {
    commit(types.SET_NEWSALBUM, payload)
}
export const actionSetModal = ({commit}, payload) => {
    commit(types.SET_MODAL, payload)
}
export const actionSetLoadingSmall = ({commit}, payload) => {
    commit(types.SET_LOADINGSMALL, payload)
}
export const actionSetToast = ({state, commit}, text) => {
    if (state.toast.timer !== null) {
        clearTimeout(state.toast.timer);
        commit(types.SET_TOAST, { show: false, text: '', timer: null });
    }
    commit(types.SET_TOAST, {
        show: true,
        text,
        timer: setTimeout(() => {
            commit(types.SET_TOAST, {
                show: false,
                text: state.toast.text,
                timer: null,
            });
        }, 3200),
    });
}
export const actionSetDiasbleScroll = ({commit}, payload)  => {
    commit(types.SET_DISABLESCROLL, payload)
}
export const actionSetSearchGlobal = ({commit}, payload)  => {
    commit(types.SET_SEARCHGLOBAL, payload)
}
export const actionSetSearchKeywords = ({commit}, payload)  => {
    commit(types.SET_SEARCHKEYWORDS, payload)
}