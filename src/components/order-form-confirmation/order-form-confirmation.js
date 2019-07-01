import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { countProductSubtotal, countProductsTotal } from '../../functions';

export default class extends Component {
    render() {
        const {
            products,
            personalData,
            personalDataProvided,
            orderDetailsConfirmed,
            setPersonalDataProvided,
            setOrderDetailsConfirmed
        } = this.props;

        const productsList = products.map((item) => {
            return (
                <li key={item.id}>
                    {item.title} (count: {item.current}): <strong>{countProductSubtotal(item)}</strong>
                </li>
            );
        });

        const productsTotal = countProductsTotal(products);

        return (
            <Modal show={personalDataProvided && !orderDetailsConfirmed} onHide={() => setPersonalDataProvided(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Please, confirm your order details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <ul>
                            {productsList}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Your name: {personalData.name}</li>
                            <li>Phone: {personalData.phone}</li>
                            <li>Email: {personalData.email}</li>
                        </ul>
                    </div>
                    <h2>Total: {productsTotal}</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setPersonalDataProvided(false)}>
                        Close
                        </Button>
                    <Button variant="primary" onClick={() => setOrderDetailsConfirmed(true)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}