import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { light, dark, grey800 } = colors;

export const Wrapper = styled.header`
  min-height: calc(100vh - ${rem("208px")});
  background-color: ${light};
  padding: ${rem("200px")} ${rem("30px")} ${rem("100px")} ${rem("30px")};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: ${rem("20px")};

    @supports (-webkit-text-stroke-width: 1px) and
      (-webkit-text-stroke-color: black) {
      span:first-child {
        color: ${light};
        -webkit-text-stroke-width: ${rem("1px")};
        -webkit-text-stroke-color: ${dark};
      }
    }
  }

  > span {
    color: ${grey800};
  }
`;

export const ActionButtons = styled.div`
  margin-top: ${rem("30px")};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    margin: ${rem("10px")};
  }
`;
