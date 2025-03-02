import styled from 'styled-components'
import { flexCenterColumn, flexSpaceCenter } from '../../global/common'

const S = {}

S.Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
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

S.SignUpBox = styled.div`
    width: 335px;
    height: 500px;
    ${flexSpaceCenter}
    flex-direction: column;
    background-color: #383636;
    border-radius: 10px;
`

S.InputBox = styled.div`
    
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
S.Label = styled.p`
    font-size: 12px;
    margin: 5px;
    text-align: start;
`

export default S;