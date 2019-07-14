import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Form, Modal } from 'react-bootstrap';
import LazyInput from '~c/inputs/lazy-input';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';
import withStore from '~/hocs/with-store';

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
        const cartStore = this.props.RootStore.cartStore;

        const personalDataStore = this.props.RootStore.personalDataStore;

        const canBeOrdered = personalDataStore.personalDataIsInvalid === true || cartStore.getItemsCnt === 0;

        const formFields = [];

        for (let name in personalDataStore.personalData) {
            const field = personalDataStore.personalData[name];

            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <LazyInput
                        nativeProps={{ type: field.type, className: 'form-control' }}
                        value={field.value}
                        onChange={(e) => personalDataStore.change(name, e.target.value)} />
                    {field.hasErrors ? <div className={"alert alert-danger mt-2"}>{field.testRegexpError}</div> : ''}
                </Form.Group>
            );
        }

        const productsList = cartStore.productsDetailed.map((product, i) => {
            return (<li key={product.id}>
                {product.title} (count: {product.cnt}): <strong>{product.price * product.cnt}$</strong>
            </li>);
        });

        return (
            <div>
                <h1>Provide your data</h1>
                <hr />
                <Form>
                    {formFields}
                </Form>
                <Link to={routesMap.home} className="btn btn-secondary">
                    Back to home
                </Link>
                &nbsp;
                <Button variant="primary"
                    onClick={() => this.show()}
                    disabled={canBeOrdered}>
                    Order
                </Button>
                <Modal show={this.state.showModal} backdrop="static">
                    <Modal.Header>
                        <Modal.Title>Check information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <ul>
                                {productsList}
                            </ul>
                        </div>
                        <h2>Total: {cartStore.total}$</h2>
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

export default withStore(Order);