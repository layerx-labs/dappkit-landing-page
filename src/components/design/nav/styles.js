import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { light, dark } = colors;

export const Wrapper = styled.div`
  border-bottom: 1px solid ${dark};
`;

export const Nav = styled.div`
  height: ${rem("64px")};
  background-color: ${light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${rem("40px")};

  svg {
    width: ${rem("115px")};
    height: auto;
  }
`;

export const Menu = styled.div`
  ul {
    margin: 0;
    padding: 0;
    display: flex;

    li {
      list-style: none;

      &:not(:last-child) {
        margin-right: ${rem("40px")};
      }
    }
  }
`;
