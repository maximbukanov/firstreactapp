import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import LazyInput from '../lazy-input';
import OrderFormConfirmation from '../order-form-confirmation';

export default class extends Component {
    //При повторном рендере компонента (на каждом onChange в LazyInput) метод будет исполняться для кнопки Next
    //Снимает атрибут disabled, если каждое из значений в personalData заполнено
    isNextButtonDisabled(personalData) {
        const personalDataValues = Object.values(personalData);
        return !personalDataValues.every((value) => {
            return value.length;
        });
    }

    render() {
        const {
            products,
            personalData,
            applyPersonalData,
            personalDataProvided,
            orderDetailsConfirmed,
            setPersonalDataProvided,
            setOrderDetailsConfirmed,
            setCartItemsProvided
        } = this.props;

        return (
            <div>
                <h1>Provide your data</h1>
                <form>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Your name</label>
                        <LazyInput
                            nativeProps={{ type: 'text', className: 'form-control', id: 'name' }}
                            value={this.props.personalData.name}
                            onChange={(e) => applyPersonalData(e.target.value, 'name')} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <LazyInput
                            nativeProps={{ type: 'email', className: 'form-control', id: 'email' }}
                            value={this.props.personalData.email}
                            onChange={(e) => applyPersonalData(e.target.value, 'email')} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone</label>
                        <LazyInput
                            nativeProps={{ type: 'text', className: 'form-control', id: 'phone' }}
                            value={this.props.personalData.phone}
                            onChange={(e) => applyPersonalData(e.target.value, 'phone')} />
                    </div>
                    <div>
                        <Button variant="secondary" onClick={() => setCartItemsProvided(false)}>Back</Button>
                        <Button variant="primary" onClick={() => setPersonalDataProvided(true)} disabled={this.isNextButtonDisabled(personalData)}>Next</Button>
                    </div>
                </form>
                <OrderFormConfirmation
                    products={products}
                    personalData={personalData}
                    personalDataProvided={personalDataProvided}
                    orderDetailsConfirmed={orderDetailsConfirmed}
                    setPersonalDataProvided={setPersonalDataProvided}
                    setOrderDetailsConfirmed={setOrderDetailsConfirmed} />
            </div >
        );
    }
}