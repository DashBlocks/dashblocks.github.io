import PropTypes from 'prop-types';
import React from 'react';

import MenuComponent from '../components/menu/menu.jsx';

const Menu = ({open, children, ...props}) => (
    open ? (
        <MenuComponent {...props}>
            {children}
        </MenuComponent>
    ) : null
);

Menu.propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool.isRequired
};

export default Menu;
