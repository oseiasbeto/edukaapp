import * as types from "./mutation-types"

export const actionSetCategories = ({commit}, payload) => {
    commit(types.SET_CATEGORIES, payload)
}
export const actionSetCategory = ({commit}, payload) => {
    commit(types.SET_CATEGORY, payload)
}