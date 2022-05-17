import styled from "styled-components";
import { rem } from "polished";
import { colors, device } from "../../../styles/design-tokens";

const { light, dark } = colors;

export const Wrapper = styled.footer`
  background-color: ${light};
  padding: ${rem("60px")} ${rem("30px")};
  color: ${dark};

  > div {
    margin: 0 auto;
    max-width: ${rem("1240px")};
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
    margin-top: ${rem("10px")};
    font-family: "Space Mono", monospace;
    font-size: ${rem("24px")};
    line-height: 1.5;
  }

  div {
    margin-top: ${rem("25px")};
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
  font-family: "Space Mono", monospace;

  @media (min-width: 1080px) {
    grid-template-columns: repeat(2, ${rem("180px")});
  }

  @media ${device.l} {
    grid-gap: ${rem("100px")};
  }
`;

export const ColumnMenu = styled.div`
  h4 {
    margin-bottom: ${rem("24px")};
    line-height: 1;
  }

  ul li {
    line-height: 1;

    a {
      border-bottom: 0;
      color: ${dark};
      text-decoration: none;
      transition-duration: 0.3s;

      &:hover {
        border-bottom: 1px solid ${dark};
      }
    }

    &:not(:last-child) {
      margin-bottom: ${rem("14px")};
    }
  }
`;

export const Copyright = styled.div`
  margin-top: ${rem("60px")};
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
    order: 2;
    margin-top: ${rem("50px")};

    svg {
      width: auto;
      height: ${rem("34px")};
    }

    span {
      margin-top: ${rem("-5px")};
      display: block;
      font-size: ${rem("14px")};
    }
  }

  @media ${device.s} {
    flex-direction: row;
    align-items: flex-end;

    > div {
      order: 1;
      margin-top: 0;
    }
  }
`;

export const Social = styled.ul`
  order: 1;
  display: flex;

  li {
    border: 1px solid ${dark};
    background-color: ${light};
    width: ${rem("40px")};
    height: ${rem("40px")};
    padding: ${rem("8px")};
    box-shadow: ${rem("4px")} ${rem("4px")} 0 ${dark};
    transition-duration: 0.3s;

    &:not(:last-child) {
      margin-right: ${rem("20px")};
    }

    &:hover {
      box-shadow: ${rem("8px")} ${rem("8px")} 0 ${dark};
    }
  }

  @media ${device.s} {
    order: 2;
  }
`;
