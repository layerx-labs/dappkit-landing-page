import styled, { css } from "styled-components";
import { rem } from "polished";
import { sizes, colors } from "../../../styles/design-tokens";

const { defaultSize, border } = sizes;
const { light, dark, purple200, purple500, green500 } = colors;

export const Wrapper = styled.div`
  background-color: ${light};
  padding: ${rem("100px", defaultSize)} ${rem("30px", defaultSize)};
  color: ${dark};
  border-bottom: ${rem(border, defaultSize)} solid ${dark};

  > div {
    margin: 0 auto;
    max-width: ${rem("1240px", defaultSize)};
  }

  ${(props) =>
    props.color === "dark" &&
    css`
      background-color: ${dark};
      color: ${light};
    `}

  ${(props) =>
    props.color === "purple" &&
    css`
      background-color: ${purple500};
    `}

    ${(props) =>
    props.color === "light-purple" &&
    css`
      background-color: ${purple200};
    `}

  ${(props) =>
    props.color === "green" &&
    css`
      background-color: ${green500};
    `}
`;

export const Header = styled.div`
  margin-bottom: ${rem("60px", defaultSize)};
  text-align: ${(props) => (props.align === "left" ? "left" : "center")};

  h2 {
    color: ${(props) => (props.color === "dark" ? light : dark)};
  }

  span {
    display: inline-block;
    margin-top: ${rem("20px", defaultSize)};
    font-size: ${rem("20px", defaultSize)};
    font-family: "Space Mono", monospace;
    font-feature-settings: "ss01" on;
    color: ${(props) => (props.color === "dark" ? light : dark)};
  }
`;
