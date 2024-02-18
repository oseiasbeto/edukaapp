import * as types from "./mutation-types"

export default {
    [types.SET_COURSES](state, payload) {
        state.courses.data = payload.data
        state.courses.metaData = payload.metaData
    },
    [types.SET_ENROLLMENTS](state, payload) {
        state.enrollments.data = payload.data
        state.enrollments.metaData = payload.metaData
    },
    [types.SET_MODAL](state, payload) {
        state.modal = payload
    },
    [types.SET_PROFILE](state, payload) {
        state.profile = payload
    }
}