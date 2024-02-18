export default [
    {
        name: 'Turma',
        path: '/classroom/:id',
        meta: {
            requiresAuth: false
        },
        component: () => import('./ModuleView')
    }
]