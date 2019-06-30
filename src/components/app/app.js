import React from 'react';
import Cart from '../cart';

export default class extends React.Component {
    state = {
        products: getProducts(),
        personalData: getPersonalData(),
        cartItemsProvided: false,
        personalDataProvided: false,
        orderDetailsConfirmed: false,
        formDone: false,
    }

    //Обновляет state.products и устанавливает количество продуктов 
    changeCnt(i, cnt, products) {
        // по смысле this.state.products[i].current = cnt;
        let newProducts = [...products];
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
    setPersonalData() {
        console.log('set personal data from the form');
    }

    //шаг 1 - клиент набрал корзину
    cartItemsProvided = () => {
        this.setState({ cartItemsProvided: true });
    }

    //шаг 2 - клиент ввел свои данные
    personalDataProvided = () => {
        this.setState({ personalDataProvided: true });
    }

    //шаг 3 - клиент подтвердил корзину и введенные им данные
    orderDetailsConfirmed = () => {
        this.setState({ orderDetailsConfirmed: true });
    }

    //шаг 4 - отправить заказ и сообщить об этом клиенту
    sendForm = () => {
        this.setState({ formDone: true });
    }

    getCurrentLayout = () => {
        let result = null;
        if (!this.state.cartItemsProvided) {
            result = (
                <div>
                    <Cart
                        products={this.state.products}
                        // formDone={this.state.formDone}
                        changeCnt={this.changeCnt.bind(this)}
                        removeProduct={this.removeProduct.bind(this)}
                        cartItemsProvided={this.cartItemsProvided.bind(this)}
                    // setPersonalData={this.setPersonalData.bind(this)}
                    // personalDataProvided={this.personalDataProvided.bind(this)}
                    // orderDetailsConfirmed={this.orderDetailsConfirmed.bind(this)}
                    // sendForm={this.sendForm.bind(this)}
                    />
                </div>
            );
        } else if (!this.state.personalDataProvided) {
            result = (
                <div>
                    <h1>Personal data is not provided</h1>
                </div>
            );
        } else if (!this.state.orderDetailsConfirmed) {
            result = (
                <div>
                    <h1>Confirm your order details!</h1>
                </div>
            );
        } else if (!this.state.formDone) {
            result = (
                <div>
                    <h2>Congratulations!</h2>
                    <p>Your order has been recieved!</p>
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