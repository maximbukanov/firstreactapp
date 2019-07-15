import React, { Component } from 'react';
import { observer } from 'mobx-react';
import withStore from '~/hocs/with-store';
import { routesMap } from '~/routes';
import { withRouter } from 'react-router-dom';
import ResultScreenView from '~c/result-screen';

@observer class ResultScreen extends Component {
    flushAndGoBack = () => {
        const cartStore = this.props.RootStore.cartStore;
        cartStore.clear();
        this.props.history.push(routesMap.home);
    }
    render() {
        const { cartStore, personalDataStore } = this.props.RootStore;
        const { name } = personalDataStore.personalData;
        const total = cartStore.total;
        return (
            <ResultScreenView
                name={name.value}
                total={total}
                flushAndGoBack={this.flushAndGoBack}
            />
        );
    }
}

export default withRouter(withStore(ResultScreen));