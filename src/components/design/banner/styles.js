import styled from "styled-components";
import { rem } from "polished";
import {
  colors,
  typography,
  sizes,
  device,
} from "../../../styles/design-tokens";

const { bold } = typography;
const { purple500, dark, light } = colors;
const { defaultSize, border } = sizes;

export const Banner = styled.div`
  display: none;
  position: relative;
  border-bottom: ${rem(border, defaultSize)} solid ${dark};
  height: ${rem("52px", defaultSize)};
  background-color: ${dark};
  align-items: center;
  justify-content: center;
  font-family: "Space Mono", monospace;
  font-size: ${rem("16px", defaultSize)};
  font-feature-settings: "ss01" on;
  color: ${light};

  span {
    font-style: italic;
  }

  a {
    position: relative;
    margin: 0 0 ${rem("-2px", defaultSize)} ${rem("20px", defaultSize)};
    border-bottom: ${rem(border, defaultSize)} solid transparent;
    font-weight: ${bold};
    color: ${purple500};
    text-decoration: none;
    transition-duration: 0.3s;

    &:after {
      --iconSize: ${rem("18px", defaultSize)};

      content: "";
      position: absolute;
      margin-left: ${rem("6px", defaultSize)};
      width: var(--iconSize);
      height: 100%;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%237761FF' width='32' height='32' viewbox='0 0 32 32'><path d='M7.044 17.425h14.893l-6.507 6.507c-0.241 0.243-0.39 0.577-0.39 0.947s0.149 0.704 0.39 0.947l-0-0c0.241 0.242 0.574 0.392 0.942 0.392s0.701-0.15 0.942-0.392l8.783-8.783c0.241-0.24 0.39-0.573 0.39-0.94s-0.149-0.699-0.39-0.94l-8.783-8.787c-0.239-0.234-0.567-0.379-0.929-0.379-0.734 0-1.329 0.595-1.329 1.329 0 0.362 0.145 0.69 0.379 0.929l-0-0 6.507 6.507h-14.897c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333v0z' /></svg>");
      background-repeat: no-repeat;
      background-size: var(--iconSize);
      background-position: 0 ${rem("6px", defaultSize)};
    }

    &:hover {
      border-color: ${purple500};
    }
  }

  button {
    position: absolute;
    right: ${rem("18px", defaultSize)};
    border: 0;
    background-color: transparent;
    width: ${rem("14px", defaultSize)};
    height: ${rem("14px", defaultSize)};
    padding: 0;
    cursor: pointer;
    transition-duration: 0.3s;
  }

  @media ${device.s} {
    display: flex;
  }
`;
