import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { urlBuilder } from '~/routes';
import ShopItemControls from '~c/shop/shop-item-controls';
import withStore from '~/hocs/with-store';

@observer class ShopItem extends Component {
    render() {
        const item = this.props.item;
        const productUrl = urlBuilder('shopFull', { id: item.id });
        return (
            <>
                <Link to={productUrl} className="card-title">{item.title}</Link>
                <h4>{item.price}$</h4>
                <h5>Rest: {item.rest}</h5>
                <p className="card-text">{item.description}</p>
                <ShopItemControls isInCart={this.props.RootStore.cartModel.inCart(item.id)}
                    add={() => this.props.RootStore.cartModel.add(item.id)}
                    remove={() => this.props.RootStore.cartModel.remove(item.id)} />
            </>
        );
    }
}

export default withStore(ShopItem);