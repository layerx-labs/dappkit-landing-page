import styled from "styled-components";
import { rem } from "polished";
import { typography } from "../../../styles/design-tokens";

const { medium } = typography;

export const Wrapper = styled.div`
  position: relative;

  > div {
    margin: 0 auto;
    max-width: 800px;
    display: flex;

    > div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &:first-child {
        padding-right: ${rem("30px")};

        h2 {
          margin-bottom: ${rem("10px")};
        }

        p {
          span {
            &:first-child {
              font-size: ${rem("29px")};
              font-weight: ${medium};
            }

            &:last-child {
              font-size: ${rem("19px")};
              line-height: 2.25;
            }
          }
        }
      }

      &:last-child {
        img {
          position: absolute;
          width: auto;
          height: 200%;
        }
      }
    }
  }

  > img {
    position: absolute;

    &.dollar-coin-1 {
      top: 0;
      margin-top: ${rem("-160px")};
    }

    &.dollar-coin-2 {
      bottom: 0;
      left: ${rem("50px")};
      margin-bottom: ${rem("-180px")};
    }

    &.dollar-coin-3 {
      top: 0;
      right: 0;
      margin-top: ${rem("-210px")};
    }
  }
`;
