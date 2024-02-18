import * as types from "./mutation-types"

export const actionSetToast = ({ state, commit }, data) => {
    if (state.toast.timer !== null) {
        clearTimeout(state.toast.timer);
        commit(types.SET_TOAST, { show: false, text: '', role: '', timer: null });
    }
    commit(types.SET_TOAST, {
        show: true,
        text: data.text,
        role: data.role,
        timer: setTimeout(() => {
            commit(types.SET_TOAST, {
                show: false,
                text: state.toast.text,
                timer: null,
            });
        }, 2000),
    });
}