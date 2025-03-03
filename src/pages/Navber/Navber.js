import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const Navber = ({trueOfFalse}) => { 
    console.log(trueOfFalse)
    return (
      
        <S.Navber>
            <Link to={trueOfFalse&&'/main'}>
                <S.NavBox>
                    <S.NavImage src={process.env.PUBLIC_URL + `/images/navber/home.png`} alt="home" />
                    <p>홈</p>
                </S.NavBox>
            </Link>
            <Link to={trueOfFalse&&'/present'}>
                <S.NavBox>
                    <S.NavImage src={process.env.PUBLIC_URL + `/images/navber/present.png`} alt="present" />
                    <p>혜택</p>   
                </S.NavBox>
            </Link>
            <Link to={trueOfFalse&&'/mypage'}>
                <S.NavBox>
                    <S.NavImage src={process.env.PUBLIC_URL + `/images/navber/user.png`} alt="user" />
                    <p>정보</p>
                </S.NavBox>
            </Link>
         
           
            
        </S.Navber>
    );
};

export default Navber;