import React from 'react';
import S from './style';

const Input = ({...rest}) => {
    return (
        <S.Input type={rest.type} placeholder={rest.placeholder} />
    );
};

export default Input;