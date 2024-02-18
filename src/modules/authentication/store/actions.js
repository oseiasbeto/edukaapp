import * as types from "./mutation-types"

export const actionSetToken = ({commit}, payload) => {
    commit(types.SET_TOKEN, payload)
}
export const actionSetUser = ({commit}, payload) => {
    commit(types.SET_USER, payload)
}