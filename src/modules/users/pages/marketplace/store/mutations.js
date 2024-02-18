import * as types from "./mutation-types"

export default {
    [types.SET_RECOMMEND_COURSES](state, payload) {
        state.recommendCourses = payload
    }
}