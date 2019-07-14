import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ShopItemFull from '~c/shop/shop-item-full';
import withStore from '~/hocs/with-store';

@observer class ShopFull extends Component {
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
        const productId = this.props.match.params.id;
        const item = shopStore.getById(productId);
        return <ShopItemFull item={item} inCart={this.inCart} add={this.add} remove={this.remove} />;
    }
}
export default withStore(ShopFull);