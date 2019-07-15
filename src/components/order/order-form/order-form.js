import React from 'react';
import { observer } from 'mobx-react';
import { Button, Form, Modal } from 'react-bootstrap';
import LazyInput from '~c/inputs/lazy-input';
import PropTypes from 'prop-types';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

const OrderForm = observer((props) => {
    const { formFields, productsDetailed, total, canBeOrdered, confirm, hide, show, isModalShown, change } = props;
    const fields = [];
    formFields.forEach((field, i) => {
        fields.push(
            <Form.Group key={i} controlId={'order-form-' + field.name}>
                <Form.Label>{field.data.label}</Form.Label>
                <LazyInput
                    nativeProps={{ type: field.data.type, className: 'form-control' }}
                    value={field.data.value}
                    onChange={(e) => change(field.name, e.target.value)} />
                {field.data.hasErrors ? <div className={"alert alert-danger mt-2"}>{field.data.testRegexpError}</div> : ''}
            </Form.Group>
        );
    });
    const productsList = productsDetailed.map((product, i) => {
        const { id, title, cnt, price } = product;
        return (<li key={id}>
            {title} (count: {cnt}): <strong>{price * cnt}$</strong>
        </li>);
    });
    return (
        <>
            <h1>Provide your data</h1>
            <hr />
            <Form>
                {fields}
            </Form>
            <Link to={routesMap.home} className="btn btn-secondary">
                Back to home
            </Link>
            &nbsp;
            <Button variant="primary"
                onClick={() => show()}
                disabled={canBeOrdered}>
                Order
            </Button>
            <Modal show={isModalShown} backdrop="static">
                <Modal.Header>
                    <Modal.Title>Check information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <ul>
                            {productsList}
                        </ul>
                    </div>
                    <h2>Total: {total}$</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => hide()}>
                        Back
                    </Button>
                    <Button variant="primary" onClick={() => confirm()}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
});

OrderForm.propTypes = {
    formFields: PropTypes.array.isRequired,
    productsDetailed: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    canBeOrdered: PropTypes.bool.isRequired,
    confirm: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
    isModalShown: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired
};

export default OrderForm;