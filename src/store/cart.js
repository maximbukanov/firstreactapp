import { observable, computed, action } from 'mobx';

// Свойства товара со склада shop проксируются в свойство CartItem.item
// На страницах корзины и заказа имеем это в виду
class CartItem {
    item
    @observable current = 0
    constructor(item) {
        this.item = item;
    }
}

class Cart {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable products = [];

    @computed get total() {
        return this.products.reduce((t, pr) => t + pr.item.price * pr.current, 0);
    }

    @action findProduct(item) {
        return this.products.find(product => product.item === item);
    }

    @action add(item, cnt = 1) {
        let product = this.findProduct(item);
        if (!product) {
            product = new CartItem(item);
            this.products.push(product);
        }
        product.current += cnt;
    }

    @action change(i, cnt) {
        this.products[i].current = cnt;
    }

    @computed get changeOn() {
        return this.products.map((product, i) => {
            return (cnt) => this.change(i, cnt);
        });
    }

    @action countProductSubtotal(product) {
        return product.item.price * product.current;
    }

    @action remove(id) {
        const idx = this.products.findIndex(product => { return product.item.id == id })
        this.products = [...this.products.splice(0, idx), ...this.products.splice(idx + 1)];
    }
}

export default Cart;