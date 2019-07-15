import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { urlBuilder } from '~/routes';
import PropTypes from 'prop-types';
import ShopItemControls from '~c/shop/shop-item-controls';

const shopItems = observer((props) => {
    const { items, inCart, remove, add } = props;
    const shopItemsList = items.map((item) => {
        const productUrl = urlBuilder('shopFull', { id: item.id });
        const { id, title, price, rest, description } = item;
        return (
            <div key={id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <div className="card-body">
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
});

shopItems.propTypes = {
    remove: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    inCart: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};

export default shopItems;