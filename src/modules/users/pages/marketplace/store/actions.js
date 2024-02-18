import * as types from "./mutation-types"

export const actionSetRecommendCourses = ({commit}, payload) => {
    commit(types.SET_RECOMMEND_COURSES, payload)
}