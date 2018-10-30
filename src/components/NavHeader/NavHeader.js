import React from 'react';

const NavHeader = ({ className, headerText, children }) => {
    return children({ className, headerText })
};

export default NavHeader;