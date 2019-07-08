import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';
import ShopItemControls from '~c/shop-item-controls';

@inject('RootStore')
@observer class ShopFull extends Component {
    render() {
        const productId = this.props.match.params.id;
        const item = this.props.RootStore.shopModel.findProductById(productId);
        //забавно и печально, но кнопка не обновится, если я закомментирую эту строку
        const total = this.props.RootStore.cartModel.total;
        ///
        return (
            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h4>{item.price}$</h4>
                <h5>Rest: {item.rest}</h5>
                <p className="card-text">{item.description}</p>
                <ShopItemControls isInCart={this.props.RootStore.shopModel.isInCart(item)}
                    add={() => this.props.RootStore.cartModel.add(item)}
                    remove={() => this.props.RootStore.cartModel.remove(item.id)} />
                <Link to={routesMap.home} className="btn btn-secondary">Back</Link>
            </div >
        );
    }
}
export default ShopFull;