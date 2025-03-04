import React, { useState } from 'react';
import S from './style';
import Input from '../signUp/_commponent/Input';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate 임포트
import CryptoJS from 'crypto-js'; // crypto-js 임포트

const SignIn = () => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const navigate = useNavigate(); // useNavigate 훅 사용

    const onsubmit = async () => {
        const hashedPassword = CryptoJS.SHA256(userPw).toString(CryptoJS.enc.Hex);

        const response = await fetch('http://localhost:8000/userlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                UserId: userId,
                UserPw: hashedPassword,  // 해싱된 비밀번호를 전송
            }),
        });
        const result = await response.json();
        console.log("result",result)
        if (result.Success === true) { // 서버에서 응답이 true일 경우
            navigate('/main', {
                state: {
                    userName: result.UserName,
                    message: "로그인 성공"
                }
            }); // 페이지 이동
        } else {
            alert("로그인 실패"); // 실패 시 alert 또는 다른 처리를 해줄 수 있습니다.
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
                    <Input change={setUserId} type={'text'} />
                </S.InputBox>
                <S.InputBox>
                    <S.Label>비밀번호</S.Label>
                    <Input type={'password'} change={setUserPw} />
                </S.InputBox>
                <S.MoveBox>
                    <Link to={'/signup'}><S.Move>회원가입으로 이동</S.Move></Link>
                </S.MoveBox>
                <S.Submit onClick={onsubmit}>전송버튼</S.Submit>
            </S.LoginBox>
        </S.Main>
    );
};

export default SignIn;
