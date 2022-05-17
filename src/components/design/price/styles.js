import styled from "styled-components";
import { rem } from "polished";
import { device } from "../../../styles/design-tokens";

export const Wrapper = styled.div`
  position: relative;
  text-align: center;
  font-family: "Space Mono", monospace;

  svg {
    display: none;
    position: absolute;

    @media ${device.m} {
      display: inherit;
    }

    &.coin-1 {
      top: ${rem("-70px")};
      left: 20%;
    }

    &.coin-2 {
      top: ${rem("-50px")};
      right: 20%;
    }

    &.coin-3 {
      top: ${rem("30px")};
      left: 0;
    }

    &.coin-4 {
      top: ${rem("60px")};
      right: 0;
    }

    &.coin-5 {
      bottom: ${rem("-70px")};
      left: 5%;
    }

    &.coin-6 {
      bottom: ${rem("-60px")};
      right: 20%;
    }
  }

  h2 {
    margin-bottom: ${rem("10px")};
  }

  p {
    margin-bottom: ${rem("5px")};
    font-size: ${rem("28px")};
    line-height: 1.5;
  }

  span {
    font-size: ${rem("19px")};
    font-style: italic;
    line-height: 2.25;
  }
`;
