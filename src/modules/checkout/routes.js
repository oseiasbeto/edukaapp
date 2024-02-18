export default [
    {
        name: 'Inscrever-se agora',
        path: '/checkout/:course_id',
        meta: {
            requiresAuth: true
        },
        component: () => import('./ModuleView')
    },
    {
        name: 'Obrigado por se inscrever',
        path: '/thanks/:purchase_id',
        meta: {
            requiresAuth: true
        },
        component: () => import('./ModuleView')
    }
]