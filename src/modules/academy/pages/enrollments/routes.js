export default [
    {
        name: 'Aprendizado - Eduka',
        path: '/epanel/enrollments',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]