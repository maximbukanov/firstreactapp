import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';
import ShopItemControls from '~c/shop/shop-item-controls';
import withStore from '~/hocs/with-store';

@observer class ShopFull extends Component {
    render() {
        const shopStore = this.props.RootStore.shopStore;
        const cartStore = this.props.RootStore.cartStore;

        const productId = this.props.match.params.id;
        const item = shopStore.getById(productId);
        return (
            <>
                {
                    shopStore.isLoading ?
                        'Loading...' :
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <h4>{item.price}$</h4>
                            <h5>Rest: {item.rest}</h5>
                            <p className="card-text">{item.description}</p>
                            <ShopItemControls isInCart={cartStore.inCart(item.id)}
                                add={() => cartStore.add(item.id)}
                                remove={() => cartStore.remove(item.id)} />
                            <Link to={routesMap.home} className="btn btn-secondary">Back</Link>
                        </div>
                }
            </>

        );
    }
}
export default withStore(ShopFull);