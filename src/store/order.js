import { observable, computed, action, values } from 'mobx';

class Order {
    constructor(rootStore) {
        this.rootStore = rootStore
        this.api = this.rootStore.api.cart;
        this.storage = this.rootStore.storage;
        this.token = this.storage.getItem('cartToken');
    }

    @observable cached = { total: 0, name: null }

    @action cache() {
        this.cached.total = this.rootStore.cartStore.total;
        this.cached.name = this.rootStore.personalDataStore.personalData.name.value;
        this.rootStore.cartStore.clear();
        this.rootStore.personalDataStore.clear();
    }
}

export default Order;