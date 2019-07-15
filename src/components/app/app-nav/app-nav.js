import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

const appNav = (props) => {
    const appMainMenuLinks = props.appMainMenuLinks.map((item, i) => {
        return (<NavLink key={i} className="nav-link" activeClassName="active" role="button" href="#" to={item.route} exact>{item.label}</NavLink>);
    });
    return (
        <Nav className="mr-auto">
            {appMainMenuLinks}
        </Nav>
    );
};

PropTypes.appNav = {
    appMainMenuLinks: PropTypes.array.isRequired
};

export default appNav;