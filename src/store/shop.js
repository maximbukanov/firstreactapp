import { observable, computed, action } from 'mobx';

class Shop {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = this.rootStore.api.products;
    }

    @observable items = [];

    @action load() {
        return new Promise((resolve, reject) => {
            this.api.all().then((data) => {
                console.log('shop items from API:', data);
                this.items = data;
                resolve(true);
            });
        });
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

    // @observable items = [
    //     {
    //         "id": 100,
    //         "title": "Ipnone 200",
    //         "description": "Ipnone 200 description",
    //         "price": 12000,
    //         "rest": 10
    //     },
    //     {
    //         "id": 101,
    //         "title": "Samsung AAZ8",
    //         "description": "Samsung AAZ8 description",
    //         "price": 22000,
    //         "rest": 5
    //     },
    //     {
    //         "id": 103,
    //         "title": "Nokia 3310",
    //         "description": "Nokia 3310 description",
    //         "price": 5000,
    //         "rest": 2
    //     },
    //     {
    //         "id": 105,
    //         "title": "Huawei ZZ",
    //         "description": "Huawei ZZ description",
    //         "price": 15000,
    //         "rest": 8
    //     }
    // ];

    //без bound экшен не работает. Нужно сделать loadProducts стрелочной функцией?
    // @action.bound loadProducts() {
    //     fetch("/shop.json").then(response => {
    //         return response.json();
    //     }).then(json => {
    //         this.setProducts(json);
    //         this.isLoading = false;
    //     }).catch(err => {
    //         console.error("Unable to get products: ", err);
    //     });
    // }

    // @action addProduct(item) {
    //     if (!this.getById(item.id)) {
    //         this.items.push(item);
    //     } else {
    //         /**
    //          * todo: this.replaceItem(item)
    //          * (если по setInterval с бэкэнда пришли два товара с одинаковыми id, 
    //          * хотя это маловероятно)
    //         */
    //     }
    // }

    // @action setProducts(products) {
    //     //Можно ли было здесь обойтись простым присвоением полученного из fetch массива?
    //     if (products.length) {
    //         products.forEach(item => {
    //             this.addProduct(item);
    //         });
    //     }
    // }
}

export default Shop;