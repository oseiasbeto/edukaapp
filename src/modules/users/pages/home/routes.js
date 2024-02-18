export default [
    {
        name: 'Principal - Eduka',
        path: '/',
        meta: {
            requiresAuth: false
        },
        component: () => import('../../ModuleView.vue')
    }
]