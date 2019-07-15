import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

const resultScreen = observer((props) => {
    const { name, total, flushAndGoBack } = props;
    return (
        <>
            <div>
                <h2>Congratulations, {name}!</h2>
                <p>Your order in {total}$ has been recieved!</p>
                <button className="btn btn-warning" onClick={() => flushAndGoBack()}>Clear the cart & back to home</button>
            </div>
        </>
    );
});

PropTypes.resultScreen = {
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    flushAndReturn: PropTypes.func.isRequired
}

export default resultScreen;