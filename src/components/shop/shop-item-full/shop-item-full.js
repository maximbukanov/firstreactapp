import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';
import ShopItemControls from '~c/shop/shop-item-controls';

const shopItemFull = (props) => {
    const {
        item: { title, description, price, rest },
        inCart, remove, add
    } = props;
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <h4>{price}$</h4>
            <h5>Rest: {rest}</h5>
            <p className="card-text">{description}</p>
            <ShopItemControls
                item={props.item}
                inCart={inCart}
                remove={remove}
                add={add}
            />
            <Link to={routesMap.home} className="btn btn-secondary">Back</Link>
        </div>
    );
};

shopItemFull.propTypes = {
    remove: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    inCart: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

export default shopItemFull;