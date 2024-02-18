export default [
    {
        name: 'Carrinho de Compras | Eduka',
        path: '/cart',
        meta: {
            requiresAuth: false
        },
        component: () => import('../../ModuleView.vue')
    }
]