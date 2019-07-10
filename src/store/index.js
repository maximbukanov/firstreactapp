import cartModel from '~s/cart';
import personalDataModel from '~s/personal-data';
import shopModel from '~s/shop';

//https://mobx.js.org/best/store.html
//Combining multiple stores
class RootStore {
    constructor() {
        this.cartModel = new cartModel(this)
        this.personalDataModel = new personalDataModel(this)
        this.shopModel = new shopModel(this)
    }
}

export default new RootStore();