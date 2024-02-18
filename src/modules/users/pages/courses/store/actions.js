import * as types from "./mutation-types"

export const actionSetCourse = ({commit}, payload) => {
    commit(types.SET_COURSE, payload)
}