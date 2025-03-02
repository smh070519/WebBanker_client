import React, { useState } from 'react';
import S from './style';
import Input from '../signUp/_commponent/Input';
import { Link, Navigate, Outlet } from 'react-router-dom';
import CryptoJS from 'crypto-js'; // crypto-js 임포트

const SignIn = () => {
    const [userId,setUserId] = useState("")
    const [userPw,setUserPw] = useState("")



     const onsubmit = async () => {
            const hashedPw = CryptoJS.SHA256(userPw).toString(CryptoJS.enc.Hex);
            setUserPw(hashedPw); // 해싱된 비밀번호로 상태 업데이트
    
            const response = await fetch('http://localhost:8000/newuser1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UserId: userId,
                    UserPw: userPw,  // 비밀번호는 해싱된 값이어야 합니다.
                }),
            });
            const result = await response.json();
    
            if (result.Success === true) { // 서버에서 응답이 true일 경우
                Navigate('/main',{
                    state : {
                        userName : result.UserName,
                        message : "로그인 성공"
                    }
                }); // 성공 페이지로 이동 (경로는 필요에 따라 수정)
            } else {
                alert("회원가입 실패"); // 실패 시 alert 또는 다른 처리를 해줄 수 있습니다.
            }
        };
    
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