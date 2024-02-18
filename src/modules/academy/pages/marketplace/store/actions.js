import * as types from "./mutation-types"

export const actionSetCourses = ({commit}, payload) => {
    commit(types.SET_COURSES, payload)
}
export const actionSetEnrollments = ({commit}, payload) => {
    commit(types.SET_ENROLLMENTS, payload)
}
export const actionSetModal = ({commit}, payload) => {
    commit(types.SET_MODAL, payload)
}
export const actionSetProfile = ({commit}, payload) => {
    commit(types.SET_PROFILE, payload)
}