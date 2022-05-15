import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { light, dark, grey800, grey900 } = colors;

export const Wrapper = styled.div`
  background-color: ${(props) => (props.color === "dark" ? dark : light)};
  padding: ${rem("100px")} ${rem("30px")};
  color: ${(props) => (props.color === "dark" ? light : dark)};

  > div {
    margin: 0 auto;
    max-width: ${rem("1240px")};
  }
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
