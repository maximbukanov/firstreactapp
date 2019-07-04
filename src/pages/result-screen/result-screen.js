import React, { Component } from 'react';
import { observer } from 'mobx-react';
import OrderModel from '~s/personal-data';
import CartModel from '~s/cart';

@observer class ResultScreen extends Component {
    render() {
        const name = { ...OrderModel.personalData.name };
        const total = CartModel.total;
        return (
            <div>
                <h2>Congratulations, {name.value}!</h2>
                <p>Your order in {total}$ has been recieved!</p>
            </div>
        );
    }
}

export default ResultScreen;