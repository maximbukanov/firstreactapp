import cartStore from '~s/cart';
import personalDataStore from '~s/personal-data';
import shopStore from '~s/shop';

//https://mobx.js.org/best/store.html
//Combining multiple stores
class RootStore {
    constructor() {
        this.cartStore = new cartStore(this)
        this.personalDataStore = new personalDataStore(this)
        this.shopStore = new shopStore(this)
    }
}

export default new RootStore();