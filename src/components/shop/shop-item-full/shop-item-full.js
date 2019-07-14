import React from 'react';
import withStore from '~/hocs/with-store';
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';
import ShopItemControls from '~c/shop/shop-item-controls';

function shopItemFull(props) {
    return (
        <div>
            <h1>{props.item.title}</h1>
            <p>{props.item.description}</p>
            <h4>{props.item.price}$</h4>
            <h5>Rest: {props.item.rest}</h5>
            <p className="card-text">{props.item.description}</p>
            <ShopItemControls
                item={props.item}
                inCart={props.inCart}
                remove={props.remove}
                add={props.add}
            />
            <Link to={routesMap.home} className="btn btn-secondary">Back</Link>
        </div>
    );
}

export default withStore(shopItemFull);