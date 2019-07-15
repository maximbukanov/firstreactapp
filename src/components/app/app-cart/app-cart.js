import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const appCart = observer((props) => {
    return (
        <>
            <div className="navbar-nav">
                <a className="nav-link">Total: {props.appCartTotal}$</a>
                <a className="nav-link">Count: {props.appCartCnt}</a>
            </div>
        </>
    );
});

appCart.propTypes = {
    appCartTotal: PropTypes.number.isRequired,
    appCartCnt: PropTypes.number.isRequired
}

export default appCart;