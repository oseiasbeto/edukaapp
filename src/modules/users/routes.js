import { routes as home } from './pages/home'
import { routes as marketplace } from './pages/marketplace'
import { routes as cart } from './pages/cart'
import { routes as search } from './pages/search'
import { routes as courses } from './pages/courses'
import { routes as categories } from './pages/categories'

export default [
    ...home,
    ...marketplace,
    ...cart,
    ...search,
    ...courses,
    ...categories
]