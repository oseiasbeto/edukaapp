export default [
    {
        name: 'Meu kumbu - Eduka',
        path: '/epanel/balance',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]