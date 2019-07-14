import React from 'react';
import withStore from '~/hocs/with-store';

function shopItemControls(props) {
    console.log('todo: shopItemControls: propTypes / remove');
    console.log('todo: shopItemControls: propTypes / add');
    console.log('todo: shopItemControls: propTypes / isInCart');
    console.log('todo: shopItemControls: propTypes / item');
    return (
        props.inCart(props.item.id) ?
            <button className="btn btn-danger" onClick={() => props.remove(props.item.id)}>Remove from cart</button> :
            <button className="btn btn-success" onClick={() => props.add(props.item.id)}>Add to cart</button>
    );
}

export default withStore(shopItemControls);