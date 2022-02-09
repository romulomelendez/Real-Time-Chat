import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `

    * {
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: #cecece;
        font-family: Open-Sans, Helvetica, Sans-Serif;

    }

`