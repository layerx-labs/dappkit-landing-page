import styled from "styled-components";
import { rem } from "polished";
import { device, sizes } from "../../../styles/design-tokens";

const { defaultSize } = sizes;

export const Wrapper = styled.div`
  position: relative;
  text-align: center;
  font-family: "Space Mono", monospace;
  font-feature-settings: "ss01" on;

  svg {
    /* border: 1px solid red; */
    display: none;
    position: absolute;
    /* width: 100%;
    height: 100%; */

    @media ${device.m} {
      display: inherit;
    }

    &.coin-1 {
      top: 0;
      left: 20%;
      transition-duration: 1s;

      &.in-view {
        top: ${rem("-70px")};
      }
    }

    &.coin-2 {
      top: ${rem("50px")};
      right: 20%;
      transition-duration: 2s;

      &.in-view {
        top: ${rem("-50px")};
      }
    }

    &.coin-3 {
      top: ${rem("60px")};
      left: 0;
      transition-duration: 3s;

      &.in-view {
        top: ${rem("30px")};
      }
    }
  }

  svg {
    /* display: none;
    position: absolute;

    @media ${device.m} {
      display: inherit;
    } */

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
    margin-bottom: ${rem("10px", defaultSize)};
  }

  p {
    margin-bottom: ${rem("10px", defaultSize)};
    font-size: ${rem("28px", defaultSize)};
    line-height: 1.5;
  }

  span {
    font-size: ${rem("20px", defaultSize)};
    font-style: italic;
  }
`;
