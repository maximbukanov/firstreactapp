import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function appNav(props) {
    console.log('todo: appNav: propTypes / appMainMenuLinks');
    const appMainMenuLinks = props.appMainMenuLinks.map((item, i) => {
        return (<NavLink key={i} className="nav-link" activeClassName="active" role="button" href="#" to={item.route} exact>{item.label}</NavLink>);
    });
    return (
        <Nav className="mr-auto">
            {appMainMenuLinks}
        </Nav>
    );
}