import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

const shopItemControls = observer((props) => {
    const { item: { id }, inCart, remove, add } = props;
    return (
        inCart(id) ?
            <button className="btn btn-danger" onClick={() => remove(id)}>Remove from cart</button> :
            <button className="btn btn-success" onClick={() => add(id)}>Add to cart</button>
    );
});

shopItemControls.propTypes = {
    remove: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    inCart: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

export default shopItemControls;