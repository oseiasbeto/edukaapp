import * as types from "./mutation-types"

export default {
    [types.SET_NEWCOURSE](state, payload) {
        state.newCourse = payload
    },
    [types.SET_PAGEMYCOURSES](state, payload) {
        state.myCourses.data.push(...payload.data)
        state.myCourses.metaData = payload.metaData
    },
    [types.SET_MYCOURSES](state, payload) {
        state.myCourses.data = payload.data
        state.myCourses.metaData = payload.metaData
    },
    [types.SET_CATEGORIES](state, payload) {
        state.categories = payload
    },
    [types.SET_COURSE](state, payload) {
        state.course = payload
    },
    [types.SET_MODULES](state, payload) {
        state.modules = payload
    },
    [types.SET_NEWMODULE](state, payload) {
        state.modules.push(...payload)
    },
    [types.SET_SELECTED](state, payload) {
        state.selected = payload
    }
}