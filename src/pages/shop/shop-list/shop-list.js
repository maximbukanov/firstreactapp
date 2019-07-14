import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ShopItems from '~c/shop/shop-items';
import withStore from '~/hocs/with-store';

@observer class ShopList extends Component {
    inCart = (id) => {
        return this.props.RootStore.cartStore.inCart(id);
    }
    add = (id) => {
        return this.props.RootStore.cartStore.add(id);
    }
    remove = (id) => {
        return this.props.RootStore.cartStore.remove(id);
    }
    render() {
        const shopStore = this.props.RootStore.shopStore;
        const shopItemsList = shopStore.items;
        return (
            <ShopItems
                shopItemsList={shopItemsList}
                inCart={this.inCart}
                add={this.add}
                remove={this.remove}
            />
        );
    }
}

export default withStore(ShopList);