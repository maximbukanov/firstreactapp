import { observable, computed, action } from 'mobx';

class Cart {
    constructor(rootStore) {
        this.rootStore = rootStore
        this.api = this.rootStore.api.cart;
        this.storage = this.rootStore.storage;
        this.token = this.storage.getItem('cartToken');
    }

    @observable products = [];

    @action load() {
        this.api.load(this.token).then((data) => {
            console.log('cart from API:', data.cart);
            this.products = data.cart;
            if (data.needUpdate) {
                this.token = data.token;
                this.storage.setItem('cartToken', this.token);
            }
        });
    }

    @computed get productsDetailed() {
        return this.products.map((pr) => {
            let product = this.rootStore.shopStore.getById(pr.id);
            return { ...product, cnt: pr.cnt };
        });
    }

    @computed get inCart() {
        return (id) => this.products.some((product) => product.id === id);
    }

    @computed get total() {
        return this.productsDetailed.reduce((t, pr) => {
            return t + pr.price * pr.cnt;
        }, 0);
    }

    @computed get getItemsCnt() {
        return this.products.length;
        // return this.products.reduce((cnt, pr) => {
        //     return cnt + pr.cnt;
        // }, 0);
    }

    @action add(id) {
        this.api.add(this.token, id).then((res) => {
            if (res) {
                this.products.push({ id, cnt: 1 });
            }
        });
        // this.products.push({ id, cnt: 1 });
    }

    @action change(id, cnt) {
        let index = this.products.findIndex((pr) => pr.id === id);
        if (index !== -1) {
            this.api.change(this.token, id, cnt).then((res) => {
                if (res) {
                    this.products[index].cnt = cnt;
                }
            });
        }
        // this.products[index].cnt = cnt;
    }

    @action remove(id) {
        let index = this.products.findIndex((pr) => pr.id === id);
        if (index !== -1) {
            this.api.remove(this.token, id).then((res) => {
                if (res) {
                    this.products.splice(index, 1);
                }
            });
        }
        // if (index !== -1) {
        //     this.products.splice(index, 1);
        // }
    }

    @action clear() {
        this.api.clean(this.token).then((res) => {
            if (res) {
                this.products = [];
            }
        });
        // this.productsDetailed.map((item, i) => {
        //     this.remove(item.id);
        // });
    }
}

export default Cart;