import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ShopItemFullView from '~c/shop/shop-item-full';
import withStore from '~/hocs/with-store';

@observer class ShopFull extends Component {
    render() {
        const { shopStore, cartStore } = this.props.RootStore;
        const productId = new Number(this.props.match.params.id).valueOf();
        const item = shopStore.getById(productId);
        return <ShopItemFullView
            item={item}
            inCart={(id) => cartStore.inCart(id)}
            add={(id) => cartStore.add(id)}
            remove={(id) => cartStore.remove(id)}
        />;
    }
}
export default withStore(ShopFull);