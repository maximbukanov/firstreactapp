import React from 'react';
import { Link } from 'react-router-dom';
import { urlBuilder } from '~/routes';
import ShopItemControls from '~c/shop/shop-item-controls';
import withStore from '~/hocs/with-store';

function shopItem(props) {
    const item = props.item;
    const productUrl = urlBuilder('shopFull', { id: item.id });
    return (
        <>
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
        </>
    );
}

export default withStore(shopItem); 