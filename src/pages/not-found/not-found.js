import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

@observer class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>Page not found!</h1>
                <Link to={routesMap.home} className="btn btn-primary">
                    Back to cart
                </Link>
            </div>
        );
    }
}

export default NotFound;