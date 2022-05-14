import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { light } = colors;

export const Wrapper = styled.div`
  background-color: ${light};
  padding: ${rem("100px")} ${rem("30px")};

  > div {
    margin: 0 auto;
    max-width: ${rem("1240px")};
  }
`;

export const Header = styled.div`
  margin-bottom: ${rem("60px")};
  text-align: center;

  span {
    display: inline-block;
    margin-top: ${rem("10px")};
  }
`;
