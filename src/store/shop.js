import { observable, computed, action } from 'mobx';

class Shop {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable items = getProducts()

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

function getProducts() {
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            description: 'Ipnone 200 description',
            price: 12000,
            rest: 10
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            description: 'Samsung AAZ8 description',
            price: 22000,
            rest: 5
        },
        {
            id: 103,
            title: 'Nokia 3310',
            description: 'Nokia 3310 description',
            price: 5000,
            rest: 2
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            description: 'Huawei ZZ description',
            price: 15000,
            rest: 8
        }
    ];
}

export default Shop;