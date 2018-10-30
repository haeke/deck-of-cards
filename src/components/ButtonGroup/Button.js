import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, handleClick, className, ...rest }) => {
    return (
        <button onClick={handleClick} className={className} {...rest}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    handleClick: PropTypes.func,
    className: PropTypes.string,
}

Button.defaultProps = {
    children: undefined,
    handleClick: undefined,
    className: '',
}

export default Button;