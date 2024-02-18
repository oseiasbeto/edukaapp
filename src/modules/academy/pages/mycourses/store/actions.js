import * as types from "./mutation-types"

export const actionSetNewCourse = ({commit}, payload) => {
    commit(types.SET_NEWCOURSE, payload)
}
export const actionSetNewModule = ({commit}, payload) => {
    commit(types.SET_NEWMODULE, payload)
}
export const actionSetMyCourses = ({commit}, payload) => {
    commit(types.SET_MYCOURSES, payload)
}
export const actionSetPageMyCourses = ({commit}, payload) => {
    commit(types.SET_PAGEMYCOURSES, payload)
}
export const actionSetCategories = ({commit}, payload) => {
    commit(types.SET_CATEGORIES, payload)
}
export const actionSetCourse = ({commit}, payload) => {
    commit(types.SET_COURSE, payload)
}
export const actionSetModules = ({commit}, payload) => {
    commit(types.SET_MODULES, payload)
}
export const actionSetSelected = ({commit}, payload) => {
    commit(types.SET_SELECTED, payload)
}