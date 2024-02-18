export default [
    {
        name: 'Sou Educador(a) | Eduka África',
        path: '/epanel/mycourses',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    },
    {
        name: 'Formato do curso | Eduka África',
        path: '/epanel/course_type',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    },
    {
        name: 'Novo curso | Eduka África',
        path: '/epanel/new_course',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    },
    {
        name: 'Precificação | Eduka África',
        path: '/epanel/new_course/price',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    },
    {
        name: 'Capa do curso | Eduka África',
        path: '/epanel/new_course/cover',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    },
    {
        name: 'Gerenciando o curso | Eduka África',
        path: '/epanel/course/manager/:id',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    },
    {
        name: 'Novo conteúdo | Eduka África',
        path: '/epanel/course/:course_id/:module_id/new_lession',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    },
    {
        name: 'Editar conteúdo | Eduka África',
        path: '/epanel/course/lesson/:id/edit',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    },
    {
        name: 'Editar módulo | Eduka África',
        path: '/epanel/course/module/:id/edit',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]