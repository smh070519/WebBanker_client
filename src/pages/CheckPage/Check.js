import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/style';
import BasicButton from '../../components/button/BasicButton';

const Check = () => {
    return (
        <div>
            <BasicButton variant={'sub'}><Link to={"/signup"}>회원가입</Link></BasicButton>
            <BasicButton variant={'sub'}><Link to={"/userlogin"}>로그인</Link></BasicButton>
        </div>
    );
};

export default Check;