import styled from "styled-components";
import { rem } from "polished";
import { colors, sizes } from "../../../styles/variables";

const { light, dark } = colors;
const { defaultSize, shadow } = sizes;

export const Wrapper = styled.div`
  position: relative;
  background-color: ${dark};
  width: ${rem("260px", defaultSize)};
  height: ${rem("100px", defaultSize)};
  transition-duration: 0.3s;

  a {
    border: ${rem("2px", defaultSize)} solid ${dark};
    background-color: ${light};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rem("20px", defaultSize)};
    transition-duration: 0.3s;
  }

  &:hover {
    --translate: ${rem(shadow, defaultSize)};

    a {
      transform: translate(var(--translate), var(--translate));
    }
  }
`;
