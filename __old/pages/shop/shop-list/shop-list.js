import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ShopItem from '~c/shop/shop-item';
import withStore from '~/hocs/with-store';

@observer class ShopList extends Component {
    render() {
        const shopStore = this.props.RootStore.shopStore;
        const productsList = shopStore.items.map((item) => {
            return (
                <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <ShopItem item={item} />
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <>
                <div className="row">
                    {
                        shopStore.isLoading ?
                            <div className='col'>Loading...</div> :
                            productsList
                    }
                </div>
            </>
        );
    }
}

export default withStore(ShopList);