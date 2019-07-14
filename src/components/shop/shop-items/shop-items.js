import React from 'react';
import { Link } from 'react-router-dom';
import { urlBuilder } from '~/routes';
import withStore from '~/hocs/with-store';
import ShopItemControls from '~c/shop/shop-item-controls';

function shopItems(props) {
    console.log('SHOP ITEMS PROPS', props);
    const shopItemsList = props.shopItemsList.map((item) => {
        const productUrl = urlBuilder('shopFull', { id: item.id });
        return (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <Link to={productUrl} className="card-title">{item.title}</Link>
                        <h4>{item.price}$</h4>
                        <h5>Rest: {item.rest}</h5>
                        <p className="card-text">{item.description}</p>
                        <ShopItemControls
                            item={item}
                            inCart={props.inCart}
                            remove={props.remove}
                            add={props.add}
                        />
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className="row">
            {shopItemsList}
        </div>
    );
}

export default withStore(shopItems);