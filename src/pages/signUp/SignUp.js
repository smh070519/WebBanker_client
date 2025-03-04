import React, { useState } from 'react';
import S from './style';
import Input from './_commponent/Input';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import CryptoJS from 'crypto-js'; // crypto-js 임포트

const SignUp = (props) => {

    
    const [userName, setUserName] = useState(""); //이름
    const [userPw, setUserPw] = useState(""); // 비밀번호
    const [retry, setRry] = useState("");  // 비밀번호 확인
    const [userId, setUserId] = useState(""); // 아이디
    const [userEmail, setEmail] = useState(""); // 이메일
    const {trueOfFalse,setTrueOfFalse}= useOutletContext()
    const navigate = useNavigate(); // 네비게이트 훅 추가

    const onsubmit = async () => {
        const hashedPw = CryptoJS.SHA256(userPw).toString(CryptoJS.enc.Hex);
        const hashedRetry = CryptoJS.SHA256(retry).toString(CryptoJS.enc.Hex);
        console.log("1",hashedPw)
        console.log("2",hashedRetry)
        const response = await fetch('http://localhost:8000/newuser1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                UserName: userName,
                UserId: userId,
                UserPw: hashedPw,  // 비밀번호는 해싱된 값이어야 합니다.
                UserPwRe : hashedRetry,
                UserEmail: userEmail,
            }),
        });
        const result = await response.json();
        console.log(result)
        if (result.Success === true) { // 서버에서 응답이 true일 경우
            setTrueOfFalse(result.Success)
            console.log(trueOfFalse)
            navigate('/main',{
                state : {
                    userName : result.UserName,
                    message : "회원가입 성공"
                }
            }); // 성공 페이지로 이동 (경로는 필요에 따라 수정)
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
                    <Input change={setUserName} type={'text'} placeholder={"이름을 입력해주세요"} />
                </S.InputBox>
                <S.InputBox>
                    <S.Label>아이디</S.Label>
                    <Input change={setUserId} type={'text'} placeholder={"아이디를 입력해주세요"}/>
                </S.InputBox>
                <S.InputBox>
                    <S.Label>비밀번호</S.Label>
                    <Input type={'password'} change={setUserPw} placeholder={"비밀번호를 입력해주세요"}/>
                </S.InputBox>
                <S.InputBox>
                    <S.Label>비밀번호 확인</S.Label>
                    <Input type={'password'} change={setRry} placeholder={"비밀번호 재입력 입력해주세요"}/>
                </S.InputBox>
                <S.InputBox>
                    <S.Label>이메일</S.Label>
                    <Input change={setEmail} type={'email'} placeholder={"이메일을 입력해주세요"}/>
                </S.InputBox>
                <S.Submit onClick={onsubmit}>전송버튼</S.Submit>

            </S.SignUpBox>
        </S.Main>
    );
};

export default SignUp;
