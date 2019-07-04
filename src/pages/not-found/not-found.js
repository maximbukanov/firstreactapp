import React, { Component } from 'react';
import { observer } from 'mobx-react';
import router from '~s/router';

@observer class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>Page not found!</h1>
                <button className="btn btn-primary" onClick={() => router.moveTo('cart')}>Back to cart</button>
            </div>
        );
    }
}

export default NotFound;