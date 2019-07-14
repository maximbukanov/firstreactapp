import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Modal } from 'react-bootstrap';
import MinMaxInput from '~c/inputs/min-max-input';
import withStore from '~/hocs/with-store';
import { routesMap } from '~/routes';
import { withRouter } from 'react-router-dom';
import styles from './cart.module.css';

@observer class Cart extends Component {
    state = {
        showModal: false
    }

    show = () => {
        this.setState({ showModal: true });
    }

    hide = () => {
        this.setState({ showModal: false });
    }

    confirm = () => {
        this.hide();
        this.props.history.push(routesMap.order);
    }

    render() {
        const cartStore = this.props.RootStore.cartStore;
        const cartCounter = cartStore.getItemsCnt || '';
        const productsRows = cartStore.productsDetailed.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <MinMaxInput
                            min={1}
                            max={product.rest}
                            cnt={product.cnt}
                            onChange={(cnt) => cartStore.change(product.id, cnt)}
                        />
                    </td>
                    <td>{product.price * product.cnt}</td>
                    <td>
                        <button className="btn btn-secondary" onClick={() => cartStore.remove(product.id)}>
                            Remove
                        </button>
                    </td>
                </tr>
            );
        });
        return (
            <>
                <Button variant="primary" onClick={this.show}>
                    Cart {cartCounter}
                </Button>
                <Modal
                    show={this.state.showModal}
                    onHide={this.hide}
                    dialogClassName={styles['cart__modal']} >
                    <Modal.Header closeButton>
                        <Modal.Title>Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {cartStore.getItemsCnt === 0 ? 'No items selected' : (
                            <div>
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
                                    <strong>Total: {cartStore.total}$</strong>
                                </div>
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hide}>
                            Back
                        </Button>
                        <Button variant="primary" onClick={this.confirm} disabled={!cartStore.getItemsCnt}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default withRouter(withStore(Cart));