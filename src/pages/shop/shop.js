import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ShopItem from '~c/shop-item';

@inject('RootStore')
@observer class Shop extends Component {
    render() {
        const productsList = this.props.RootStore.shopModel.products.map((item) => {
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
                    {productsList}
                </div>
            </>
        );
    }
}

export default Shop;