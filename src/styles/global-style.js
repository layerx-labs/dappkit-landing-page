import { createGlobalStyle } from "styled-components";
import { rem } from "polished";
import { colors, typography, device, sizes } from "./variables";

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
    font-family: ${(props) => props.theme.defaultFont};
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
    font-family: ${(props) => props.theme.defaultHeadingFont};
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

  .sr-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    width: 1px;
    white-space: nowrap;
  }
`;

export default GlobalStyle;
