import styled from 'styled-components';
import { rem } from 'polished';
import { colors, device, sizes } from '../../../styles/variables';

const { light, dark } = colors;
const { defaultSize, border } = sizes;

export const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  border-bottom: ${rem(border, defaultSize)} solid ${dark};
  z-index: 3;
`;

export const Nav = styled.div`
  height: ${rem('68px', defaultSize)};
  background-color: ${light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${rem('30px', defaultSize)};

  svg.logo {
    margin-top: ${rem('5px', defaultSize)};
    width: auto;
    height: ${rem('40px', defaultSize)};
  }

  @media (min-width: 960px) {
    padding: 0 ${rem('40px', defaultSize)};
  }
`;

export const Menu = styled.div`
  display: none;
  font-family: ${(props) => props.theme.menuFont};
  font-feature-settings: 'ss01' on;

  ul {
    margin: 0;
    padding: 0;
    display: flex;

    li {
      list-style: none;

      a {
        position: relative;
        color: ${dark};
        text-decoration: none;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: ${rem(border, defaultSize)};
          background-color: ${dark};
          transition-duration: 0.3s;
        }

        &:hover {
          &:after {
            width: 100%;
          }
        }
      }

      &:not(:last-child) {
        margin-right: ${rem('40px', defaultSize)};
      }
    }
  }

  a {
    &.get-started--button {
      margin-left: ${rem('30px', defaultSize)};
    }

    &.github--button {
      display: none;
      margin-left: ${rem('20px', defaultSize)};
    }
  }

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
  }

  @media ${device.l} {
    a.github--button {
      display: inherit;
    }
  }
`;

export const HamburgerButton = styled.button`
  border: 0;
  display: block;
  background-color: transparent;
  width: ${rem('30px', defaultSize)};
  padding: 0;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    display: block;
    border-radius: 999px;
    background-color: ${dark};
    height: ${rem('4px', defaultSize)};
    transition: all 200ms ease-in-out;
  }

  &:before {
    box-shadow: 0 ${rem('8px', defaultSize)} 0 ${dark};
    margin-bottom: ${rem('12px', defaultSize)};
  }

  &.opened:before {
    box-shadow: 0 0 0 ${dark};
    transform: translateY(${rem('10px', defaultSize)}) rotate(45deg);
  }

  &.opened:after {
    transform: translateY(${rem('-6px', defaultSize)}) rotate(-45deg);
  }

  @media (min-width: 960px) {
    display: none;
  }
`;

export const Drawer = styled.div`
  position: fixed;
  background-color: ${light};
  width: 100vw;
  height: 0;
  padding: 0 ${rem('30px', defaultSize)};
  overflow-y: hidden;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  ul {
    margin: 0 0 ${rem('60px', defaultSize)} 0;
    padding: 0;
    z-index: 2;

    li {
      list-style: none;
      border-bottom: ${rem(border, defaultSize)} solid ${dark};
      padding-bottom: ${rem('5px', defaultSize)};
      white-space: nowrap;

      &:not(:last-child) {
        margin-bottom: ${rem('20px', defaultSize)};
      }

      a {
        color: ${dark};
        text-decoration: none;
      }
    }

    & + div {
      display: flex;
      flex-direction: column;

      a {
        max-width: min-content;

        &:not(:last-child) {
          margin-bottom: ${rem('20px', defaultSize)};
        }
      }
    }
  }

  &.opened {
    height: 100vh;
    padding: ${rem('120px', defaultSize)} ${rem('30px', defaultSize)};
    overflow-y: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media ${device.m} {
    display: none;
  }
`;
