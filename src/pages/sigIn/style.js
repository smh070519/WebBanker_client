import styled from 'styled-components'
import { flexSpaceCenter } from '../../global/common'

const S = {}

S.Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

S.Header = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	`

S.Title = styled.h1`
	font-size: 1.2rem;
	margin: 0 auto;
	transform: translateX(-50%);
`

S.Images= styled.img`
	width: 30px;
	height: 30px;
	margin: 10px;
`

S.LoginBox = styled.div`
    width: 355px;
    height: 270px;
    border-radius: 10px;
    ${flexSpaceCenter}
    flex-direction: column;
    background-color: #383636;
`
S.InputBox = styled.div`
    
`

S.Label = styled.p`
    font-size: 12px;
    margin: 5px;
    text-align: start;
`
S.Submit = styled.button`
    width: 135px;
    height: 35px;
    background-color: #247Bf3;
    border-radius: 10px;
    &:hover{
        background-color: #1D5DB5;
    }
`

S.MoveBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`
S.Move = styled.p`
    color: #247Bf3;
    font-size: 12px;
    padding: 0 25px;
    text-decoration: underline;
    text-align: end;
    &:hover{
        color: #69A2F1;
    }
`

export default S;