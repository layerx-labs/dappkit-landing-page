import styled, { css } from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { light, dark, grey100, grey800, grey900, green500, green900 } = colors;

export const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${dark};
  background-color: ${light};
  padding: ${rem("30px")};
  box-shadow: ${light} ${rem("4px")} ${rem("4px")} 0px -1px,
    ${dark} ${rem("4px")} ${rem("4px")};

  h3 {
    margin-bottom: ${rem("10px")};
    color: ${grey900};
  }

  p {
    color: ${grey800};
  }

  ${(props) =>
    props.color === "dark" &&
    css`
      border: 1px solid ${light};
      background-color: ${dark};
      box-shadow: ${dark} ${rem("4px")} ${rem("4px")} 0px -1px,
        ${light} ${rem("4px")} ${rem("4px")};

      h3 {
        color: ${light};
      }

      p {
        color: ${grey100};

        span {
          border-radius: ${rem("1px")};
          background-color: ${green900};
          padding: 0 ${rem("2px")};
          color: ${green500};
        }
      }
    `}
`;
