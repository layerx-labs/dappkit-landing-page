import styled from 'styled-components';
import { rem } from 'polished';
import { device, sizes } from '../../../styles/variables';

const { defaultSize } = sizes;

export const Wrapper = styled.div`
  position: relative;
  text-align: center;
  font-family: ${(props) => props.theme.pricingFont};
  font-feature-settings: 'ss01' on;

  .coins div {
    position: absolute;

    &.coin-2,
    &.coin-4,
    &.coin-5,
    &.coin-6 {
      display: none;
    }

    &.coin-1 {
      bottom: ${rem('-140px')};
      right: 5%;
      transition-duration: 1s;

      &.in-view {
        bottom: ${rem('-70px')};
      }
    }

    &.coin-2 {
      top: ${rem('50px')};
      right: 20%;
      transition-duration: 3s;

      &.in-view {
        top: ${rem('-50px')};
      }
    }

    &.coin-3 {
      top: ${rem('60px')};
      left: 0;
      transition-duration: 2s;

      &.in-view {
        top: ${rem('-60px')};
      }
    }

    &.coin-4 {
      top: ${rem('120px')};
      right: 0;
      transition-duration: 1s;

      &.in-view {
        top: ${rem('60px')};
      }
    }

    &.coin-5 {
      bottom: ${rem('-140px')};
      left: 5%;
      transition-duration: 2s;

      &.in-view {
        bottom: ${rem('-70px')};
      }
    }

    &.coin-6 {
      bottom: ${rem('-120px')};
      right: 20%;
      transition-duration: 1s;

      &.in-view {
        bottom: ${rem('-60px')};
      }
    }

    @media ${device.m} {
      &.coin-1 {
        top: 0;
        bottom: inherit;
        left: 20%;
        right: inherit;
        transition-duration: 1s;

        &.in-view {
          top: ${rem('-70px')};
          bottom: inherit;
        }
      }

      &.coin-3 {
        transition-duration: 0.5s;

        &.in-view {
          top: ${rem('30px')};
        }
      }

      &.coin-2,
      &.coin-4,
      &.coin-5,
      &.coin-6 {
        display: inherit;
      }
    }
  }

  h2 {
    margin-bottom: ${rem('10px', defaultSize)};
  }

  p {
    margin-bottom: ${rem('10px', defaultSize)};
    font-size: ${rem('28px', defaultSize)};
    line-height: 1.5;
  }

  span {
    font-size: ${rem('20px', defaultSize)};
    font-style: italic;
  }
`;

export const CoinWrapper = styled.div``;
