import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { light, dark, purple500 } = colors;

export const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${dark};
  background-color: ${light};
  display: flex;
  flex-direction: column;
  padding: ${rem("50px")};
  text-align: center;
  box-shadow: ${purple500} ${rem("4px")} ${rem("4px")} 0px -1px,
    ${dark} ${rem("4px")} ${rem("4px")};

  > div:first-child {
    flex: 1;

    h3 {
      margin-bottom: ${rem("20px")};
      color: ${dark};

      span {
        background-color: ${purple500};
        padding: ${rem("4px")} ${rem("8px")};
      }
    }

    p {
      margin-bottom: ${rem("40px")};
      color: ${dark};

      span {
        color: ${purple500};
      }
    }
  }

  a {
    margin: 0 auto;
  }
`;
