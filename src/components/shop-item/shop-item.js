import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { urlBuilder } from '~/routes';
import ShopItemControls from '~c/shop-item-controls';

@inject('RootStore')
@observer class ShopItem extends Component {
    render() {
        const item = this.props.item;
        const productUrl = urlBuilder('shopFull', { id: item.id });
        //забавно и печально, но кнопка не обновится, если я закомментирую эту строку
        const total = this.props.RootStore.cartModel.total;
        ///
        return (
            <>
                <Link to={productUrl} className="card-title">{item.title}</Link>
                <h4>{item.price}$</h4>
                <h5>Rest: {item.rest}</h5>
                <p className="card-text">{item.description}</p>
                <ShopItemControls isInCart={this.props.RootStore.shopModel.isInCart(item)}
                    add={() => this.props.RootStore.cartModel.add(item)}
                    remove={() => this.props.RootStore.cartModel.remove(item.id)} />
            </>
        );
    }
}

export default ShopItem;