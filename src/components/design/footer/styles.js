import styled from "styled-components";
import { rem } from "polished";
import { colors, device, sizes, typography } from "../../../styles/variables";

const { light, dark, purple500 } = colors;
const { bold } = typography;
const { defaultSize } = sizes;

export const Wrapper = styled.footer`
  background-color: ${light};
  padding: ${rem("60px", defaultSize)} ${rem("30px", defaultSize)};
  color: ${dark};

  > div {
    margin: 0 auto;
    max-width: ${rem("1240px", defaultSize)};
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }
`;

export const Columns = styled.div`
  @media (min-width: 1080px) {
    display: flex;
  }
`;

export const Support = styled.div`
  flex: 1;
  margin-bottom: ${rem("50px")};

  p {
    margin-top: ${rem("10px", defaultSize)};
    font-family: ${(props) => props.theme.footerSupportSubtitle};
    font-size: ${rem("24px", defaultSize)};
    font-feature-settings: "ss01" on;
    line-height: 1.5;
  }

  div {
    margin-top: ${rem("30px", defaultSize)};
    display: flex;
    flex-wrap: wrap;

    a {
      margin-top: ${rem("15px")};

      &:not(:last-child) {
        margin-right: ${rem("30px")};
      }
    }
  }

  @media (min-width: 1080px) {
    margin-bottom: 0;
  }
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${rem("50px")};
  font-family: ${(props) => props.theme.footerMenuFont};
  font-feature-settings: "ss01" on;

  @media (min-width: 1080px) {
    grid-template-columns: repeat(2, ${rem("180px", defaultSize)});
  }

  @media ${device.l} {
    grid-gap: ${rem("100px")};
  }
`;

export const ColumnMenu = styled.div`
  ul {
    li {
      font-size: ${rem("14px", defaultSize)};

      a {
        color: ${dark};
        text-decoration: none;
        transition-duration: 0.3s;

        &:hover {
          color: ${purple500};
        }
      }

      &:not(:last-child) {
        margin-bottom: ${rem("10px", defaultSize)};
      }
    }
  }
`;

export const Copyright = styled.div`
  margin-top: ${rem("100px", defaultSize)};
  display: flex;
  flex-direction: column;

  > div.copyright {
    flex: 1;
    order: 2;
    margin-top: ${rem("100px", defaultSize)};

    svg {
      width: auto;
      height: ${rem("40px", defaultSize)};
    }

    span {
      margin-top: ${rem("-5px")};
      display: block;
      font-size: ${rem("14px", defaultSize)};

      a {
        color: ${dark};
        font-weight: ${bold};
        text-decoration: none;
        transition-duration: 0.3s;

        &:hover {
          color: ${purple500};
        }
      }
    }
  }

  @media ${device.s} {
    flex-direction: row;
    align-items: flex-end;

    > div.copyright {
      order: 1;
      margin-top: 0;
    }
  }
`;

export const Social = styled.div`
  order: 1;
  display: flex;

  a {
    span {
      width: ${rem("32px", defaultSize)};
      height: ${rem("32px", defaultSize)};

      svg {
        width: ${rem("18px", defaultSize)};
        height: ${rem("18px", defaultSize)};
      }
    }

    &:not(:last-child) {
      margin-right: ${rem("20px", defaultSize)};
    }
  }

  @media ${device.s} {
    order: 2;
  }
`;
