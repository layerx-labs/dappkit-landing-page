import styled, { css } from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { light, dark, grey800, grey900, purple500, green500 } = colors;

export const Wrapper = styled.div`
  background-color: ${light};
  padding: ${rem("100px")} ${rem("30px")};
  color: ${dark};

  > div {
    margin: 0 auto;
    max-width: ${rem("1240px")};
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
    props.color === "green" &&
    css`
      background-color: ${green500};
    `}
`;

export const Header = styled.div`
  margin-bottom: ${rem("60px")};
  text-align: center;

  h2 {
    color: ${(props) => (props.color === "dark" ? light : grey900)};
  }

  span {
    display: inline-block;
    margin-top: ${rem("10px")};
    color: ${(props) => (props.color === "dark" ? light : grey800)};
  }
`;
