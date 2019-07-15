import React, { Component } from 'react';
import { observer } from 'mobx-react';
import OrderFormView from '~c/order/order-form';
import { routesMap } from '~/routes';
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
        const { personalDataStore } = this.props.RootStore;
        const {
            cartStore: { productsDetailed, total },
            personalDataStore: { personalData, personalDataIsInvalid, getItemsCnt }
        } = this.props.RootStore;
        const canBeOrdered = personalDataIsInvalid === true || getItemsCnt === 0;
        const formFields = [];
        for (let name in personalData) {
            formFields.push({ name, data: personalData[name] });
        }
        return (
            <OrderFormView
                formFields={formFields}
                productsDetailed={productsDetailed}
                total={total}
                canBeOrdered={canBeOrdered}
                isModalShown={this.state.showModal}
                show={this.show}
                hide={this.hide}
                confirm={this.confirm}
                change={(name, value) => personalDataStore.change(name, value)}
            />
        );
    }
}

export default withStore(Order);