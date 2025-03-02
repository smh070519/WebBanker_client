import React, { useEffect, useState } from 'react';
import S from './style';
import Input from './_commponent/Input';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [userName, setUserName] = useState(""); //이름
    const [userPw, setUserPw] = useState(""); // 비밀번호
    const [retry, setRry] = useState("");  // 비밀번호 확인
    const [userId, setUserId] = useState(""); // 아이디
    const [userEmail, setEmail] = useState(""); // 이메일
    const navigate = useNavigate(); // 네비게이트 훅 추가

    const onsubmit = async () => {
        const response = await fetch('http://localhost:8000/newuser1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                UserName: userName,
                UserId: userId,
                UserPw: userPw,
                UserPwRe : retry,
                UserEmail: userEmail,
            }),
        });
        const result = await response.json();

        if (result.Success === true) { // 서버에서 응답이 true일 경우
            navigate('/main'); // 성공 페이지로 이동 (경로는 필요에 따라 수정)
        } else {
            alert("회원가입 실패"); // 실패 시 alert 또는 다른 처리를 해줄 수 있습니다.
        }
    };


    return (
        <S.Main>
            <S.SignUpBox>
                <S.Header>
                    <Link to={"/"}><S.Images src={process.env.PUBLIC_URL + `/images/Login&Signup/arr.png`} alt="back_key" /></Link>
                    <S.Title>회원가입</S.Title>
                </S.Header>
                <S.InputBox>
                    <S.Label>이름</S.Label>
                    <Input onChange={(e) => setUserName(e.target.value)} type={'text'} />
                </S.InputBox>
                <S.InputBox>
                    <S.Label>아이디</S.Label>
                    <Input onChange={(e) => setUserId(e.target.value)} type={'text'} />
                </S.InputBox>
                <S.InputBox>
                    <S.Label>비밀번호</S.Label>
                    <Input type={'password'} onChange={(e) => setUserPw(e.target.value)} />
                </S.InputBox>
                <S.InputBox>
                    <S.Label>비밀번호 확인</S.Label>
                    <Input type={'password'} onChange={(e) => setRry(e.target.value)} />
                </S.InputBox>
                <S.InputBox>
                    <S.Label>이메일</S.Label>
                    <Input onChange={(e) => setEmail(e.target.value)} type={'email'} />
                </S.InputBox>
                <S.Submit onClick={onsubmit}>전송버튼</S.Submit>
            </S.SignUpBox>
        </S.Main>
    );
};

export default SignUp;
