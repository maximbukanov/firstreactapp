import React from 'react';
import { routesMap } from '~/routes';
import MinMaxInput from '~c/inputs/min-max-input';
import styles from './cart-form.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cartForm = (props) => {
    const { products, total, change, remove } = props;
    const productsRows = products.map((product, i) => {
        return (
            <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                    <MinMaxInput
                        min={1}
                        max={product.rest}
                        cnt={product.cnt}
                        onChange={(cnt) => change(product.id, cnt)}
                    />
                </td>
                <td>{product.price * product.cnt}</td>
                <td>
                    <button className="btn btn-secondary" onClick={() => remove(product.id)}>
                        Remove
                    </button>
                </td>
            </tr>
        );
    });
    return (
        <>
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
                <strong className={styles.total}>Total: {total}$</strong>
            </div>
            <Link to={routesMap.order} className="btn btn-primary">
                Send
            </Link>
        </>
    );
}

PropTypes.cartForm = {
    products: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    change: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default cartForm;