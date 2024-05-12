import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;
    
      color: rgba(255, 255, 255, 0.87);
      background-color: #2A2D43;]
        
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    body, html {
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
    }
    
    hr {
      border: 0;
      height: 2px;
      background-color: white
    }
`