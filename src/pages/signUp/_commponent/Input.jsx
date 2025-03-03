import React from 'react';
import S from './style';

const Input = ({...rest}) => {
    return (
        <S.Input type={rest.type} placeholder={rest.placeholder} onChange={(e)=>rest.change(e.target.value)}/>
    );
};

export default Input;