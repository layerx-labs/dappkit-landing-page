import { createGlobalStyle } from "styled-components";
import { colors, typography } from "./design-tokens";

const { regular } = typography;
const { grey900 } = colors;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Space Grotesk', Verdana, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: ${regular};
    font-feature-settings: 'ss04' on;
    color: ${grey900};
    overflow-x: hidden;
  }

  h1 {
    font-family: 'Space Mono', monospace;
  }
`;

export default GlobalStyle;
