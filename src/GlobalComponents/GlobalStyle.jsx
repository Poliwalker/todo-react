import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}


    body{
        background-color: #131415;
        width: 100%;
        font-family: 'poppins';

    }
`;

export default GlobalStyle;
