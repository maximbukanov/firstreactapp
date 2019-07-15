import React from 'react';
import { Navbar } from 'react-bootstrap';
import AppNav from '~c/app/app-nav';
import { observer } from 'mobx-react';
import AppCart from '~c/app/app-cart';
import PropTypes from 'prop-types';

const appNavbar = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Navbar.Brand>First React App</Navbar.Brand>
                <AppNav appMainMenuLinks={props.appMainMenuLinks} />
                <AppCart appCartTotal={props.appCartTotal} appCartCnt={props.appCartCnt} />
            </Navbar>
        </>
    );
};

appNavbar.propTypes = {
    appMainMenuLinks: PropTypes.array.isRequired,
    appCartCnt: PropTypes.number.isRequired
}

export default appNavbar;