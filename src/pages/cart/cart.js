import React, { Component } from 'react';
import { observer } from 'mobx-react';
import withStore from '~/hocs/with-store';
import CartFormView from '~c/cart/cart-form';

@observer class Cart extends Component {
    render() {
        const cartStore = this.props.RootStore.cartStore;
        const productsRows = cartStore.productsDetailed;
        return (
            <CartFormView
                products={productsRows}
                total={cartStore.total}
                change={(id, cnt) => cartStore.change(id, cnt)}
                remove={(id) => cartStore.remove(id)}
            />
        );
    }
}

export default withStore(Cart);