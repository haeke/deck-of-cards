import React from 'react';

const Button = ({ children, handleClick, className, ...rest }) => {
    return (
        <button onClick={handleClick} className={className} {...rest}>
            {children}
        </button>
    );
}

export default Button;