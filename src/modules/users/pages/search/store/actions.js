import * as types from "./mutation-types"

export const actionSetSearchGlobal = ({commit}, payload) => {
    commit(types.SET_SEARCH_GLOBAL, payload)
}