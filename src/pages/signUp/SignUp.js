import React, { useEffect, useState } from 'react';

const SignUp = () => {
    const [userName,setUserName] = useState("")
    const [userPw, setUserPw] = useState("");
    const [userId, setUserId] = useState("");
    const [userEmail, setEmail] = useState("");
    const onsubmit = async () =>{
        const response = await fetch('http://localhost:8000/newuser1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName : userName,
                userId : userId,
                userPw :userPw,
                userEmail :userEmail ,
            }),
        });
        const result = await response.json();
    }

    useEffect(() => {
        onsubmit();  // 컴포넌트가 처음 렌더링될 때 호출
    }, []);  // currentUser.email이 변경될 때마다 호출
    
    return (
        
        <div>
             <div>
                <label>이름</label>
                <input onChange={(e)=> setUserName(e.target.value)} type='text'/>
            </div>
            <div>
                <label>아이디</label>
                <input onChange={(e)=> setUserId(e.target.value)} type='text'/>
            </div>
            <div>
                <label>비밀번호</label>
                <input onChange={(e)=>setUserPw(e.target.value)} type='password'/>
            </div>
            <div>
                <label>이메일</label>
                <input onChange={(e)=>setEmail(e.target.value)} type='email'/>
            </div>
            <button onClick={onsubmit}>전송버튼</button>
        </div>
    );
};

export default SignUp;