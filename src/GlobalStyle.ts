import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
       height: 100%;
       margin: 0px;
       padding: 0px;
       font-family: 'Montserrat';
       background-color: #F9F9FB;
    }

    input, textarea, select { font-family: inherit; }

    #root {
        height: 100%;
        padding-right: 0.5rem;
    }

    .MuiFormControl-root,
    .MuiInputBase-root {
        width: 100% !important;
    }
`

export default GlobalStyle
