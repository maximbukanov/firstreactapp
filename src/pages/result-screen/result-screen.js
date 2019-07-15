import React, { Component } from 'react';
import { observer } from 'mobx-react';
import withStore from '~/hocs/with-store';
import { routesMap } from '~/routes';
import { withRouter } from 'react-router-dom';
import ResultScreenView from '~c/result-screen';

@observer class ResultScreen extends Component {
    back = () => {
        this.props.history.push(routesMap.home);
    }
    render() {
        const { orderStore } = this.props.RootStore;
        const name = orderStore.cached.name;
        const total = orderStore.cached.total;
        return (
            <ResultScreenView
                name={name}
                total={total}
                back={() => this.back()}
            />
        );
    }
}

export default withRouter(withStore(ResultScreen));