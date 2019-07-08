import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Button, Form, Modal } from 'react-bootstrap';
import LazyInput from '~c/lazy-input';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

@inject('RootStore')
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
        this.props.history.push(routesMap.result);
    }

    render() {
        const formFields = [];

        for (let name in this.props.RootStore.personalDataModel.personalData) {
            const field = this.props.RootStore.personalDataModel.personalData[name];

            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <LazyInput
                        nativeProps={{ type: field.type, className: 'form-control' }}
                        value={field.value}
                        onChange={(e) => this.props.RootStore.personalDataModel.change(name, e.target.value)} />
                    {field.hasErrors ? <div className={"alert alert-danger mt-2"}>{field.testRegexpError}</div> : ''}
                </Form.Group>
            );
        }

        const productsList = this.props.RootStore.cartModel.products.map(({ ...product }) => {
            return (
                <li key={product.item.id}>
                    {product.item.title} (count: {product.current}): <strong>{this.props.RootStore.cartModel.countProductSubtotal({ ...product })}$</strong>
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
                <Link to={routesMap.cart} className="btn btn-secondary">
                    Back
                </Link>
                &nbsp;
                <Button variant="primary" onClick={() => this.show()} disabled={this.props.RootStore.personalDataModel.personalDataIsInvalid}>
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
                        <h2>Total: {this.props.RootStore.cartModel.total}$</h2>
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