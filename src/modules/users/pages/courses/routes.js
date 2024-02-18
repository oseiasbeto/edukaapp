export default [
    {
        name: 'Curso',
        path: '/course/:id',
        meta: {
            requiresAuth: false
        },
        component: () => import('../../ModuleView.vue')
    }
]