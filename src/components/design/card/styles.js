import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { light, dark } = colors;

export const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${dark};
  background-color: ${light};
  padding: ${rem("30px")};
  box-shadow: ${light} ${rem("4px")} ${rem("4px")} 0px -1px, ${dark} ${rem(
  "4px"
)} ${rem("4px")};
  }


  h3 {
    margin-bottom: ${rem("10px")};
  }
`;
