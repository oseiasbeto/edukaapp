export default [
    {
        name: 'Notificações | Eduka',
        path: '/notifications',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]