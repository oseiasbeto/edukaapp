export default [
    {
        name: 'Eduka África | Entrar',
        path: '/account/signin',
        meta: {
            routeAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]