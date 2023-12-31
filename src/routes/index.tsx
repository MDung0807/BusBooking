import configs from '../configs'
import {Account, BusType, Company, Home, Price, PriceClassification, Routes, SeatType, Station} from '../pages/Admin'
import { AdminLayout } from '../layouts'
import { Login } from '../pages/Customer'

const privateRoutes = [
    {path: configs.adminRouters.manageAccount, component: Account, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.manageCompany, component: Company, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.manageBusType, component: BusType, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.home, component: Home, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.prices, component: Price, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.priceClassification, component: PriceClassification, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.routes, component: Routes, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.manageSeatType, component: SeatType, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.manageStation, component: Station, layout: AdminLayout, private: true, roles: ['ADMIN']},

]

const publicRoutes = [
    {path: configs.publicRouters.login, component: Login, layout: null, private: false, roles: []},

]

const routes = [
    ...privateRoutes,
    ...publicRoutes,
]

export default routes