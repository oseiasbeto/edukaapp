import * as types from "./mutation-types"

export const actionSetCart = ({commit}, payload) => {
    commit(types.SET_CART, payload)
}