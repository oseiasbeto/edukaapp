export default [
    {
        name: 'Marketplace | Eduka',
        path: '/marketplace',
        meta: {
            requiresAuth: false
        },
        component: () => import('../../ModuleView.vue')
    }
]