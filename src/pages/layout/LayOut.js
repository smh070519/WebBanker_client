import React from 'react';
import { Outlet } from 'react-router-dom';
import S from './styled';
import Navber from '../Navber/Navber';

const LayOut = () => {
    return (
        <S.Wrap>
            <S.header>
                <S.Logo>WebBanker</S.Logo>
            </S.header> 
            <S.Main>
            <Outlet/>
            </S.Main>
            <S.Footer>
                <Navber/>
            </S.Footer>
        </S.Wrap>
    );
};

export default LayOut;