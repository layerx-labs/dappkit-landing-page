import styled from "styled-components";
import { rem } from "polished";
import { colors, device, sizes } from "../../../styles/design-tokens";

const { light, dark } = colors;
const { defaultSize, border } = sizes;

export const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  border-bottom: ${rem(border, defaultSize)} solid ${dark};
  z-index: 3;
`;

export const Nav = styled.div`
  height: ${rem("68px", defaultSize)};
  background-color: ${light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${rem("40px", defaultSize)};

  svg.logo {
    margin-top: ${rem("5px", defaultSize)};
    width: auto;
    height: ${rem("40px", defaultSize)};
  }
`;

export const Menu = styled.div`
  display: none;
  font-family: "Space Mono", monospace;
  font-feature-settings: "ss01" on;

  a {
    color: ${dark};
    text-decoration: none;
    transition-duration: 0.3s;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;

    li {
      list-style: none;

      a {
        border-bottom: ${rem(border, defaultSize)} solid transparent;

        &:hover {
          border-color: ${dark};
        }
      }

      &:not(:last-child) {
        margin-right: ${rem("40px", defaultSize)};
      }
    }
  }

  > a {
    border: ${rem("2px", defaultSize)} solid ${dark};
    height: ${rem("48px", defaultSize)};
    display: flex;
    align-items: center;
    padding: 0 ${rem("20px", defaultSize)};
    font-family: "Space Mono", monospace;
    font-feature-settings: "ss01" on;
    font-size: ${rem("20px", defaultSize)};
    white-space: nowrap;

    &.get-started--link {
      margin: 0 ${rem("20px", defaultSize)} 0 ${rem("30px", defaultSize)};
      background-color: ${dark};
      padding-right: ${rem("12px", defaultSize)};
      color: ${light};

      &:after {
        --iconSize: ${rem("18px", defaultSize)};

        content: "";
        margin-left: ${rem("6px", defaultSize)};
        width: var(--iconSize);
        height: var(--iconSize);
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' width='32' height='32' viewbox='0 0 32 32'><path d='M7.044 17.425h14.893l-6.507 6.507c-0.241 0.243-0.39 0.577-0.39 0.947s0.149 0.704 0.39 0.947l-0-0c0.241 0.242 0.574 0.392 0.942 0.392s0.701-0.15 0.942-0.392l8.783-8.783c0.241-0.24 0.39-0.573 0.39-0.94s-0.149-0.699-0.39-0.94l-8.783-8.787c-0.239-0.234-0.567-0.379-0.929-0.379-0.734 0-1.329 0.595-1.329 1.329 0 0.362 0.145 0.69 0.379 0.929l-0-0 6.507 6.507h-14.897c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333v0z' /></svg>");
        background-repeat: no-repeat;
        background-size: var(--iconSize);
      }

      &:hover {
        box-shadow: ${rem("6px")} ${rem("6px")} 0 ${dark};
      }
    }

    &.github--link {
      --size: ${rem("22px")};

      &:hover {
        box-shadow: ${rem("6px")} ${rem("6px")} 0 ${dark};
      }

      svg {
        width: var(--size);
        height: var(--size);
        fill: ${dark};
      }
    }
  }

  @media ${device.m} {
    display: flex;
    align-items: center;
  }
`;

export const HamburgerButton = styled.button`
  border: 0;
  display: block;
  background-color: transparent;
  width: ${rem("30px")};
  padding: 0;
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    display: block;
    border-radius: 999px;
    background-color: ${dark};
    height: ${rem("4px")};
    transition: all 200ms ease-in-out;
  }

  &:before {
    box-shadow: 0 ${rem("8px")} 0 ${dark};
    margin-bottom: ${rem("12px")};
  }

  &.opened:before {
    box-shadow: 0 0 0 ${dark};
    transform: translateY(${rem("10px")}) rotate(45deg);
  }

  &.opened:after {
    transform: translateY(${rem("-6px")}) rotate(-45deg);
  }

  @media ${device.m} {
    display: none;
  }
`;

export const Drawer = styled.div`
  position: fixed;
  background-color: ${light};
  width: 100vw;
  height: 0;
  padding: 0 ${rem("30px", defaultSize)};
  overflow-y: hidden;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  ul {
    margin: 0 0 ${rem("60px", defaultSize)} 0;
    padding: 0;
    z-index: 2;

    li {
      list-style: none;
      border-bottom: ${rem(border, defaultSize)} solid ${dark};
      padding-bottom: ${rem("5px", defaultSize)};
      white-space: nowrap;

      &:not(:last-child) {
        margin-bottom: ${rem("20px", defaultSize)};
      }

      a {
        color: ${dark};
        text-decoration: none;
      }
    }
  }

  &.opened {
    height: 100vh;
    padding: ${rem("150px", defaultSize)} ${rem("30px", defaultSize)};
    overflow-y: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  > a:not(:last-child) {
    margin-bottom: ${rem("14px", defaultSize)};
  }

  @media ${device.m} {
    display: none;
  }
`;
