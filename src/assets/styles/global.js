import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
  }

  body{
    font-size: 16px;
    height: 100%;
  }

  button{
    cursor: pointer;
  }

`;
