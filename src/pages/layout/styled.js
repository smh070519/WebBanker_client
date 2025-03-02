import styled from 'styled-components';
import { flexCenter } from '../../global/common';

const S = {};

S.Wrap = styled.div`
    width: 402px;
    height: 874px;
    margin: 0 auto;
    margin-top: 5vh;
    background-color: #2F2C2C;
`;
S.header = styled.div`
    width: 100%;
    height: 10%;
    ${flexCenter}
`

S.Logo = styled.h1`
    font-size: 1.5rem;
`

S.Main = styled.div`
    width: 100%;
    height: 80%;
`

S.Footer = styled.div`
    width: 100%;
    height: 10%;
`
export default S;
