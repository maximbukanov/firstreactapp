import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ShopItemsView from '~c/shop/shop-items';
import withStore from '~/hocs/with-store';

@observer class ShopList extends Component {
    render() {
        const { shopStore: { items }, cartStore } = this.props.RootStore;
        return (
            <ShopItemsView
                items={items}
                inCart={(id) => cartStore.inCart(id)}
                add={(id) => cartStore.add(id)}
                remove={(id) => cartStore.remove(id)}
            />
        );
    }
}

export default withStore(ShopList);