import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import withStore from '~/hocs/with-store';
import { routesMap } from '~/routes';
import { withRouter } from 'react-router-dom';

@observer class ResultScreen extends Component {
    flushAndReturn = () => {
        const cartStore = this.props.RootStore.cartStore;
        cartStore.clear();
        this.props.history.push(routesMap.home);
    }
    render() {
        const cartStore = this.props.RootStore.cartStore;
        const personalData = this.props.RootStore.personalDataStore.personalData;
        const name = { ...personalData.name };
        const total = cartStore.total;
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