import React, { Component } from 'react';
import MinMaxInput from '~c/min-max-input';
import styles from './cart.module.css';
import { observer } from 'mobx-react';
import router from '~s/router';
import CartModel from '~s/cart';

@observer class Cart extends Component {
    render() {
        const productsRows = CartModel.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <MinMaxInput min={1}
                            max={product.rest}
                            cnt={product.current}
                            onChange={(cnt) => CartModel.change(i, cnt)}
                        />
                    </td>
                    <td>{CartModel.countProductSubtotal(product)}</td>
                    <td>
                        <button className="btn btn-secondary" onClick={() => CartModel.remove(i)}>Remove</button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h1>Cart</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price ($)</td>
                            <td>Count</td>
                            <td>Total ($)</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productsRows}
                    </tbody>
                </table>
                <div>
                    <strong className={styles.total}>Total: {CartModel.total}$</strong>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => router.moveTo('order')}>Next</button>
                </div>
            </div>
        );
    }
}

export default Cart;