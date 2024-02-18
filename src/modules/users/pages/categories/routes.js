export default [
    {
        name: 'Categorias | Eduka',
        path: '/categories',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]