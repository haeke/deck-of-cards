import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';
import NavHeader from '../NavHeader/NavHeader';
import UnorderedList from '../UnorderedList/UnorderedList';


const Nav = ({ className, navHeaderClass, headerText, unorderedClass, listObject }) => {
    return (
        <nav className={className}>
            <NavHeader className={navHeaderClass} headerText={headerText}>
                {({ className, headerText }) => (
                        <h2 className={className}><Link style={{ color: 'white', textDecoration: 'none' }}to={routes.HOME}>{headerText}</Link></h2>
                )}
            </NavHeader>
            <UnorderedList className={unorderedClass} listObject={listObject} />
        </nav>
    );
};

Nav.propTypes = {
    className: PropTypes.string,
}

Nav.defaultProps = {
    className: '',
}

export default Nav;