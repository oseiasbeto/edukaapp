export default [
    {
        name: 'Eduka África | Criar conta',
        path: '/account/signup',
        meta: {
            routeAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]