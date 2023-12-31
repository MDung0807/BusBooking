const customerRouters = {
    info: '/info',
    notification: '/notification',
    order: '/order',
    favorite: '/favorite',
    reivew: '/review',
}

const publicRouters = {
    home: '/',
    login: '/login',
    register: '/register',
    search: '/search',
}

const adminRouters = {
    home: '/admin',
    login: '/admin/login',
    routes: '/admin/routes',
    prices: '/admin/prices',
    priceClassification: '/admin/priceClassification',
    manageAccount: '/admin/manageAccount',
    manageCompany:'/admin/manageCompany',
    manageStation: '/admin/manageBusstation',
    manageSeatType: '/admin/manageSeattype',
    manageBusType: '/admin/manageTypebus',
}

const companyRouters = {
    home: '/company',
    login: '/company/login',
    register: '/company/register',
    manageOrder: '/company/order',
    manageBus: '/company/bus',
    busDetail: '/company/bus/:id',
    ticket: '/company/ticket/:id',
    manageTicket: '/company/ticket',
    statistic: '/company/statistic',
    routeDetail: '/company/routeDetail',
    createRouteDetail: '/company/createRouteDetail',
    createTicket: '/company/createTicket',
    price: '/company/prices',
    priceClassification: '/company/priceClassification',
}

const RouterConfigs = {
    customerRouters,
    adminRouters,
    companyRouters,
    publicRouters,
}

export default RouterConfigs;