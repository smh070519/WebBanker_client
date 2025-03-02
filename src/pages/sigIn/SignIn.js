import React, { useState } from 'react';
import S from './style';
import Input from '../signUp/_commponent/Input';
import { Link, Outlet } from 'react-router-dom';

const SignIn = () => {
    const [userId,setUserId] = useState("")
    const [userPw,setUserPw] = useState("")

    return (
        <S.Main>
            <S.LoginBox>
                <S.Header>
                    <Link to={"/"}><S.Images src={process.env.PUBLIC_URL + `/images/Login&Signup/arr.png`} alt="back_key" /></Link>
                    <S.Title>로그인</S.Title>
                </S.Header>
                <S.InputBox>
                    <S.Label>아이디</S.Label>
                    <Input onChange={(e)=> setUserId(e.target.value)} type={'text'}/>
                </S.InputBox>
                <S.InputBox>
                    <S.Label>비밀번호</S.Label>
                    <Input type={'password'} onChange={(e)=>setUserPw(e.target.value)}/>
                </S.InputBox>
                <S.MoveBox>
                    <Link to={'/signup'}><S.Move >회원가입으로 이동</S.Move ></Link>
                </S.MoveBox>
                <S.Submit onClick={onsubmit}>전송버튼</S.Submit>
            </S.LoginBox>
            <Outlet/>
        </S.Main >
    );
};

export default SignIn;