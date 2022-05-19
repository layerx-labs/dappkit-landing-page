import styled from "styled-components";
import { rem } from "polished";
import { colors, sizes } from "../../../styles/design-tokens";

const { light, dark } = colors;
const { defaultSize } = sizes;

export const Wrapper = styled.header`
  min-height: calc(100vh - ${rem("208px", defaultSize)});
  background-color: ${light};
  padding: ${rem("200px", defaultSize)} ${rem("30px", defaultSize)}
    ${rem("100px", defaultSize)} ${rem("30px", defaultSize)};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: ${rem("20px", defaultSize)};

    @supports (-webkit-text-stroke-width: 1px) and
      (-webkit-text-stroke-color: black) and (text-shadow: inherit) {
      span:first-child {
        color: ${light};
        -webkit-text-stroke-width: ${rem("2px", defaultSize)};
        -webkit-text-stroke-color: ${dark};
        text-shadow: ${rem("8px", defaultSize)} ${rem("8px", defaultSize)} 0
          ${dark};
      }
    }
  }

  > span {
    font-family: "Space Mono", monospace;
    font-feature-settings: "ss01" on;
    font-size: ${rem("24px", defaultSize)};
  }
`;

export const ActionButtons = styled.div`
  margin-top: ${rem("40px", defaultSize)};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    margin: ${rem("10px", defaultSize)};
  }
`;
