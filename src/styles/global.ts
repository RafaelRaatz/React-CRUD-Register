import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75;
    }

    @media (max-width:720px) {
        font-size: 87.5%
    }
}


body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
}

button {
    cursor: pointer;
}
`;
