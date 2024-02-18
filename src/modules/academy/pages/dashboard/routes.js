export default [
    {
        name: 'Painel de control | Eduka África',
        path: '/epanel',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]