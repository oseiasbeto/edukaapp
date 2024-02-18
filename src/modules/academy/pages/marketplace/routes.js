export default [
    {
        name: 'Marketplace | Eduka África',
        path: '/epanel/marketplace',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    },
    {
        name: 'Profile | Eduka África',
        path: '/epanel/profile/:id',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]