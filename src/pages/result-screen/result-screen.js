import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import withStore from '~/hocs/with-store';
import { routesMap } from '~/routes';
import { withRouter } from 'react-router-dom';

@observer class ResultScreen extends Component {
    flushAndReturn = () => {
        const cartModel = this.props.RootStore.cartModel;
        cartModel.productsDetailed.map((item, i) => {
            cartModel.remove(item.id);
        });
        this.props.history.push(routesMap.home);
    }
    render() {
        const cartModel = this.props.RootStore.cartModel;
        const personalData = this.props.RootStore.personalDataModel.personalData;
        const name = { ...personalData.name };
        const total = cartModel.total;
        return (
            <>
                <div>
                    <h2>Congratulations, {name.value}!</h2>
                    <p>Your order in {total}$ has been recieved!</p>
                    <button className="btn btn-warning" onClick={this.flushAndReturn}>Clear the cart & back to home</button>
                </div>
            </>
        );
    }
}

export default withRouter(withStore(ResultScreen));