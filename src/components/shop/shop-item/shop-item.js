import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { urlBuilder } from '~/routes';
import ShopItemControls from '~c/shop/shop-item-controls';

const shopItem = observer((props) => {
    const { item: { id, title, price, rest, description }, inCart, remove, add } = props;
    const productUrl = urlBuilder('shopFull', { id });
    return (
        <>
            <Link to={productUrl} className="card-title">{title}</Link>
            <h4>{price}$</h4>
            <h5>Rest: {rest}</h5>
            <p className="card-text">{description}</p>
            <ShopItemControls
                item={item}
                inCart={inCart}
                remove={remove}
                add={add}
            />
        </>
    );
});

shopItem.propTypes = {
    remove: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    inCart: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

export default shopItem; 