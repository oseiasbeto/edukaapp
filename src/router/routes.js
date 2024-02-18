import { routes as landingpage } from '../modules/landingpage'
import { routes as authentication } from '../modules/authentication'
import { routes as academy } from '../modules/academy'
import { routes as checkout } from '../modules/checkout'
import { routes as classroom } from '../modules/classroom'

export default [
    ...landingpage,
    ...authentication,
    ...academy,
    ...checkout,
    ...classroom
]