import React from 'react';
import AppMinMax from './hw/5-norm.js';
import ProductRemove from './hw/product-remove.js';

export default class extends React.Component {
    state = {
        products: [
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
        ],
        formDone: false
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

    //subtotal - подытог по каждому продукту
    productSubtotal(product) {
        return product.price * product.current;
    }

    //обработчик клика по кнопке "отправить"
    sendForm = () => {
        this.setState({ formDone: true });
    }

    render() {
        let productsRows = this.state.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1}
                            max={product.rest}
                            cnt={product.current}
                            onChange={(cnt) => this.changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{this.productSubtotal(product)}</td>
                    <td>
                        <ProductRemove onClick={() => this.removeProduct(product.id)} />
                    </td>
                </tr>
            );
        });

        const productsTotal = this.state.products.reduce((sum, product) => {
            return sum + this.productSubtotal(product);
        }, 0);

        const renderLayout = !this.state.formDone ? renderCartLayout(productsRows, productsTotal, this.sendForm) : renderCongratulationsLayout();

        return (
            <div>{renderLayout}</div>
        );

        function renderCartLayout(productsRows, productsTotal, sendForm) {
            return (
                <div>
                    <h2>Cart</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Title</td>
                                <td>Price</td>
                                <td>Count</td>
                                <td>Total</td>
                            </tr>
                            {productsRows}
                        </tbody>
                    </table>
                    <div>
                        <strong>Total: {productsTotal}</strong>
                    </div>
                    <div>
                        <button onClick={sendForm}>Send</button>
                    </div>
                </div>
            );
        }

        function renderCongratulationsLayout() {
            return (
                <div>
                    <h2>Congratulations!</h2>
                    <p>Your order has been recieved!</p>
                </div>
            );
        }
    }

}