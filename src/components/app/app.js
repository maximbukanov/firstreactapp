import React from 'react';
import Cart from '../cart';
import OrderForm from '../order-form';
import ResultScreen from '../result-screen';

export default class extends React.Component {
    state = {
        products: getProducts(),
        personalData: getPersonalData(),
        cartItemsProvided: false,
        personalDataProvided: false,
        orderDetailsConfirmed: false
    }

    //Обновляет state.products и устанавливает количество продуктов 
    changeCnt(i, cnt) {
        // по смысле this.state.products[i].current = cnt;
        let newProducts = [...this.state.products];
        let newProduct = { ...newProducts[i] };
        newProduct.current = cnt;
        newProducts[i] = newProduct;
        this.setState({ products: newProducts });
    }

    //Обновляет state.products и удаляет продукт по его id
    removeProduct(id) {
        this.setState(({ products }) => {
            const idx = products.findIndex((el) => el.id === id);
            //нельзя изменять существующий state, поэтому нужно создать shallow-копию массива и передать ее в setState
            const newArray = [...products.slice(0, idx), ...products.slice(idx + 1)];
            return {
                products: newArray
            };
        });
    }

    //Обновляет state.personalData
    applyPersonalData(value, key) {
        let newPersonalData = { ...this.state.personalData };
        newPersonalData[key] = value;
        this.setState({ personalData: newPersonalData });
    }

    //шаг 1 - клиент набрал корзину товаров
    setCartItemsProvided = (value) => {
        this.setState({ cartItemsProvided: value });
    }

    //шаг 2 - клиент ввел свои данные
    setPersonalDataProvided = (value) => {
        this.setState({ personalDataProvided: value });
    }

    //шаг 3 - клиент подтвердил корзину и введенные им данные
    setOrderDetailsConfirmed = (value) => {
        this.setState({ orderDetailsConfirmed: value });
    }

    //Наверно, рендер тут можно представить по другому
    //Либо подключить хранилище и роутер, чтобы не было такой дичи с передачей стейтов и сеттеров
    //Также, можно было бы сделать расчет текущего шага не из нескольких стейтов, а из одного
    getCurrentLayout = () => {
        let result = null;
        if (!this.state.cartItemsProvided) {
            result = (
                <div>
                    <Cart
                        products={this.state.products}
                        changeCnt={this.changeCnt.bind(this)}
                        removeProduct={this.removeProduct.bind(this)}
                        setCartItemsProvided={this.setCartItemsProvided.bind(this)}
                    />
                </div>
            );
        } else if (!this.state.personalDataProvided || !this.state.orderDetailsConfirmed) {
            result = (
                <div>
                    <OrderForm
                        products={this.state.products}
                        personalData={this.state.personalData}
                        applyPersonalData={this.applyPersonalData.bind(this)}
                        personalDataProvided={this.state.personalDataProvided}
                        orderDetailsConfirmed={this.state.orderDetailsConfirmed}
                        setPersonalDataProvided={this.setPersonalDataProvided.bind(this)}
                        setOrderDetailsConfirmed={this.setOrderDetailsConfirmed.bind(this)}
                        setCartItemsProvided={this.setCartItemsProvided.bind(this)}
                    />
                </div>
            );
        } else if (this.state.personalDataProvided && this.state.orderDetailsConfirmed) {
            result = (
                <div>
                    <ResultScreen />
                </div>
            );
        }
        return result;
    }

    render() {
        const currentLayout = this.getCurrentLayout();
        return (
            <div>
                {currentLayout}
            </div>
        );
    }
}

function getProducts() {
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            current: 1
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            current: 1
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            current: 1
        }
    ];
}

function getPersonalData() {
    return {
        name: '',
        email: '',
        phone: ''
    }
}