export default [
    {
        name: 'Pesquisa - Eduka',
        path: '/search',
        meta: {
            requiresAuth: false
        },
        component: () => import('../../ModuleView.vue')
    }
]