import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { dark } = colors;

export const Wrapper = styled.div`
  position: relative;
  border: 2px solid ${dark};
  width: ${rem("260px")};
  height: ${rem("100px")};
  transition-duration: 0.3s;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rem("20px")};
  }

  &:hover {
    box-shadow: ${rem("4px")} ${rem("4px")} 0 ${dark};
  }
`;
