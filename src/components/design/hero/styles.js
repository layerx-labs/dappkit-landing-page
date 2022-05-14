import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { light, dark, grey800 } = colors;

export const Wrapper = styled.div`
  min-height: calc(100vh - ${rem("208px")});
  background-color: ${light};
  padding: 0 ${rem("30px")};
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
  margin-top: ${rem("40px")};
  width: 100%;
  display: flex;
  justify-content: center;

  a:not(:last-child) {
    margin-right: ${rem("20px")};
  }
`;
