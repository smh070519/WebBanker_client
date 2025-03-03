import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import S from './styled';
import Navber from '../Navber/Navber';

const LayOut = () => {
    const [trueOfFalse,setTrueOfFalse] = useState(false); //로그인 유무
    return (
        <S.Wrap>
            <S.header>
                <S.Logo>WebBanker</S.Logo>
            </S.header> 
            <S.Main>
            <Outlet context={{trueOfFalse,setTrueOfFalse}} />
            </S.Main>
            <S.Footer>
                <Navber trueOfFalse={trueOfFalse} />
            </S.Footer >
        </S.Wrap>
    );
};

export default LayOut;