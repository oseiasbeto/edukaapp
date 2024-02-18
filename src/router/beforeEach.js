import store from "../store/"

export default async (to, from, next) => {
    document.title = `${to.name}`
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({ path: "/account/signin" })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.routeAuth)) {
        if (store.getters.loggedIn) {
            next({ path: "/epanel" })
        } else {
            next()
        }
    } else {
        next()
    }
}
