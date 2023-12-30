import configs from '../configs'
import {ManageAccount, ManageCompany} from '../pages/Admin'
import { AdminLayout } from '../layouts'

const privateRoutes = [
    {path: configs.adminRouters.manageAccount, component: ManageAccount, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.manageCompany, component: ManageCompany, layout: AdminLayout, private: true, roles: ['ADMIN']},
]

const routes = [
    ...privateRoutes,
]

export default routes