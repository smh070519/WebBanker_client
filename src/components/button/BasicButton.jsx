import React from 'react';
import Button from './style';

const BasicButton = ({children, ...rest}) => {
    return (
        <Button {...rest}>{children}</Button>
    );
};

export default BasicButton;