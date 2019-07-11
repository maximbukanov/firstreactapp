import Cart from '~p/cart';
import ShopList from '~p/shop/shop-list';
import ShopFull from '~p/shop/shop-full';
import Order from '~p/order';
import Result from '~p/result-screen';
import Page404 from '~p/not-found';

let routes = [
    {
        name: 'home',
        url: '/',
        component: ShopList,
        exact: true
    },
    // {
    //     name: 'cart',
    //     url: '/cart',
    //     component: Cart,
    //     exact: true
    // },
    {
        name: 'shopFull',
        url: '/shop/:id',
        component: ShopFull,
        exact: true
    },
    {
        name: 'order',
        url: '/order',
        component: Order,
        exact: true
    },
    {
        name: 'result',
        url: '/done',
        component: Result,
        exact: true
    },
    {
        url: '**',
        component: Page404
    }
];

let routesMap = {};

routes.forEach((route) => {
    if (route.hasOwnProperty('name')) {
        routesMap[route.name] = route.url;
    }
});

let urlBuilder = function (name, params) {
    if (!routesMap.hasOwnProperty(name)) {
        return null;
    }

    let url = routesMap[name]; // news/:id

    for (let key in params) {
        url = url.replace(':' + key, params[key]);
    }

    return url;
}

export default routes;
export { routesMap, urlBuilder };