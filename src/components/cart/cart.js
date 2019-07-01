import React, { Component } from 'react';
import MinMaxInput from '../min-max-input';
import styles from './cart.module.css';
import { countProductSubtotal, countProductsTotal } from '../../functions';

export default class extends Component {
    render() {
        const {
            products,
            changeCnt,
            removeProduct,
            setCartItemsProvided
        } = this.props;

        const productsRows = products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <MinMaxInput min={1}
                            max={product.rest}
                            cnt={product.current}
                            onChange={(cnt) => changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{countProductSubtotal(product)}</td>
                    <td>
                        <button className="btn btn-secondary" onClick={() => removeProduct(product.id)}>Remove</button>
                    </td>
                </tr>
            );
        });

        const productsTotal = countProductsTotal(products);

        return (
            <div>
                <h1>Cart</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productsRows}
                    </tbody>
                </table>
                <div>
                    <strong className={styles.total}>Total: {productsTotal}</strong>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => setCartItemsProvided(true)}>Next</button>
                </div>
            </div>
        );
    }
}