import styled from "styled-components";
import { rem } from "polished";
import { colors, device } from "../../../styles/design-tokens";

const { light, dark, grey100 } = colors;

export const Wrapper = styled.div`
  background-color: ${dark};
  padding: ${rem("60px")} ${rem("30px")};
  color: ${light};

  > div {
    margin: 0 auto;
    max-width: ${rem("1240px")};
  }
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${rem("50px")};

  .social {
    grid-column: 1 / -1;
  }

  @media ${device.m} {
    grid-template-columns: repeat(auto-fill, ${rem("180px")});
  }

  @media ${device.l} {
    grid-gap: ${rem("100px")};

    .social {
      grid-column: inherit;
    }
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }
`;

export const ColumnMenu = styled.div`
  h4 {
    margin-bottom: ${rem("14px")};
    line-height: 1;
  }

  ul li {
    line-height: 1;

    a {
      color: ${grey100};
      text-decoration: none;
      transition-duration: 0.3s;

      &:hover {
        color: ${light};
      }
    }

    &:not(:last-child) {
      margin-bottom: ${rem("14px")};
    }
  }
`;

export const Social = styled.ul`
  display: flex;

  li {
    border: 1px solid ${light};
    background-color: ${dark};
    width: ${rem("40px")};
    height: ${rem("40px")};
    padding: ${rem("8px")};
    box-shadow: ${rem("4px")} ${rem("4px")} 0 ${light};
    transition-duration: 0.3s;

    &:not(:last-child) {
      margin-right: ${rem("20px")};
    }

    &:hover {
      box-shadow: ${rem("8px")} ${rem("8px")} 0 ${light};
    }
  }
`;

export const Copyright = styled.div`
  margin-top: ${rem("60px")};

  svg {
    width: auto;
    height: ${rem("34px")};
  }

  span {
    margin-top: ${rem("-5px")};
    display: block;
    font-size: ${rem("14px")};
  }
`;
