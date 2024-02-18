import * as types from "./mutation-types"

export const actionSetLesson = ({commit}, payload) => {
    commit(types.SET_LESSON, payload)
}
export const actionSetRoom = ({commit}, payload) => {
    commit(types.SET_ROOM, payload)
} 