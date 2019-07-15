import cartStore from '~s/cart';
import personalDataStore from '~s/personal-data';
import shopStore from '~s/shop';
import orderStore from '~s/order';

import * as products from '~/api/products';
import * as cart from '~/api/cart';

//https://mobx.js.org/best/store.html
//Combining multiple stores
class RootStore {
    constructor() {
        this.api = {
            products,
            cart
        };

        this.storage = localStorage;

        this.cartStore = new cartStore(this)
        this.personalDataStore = new personalDataStore(this)
        this.shopStore = new shopStore(this)
        this.orderStore = new orderStore(this)
    }
}

export default new RootStore();