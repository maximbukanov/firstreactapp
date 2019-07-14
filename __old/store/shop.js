import { observable, computed, action } from 'mobx';

class Shop {
    constructor(rootStore) {
        this.rootStore = rootStore
        //todo: setInterval, чтобы обновлять товары "на лету"?
        setTimeout(this.loadProducts, 400)
    }

    @observable items = []

    @observable isLoading = true

    //без bound экшен не работает. Нужно сделать loadProducts стрелочной функцией?
    @action.bound loadProducts() {
        fetch("/shop.json").then(response => {
            return response.json();
        }).then(json => {
            this.setProducts(JSON.parse(JSON.stringify(json)));
            this.isLoading = false;
        }).catch(err => {
            console.error("Unable to get products: ", err);
        });
    }

    @action addProduct(item) {
        if (!this.getById(item.id)) {
            this.items.push(item);
        } else {
            /**
             * todo: this.replaceItem(item)
             * (если по setInterval с бэкэнда пришли два товара с одинаковыми id, 
             * хотя это маловероятно)
            */
        }
    }

    @action setProducts(products) {
        //Можно ли было здесь обойтись простым присвоением полученного из fetch массива?
        if (products.length) {
            products.forEach(item => {
                this.addProduct(item);
            });
        }
    }

    @computed get productsMap() {
        let map = {};

        this.items.forEach((pr, i) => {
            map[pr.id.toString()] = i;
        });

        return map;
    }

    getById(id) {
        let index = this.productsMap[id];

        if (index === undefined) {
            return null;
        }

        return this.items[index];
    }
}

export default Shop;