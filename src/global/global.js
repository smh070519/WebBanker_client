import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}

  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }

  * {
    box-sizing: border-box;
    letter-spacing: -0.4px;
    text-decoration: none;
    color: #fff;
    font-family: 'Pretendard-Regular' !important;
  }

  body {
    line-height: 1.3;
  }

  button {
    cursor: pointer;
    border: 0px;
  }

  


`

export default GlobalStyle;