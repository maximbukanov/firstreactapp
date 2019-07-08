import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

@observer class AppMainMenu extends Component {
    render() {
        const appMainMenuButtons = [
            { route: routesMap.home, label: 'Home' },
            { route: routesMap.cart, label: 'Cart' },
            { route: routesMap.order, label: 'Order' }
        ].map((item, i) => {
            return (<Link key={i} className="nav-link" role="button" href="#" to={item.route}>{item.label}</Link>);
        });
        return (
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Navbar.Brand>First React App</Navbar.Brand>
                <Nav className="mr-auto">
                    {appMainMenuButtons}
                </Nav>
            </Navbar>
        );
    }
}

export default AppMainMenu;