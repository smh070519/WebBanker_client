import styled from "styled-components";
import {flexSpaceCenter } from "../../global/common";

const S = {}

S.Navber = styled.div`
    width: 100%;
    height: 100%;
    ${flexSpaceCenter}
`

S.NavBox = styled.div`
    width: 45px;
    height: 60px;
    text-align: center;
`

S.NavImage = styled.img`
    width: 45px;
    height: 45px;
`

export default S;