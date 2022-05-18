import styled, { css } from "styled-components";
import { rem } from "polished";
import { colors, sizes } from "../../../styles/design-tokens";

const { light, dark, grey600 } = colors;
const { defaultSize, shadow } = sizes;

export const Button = styled.a`
  position: relative;
  background-color: ${(props) => (props.color === "dark" ? grey600 : dark)};
  font-family: "Space Mono", monospace;
  font-size: ${rem("20px", defaultSize)};
  font-feature-settings: "ss01" on;
  color: ${(props) => (props.color === "dark" ? light : dark)};
  white-space: nowrap;
  text-decoration: none;

  span {
    transition-duration: 0.3s;
    border: ${rem("2px", defaultSize)} solid ${dark};
    background-color: ${(props) => (props.color === "dark" ? dark : light)};
    width: ${(props) =>
      props.icon ? rem("48px", defaultSize) : "min-content"};
    height: ${rem("48px", defaultSize)};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props) =>
      props.icon
        ? 0
        : `0 ${rem("16px", defaultSize)} 0 ${rem("20px", defaultSize)}`};

    &::after {
      --iconSize: ${rem("20px", defaultSize)};

      display: ${(props) => (props.icon ? "none" : "inherit")};
      content: "";
      margin-left: ${rem("6px", defaultSize)};
      width: var(--iconSize);
      height: var(--iconSize);
      background-image: ${(props) =>
        props.color === "dark"
          ? `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' width='32' height='32' viewbox='0 0 32 32'><path d='M7.044 17.425h14.893l-6.507 6.507c-0.241 0.243-0.39 0.577-0.39 0.947s0.149 0.704 0.39 0.947l-0-0c0.241 0.242 0.574 0.392 0.942 0.392s0.701-0.15 0.942-0.392l8.783-8.783c0.241-0.24 0.39-0.573 0.39-0.94s-0.149-0.699-0.39-0.94l-8.783-8.787c-0.239-0.234-0.567-0.379-0.929-0.379-0.734 0-1.329 0.595-1.329 1.329 0 0.362 0.145 0.69 0.379 0.929l-0-0 6.507 6.507h-14.897c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333v0z' /></svg>")`
          : `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23000000' width='32' height='32' viewbox='0 0 32 32'><path d='M7.044 17.425h14.893l-6.507 6.507c-0.241 0.243-0.39 0.577-0.39 0.947s0.149 0.704 0.39 0.947l-0-0c0.241 0.242 0.574 0.392 0.942 0.392s0.701-0.15 0.942-0.392l8.783-8.783c0.241-0.24 0.39-0.573 0.39-0.94s-0.149-0.699-0.39-0.94l-8.783-8.787c-0.239-0.234-0.567-0.379-0.929-0.379-0.734 0-1.329 0.595-1.329 1.329 0 0.362 0.145 0.69 0.379 0.929l-0-0 6.507 6.507h-14.897c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333v0z' /></svg>")`};
      background-repeat: no-repeat;
      background-size: var(--iconSize);
    }

    svg {
      width: ${rem("24px", defaultSize)};
      height: ${rem("24px", defaultSize)};
      fill: ${dark};
    }
  }

  &:hover {
    --translate: ${rem(shadow, defaultSize)};

    span {
      transform: translate(var(--translate), var(--translate));
    }
  }

  ${(props) =>
    props.variant === "text" &&
    css`
      border: 0;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    `}
`;
