import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Open Sans', 'Roboto';
    background-color: #fff;
    min-height: 100vh;
    overflow: hidden;
  }
`

export default GlobalStyle