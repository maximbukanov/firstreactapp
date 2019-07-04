import React from 'react';
import { observable, computed, action } from 'mobx';

import Cart from '~p/cart';
import Order from '~p/order';
import Result from '~p/result-screen';
import NotFound from '~p/not-found';

class Router {
    routes = {
        cart: () => <Cart />,
        order: () => <Order />,
        result: () => <Result />,
        notfound: () => <NotFound />
    }

    @observable activeRoute = 'cart'

    @computed get component() {
        if (Object.keys(this.routes).find(route => route == this.activeRoute) === undefined) {
            return this.routes.notfound();
        }
        return this.routes[this.activeRoute]();
    }

    @action moveTo(route) {
        this.activeRoute = route;
    }
}

export default new Router();
