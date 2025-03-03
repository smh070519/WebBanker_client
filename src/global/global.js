import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}

  @font-face {
    src: url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap') format('woff2');
    font-family: "Rowdies", serif;
    font-weight: 300;
    font-style: normal;
}

  * {
    box-sizing: border-box;
    letter-spacing: -0.4px;
    text-decoration: none;
    color: #fff;
    font-family: 'Rowdies' !important;
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