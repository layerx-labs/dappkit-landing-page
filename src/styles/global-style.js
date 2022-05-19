import { createGlobalStyle } from "styled-components";
import { rem } from "polished";
import { colors, typography, device, sizes } from "./design-tokens";

const { regular, bold } = typography;
const { purple500, green500, dark } = colors;
const { defaultSize } = sizes;

const GlobalStyle = createGlobalStyle`
  *, :before, :after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  html {
    font-size: ${defaultSize};
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Space Grotesk', Verdana, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: ${regular};
    font-feature-settings: 'ss04' on;
    line-height: 1.75;
    color: ${dark};
    overflow-x: hidden;
  }

  ::selection {
    background-color: ${purple500};
    color: ${green500};
  }

  h1, h2, h3 {
    margin: 0;
    font-family: "Space Mono", monospace;
    font-weight: ${bold};
    font-feature-settings: 'ss01' on;
    line-height: 1.1;
  }

  h1 {
    font-size: ${rem("50px", defaultSize)};

    @media ${device.m} {
      font-size: ${rem("96px", defaultSize)};
    }
  }

  h2 {
    font-size: ${rem("36px", defaultSize)};
  }

  h3 {
    font-size: ${rem("28px", defaultSize)};
    line-height: 1.5;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: ${bold};
  }

  p {
    margin: 0
  }
`;

export default GlobalStyle;
