import React from 'react';
import { Navbar } from 'react-bootstrap';
import AppNav from '~c/app/app-nav';
import AppCart from '~c/app/app-cart';

export default function appNavbar(props) {
    console.log('todo: appNavbar: propTypes / appMainMenuLinks');
    console.log('todo: appNavbar: propTypes / appCartCnt');
    return (
        <>
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Navbar.Brand>First React App</Navbar.Brand>
                <AppNav appMainMenuLinks={props.appMainMenuLinks} />
                <AppCart appCartTotal={props.appCartTotal} appCartCnt={props.appCartCnt} />
            </Navbar>
        </>
    );
}