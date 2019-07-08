import React, { Component } from 'react';
import MinMaxInput from '~c/min-max-input';
import styles from './cart.module.css';
import { observer, inject } from 'mobx-react';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

@inject('RootStore')
@observer class Cart extends Component {
    render() {
        const productsRows = this.props.RootStore.cartModel.products.map((product, i) => {
            return (
                <tr key={product.item.id}>
                    <td>{product.item.title}</td>
                    <td>{product.item.price}</td>
                    <td>
                        <MinMaxInput min={1}
                            max={product.item.rest}
                            cnt={product.current}
                            onChange={this.props.RootStore.cartModel.changeOn[i]}
                        />
                    </td>
                    <td>{this.props.RootStore.cartModel.countProductSubtotal(product)}</td>
                    <td>
                        <button className="btn btn-secondary" onClick={() => this.props.RootStore.cartModel.remove(product.item.id)}>
                            Remove
                        </button>
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
                    <strong className={styles.total}>Total: {this.props.RootStore.cartModel.total}$</strong>
                </div>
                <Link to={routesMap.order} className="btn btn-primary">
                    Send
                </Link>
            </div>
        );
    }
}

export default Cart;