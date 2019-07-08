import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('RootStore')
@observer class ResultScreen extends Component {
    render() {
        const name = { ...this.props.RootStore.personalDataModel.personalData.name };
        const total = this.props.RootStore.cartModel.total;
        return (
            <>
                <div>
                    <h2>Congratulations, {name.value}!</h2>
                    <p>Your order in {total}$ has been recieved!</p>
                </div>
            </>
        );
    }
}

export default ResultScreen;