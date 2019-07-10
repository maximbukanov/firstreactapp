import React, { Component } from 'react';
import MinMaxInput from '~c/inputs/min-max-input';
import styles from './cart.module.css';
import { observer } from 'mobx-react';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';
import withStore from '~/hocs/with-store';

@observer class Cart extends Component {
    render() {
        const cartModel = this.props.RootStore.cartModel;

        const productsRows = cartModel.productsDetailed.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <MinMaxInput
                            min={1}
                            max={product.rest}
                            cnt={product.cnt}
                            onChange={(cnt) => cartModel.change(product.id, cnt)}
                        />
                    </td>
                    <td>{product.price * product.cnt}</td>
                    <td>
                        <button className="btn btn-secondary" onClick={() => cartModel.remove(product.id)}>
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
                    <strong className={styles.total}>Total: {cartModel.total}$</strong>
                </div>
                <Link to={routesMap.order} className="btn btn-primary">
                    Send
                </Link>
            </div>
        );
    }
}

export default withStore(Cart);