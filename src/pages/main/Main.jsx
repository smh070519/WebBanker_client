import React from 'react';
import { useLocation,useNavigate,useOutletContext } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
    const {userName, message} = location.state || {}
    const {trueOfFalse,setTrueOfFalse}= useOutletContext()
    const navigate = useNavigate()
    if(trueOfFalse === false){
        navigate('/')
    }
    return (
        <div>
            <button onClick={()=>setTrueOfFalse(false)}>로그아웃</button>
            <p>{userName}</p>
            <p>{message}</p>
        </div>
    );
};

export default Main;