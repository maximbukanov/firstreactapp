import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Form, Modal } from 'react-bootstrap';
import LazyInput from '~c/lazy-input';
import OrderModel from '~s/personal-data';
import CartModel from '~s/cart';
import router from '~s/router';

@observer class Order extends Component {
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
        router.moveTo('result');
    }

    render() {
        const formFields = [];

        for (let name in OrderModel.personalData) {
            const field = OrderModel.personalData[name];

            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <LazyInput
                        nativeProps={{ type: field.type, className: 'form-control' }}
                        value={field.value}
                        onChange={(e) => OrderModel.change(name, e.target.value)} />
                    {field.hasErrors ? <div className={"alert alert-danger mt-2"}>{field.testRegexpError}</div> : ''}
                </Form.Group>
            );
        }

        const productsList = CartModel.products.map(({ ...item }) => {
            return (
                <li key={item.id}>
                    {item.title} (count: {item.current}): <strong>{CartModel.countProductSubtotal({ ...item })}$</strong>
                </li>
            );
        });

        return (
            <div>
                <h1>Provide your data</h1>
                <hr />
                <Form>
                    {formFields}
                </Form>
                <Button variant="secondary" onClick={() => router.moveTo('cart')}>
                    Back
                </Button>
                &nbsp;
                <Button variant="primary" onClick={() => this.show()} disabled={OrderModel.personalDataIsInvalid}>
                    Order
                </Button>
                <Modal show={this.state.showModal} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Check information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <ul>
                                {productsList}
                            </ul>
                        </div>
                        <h2>Total: {CartModel.total}$</h2>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hide}>
                            Back
                        </Button>
                        <Button variant="primary" onClick={this.confirm}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Order;