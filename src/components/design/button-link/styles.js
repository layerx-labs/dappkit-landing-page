import styled, { css } from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { light, dark, grey600 } = colors;

export const Button = styled.a`
  position: relative;
  border: 2px solid ${dark};
  width: min-content;
  height: ${rem("48px")};
  background-color: ${(props) => (props.color === "dark" ? dark : light)};
  display: flex;
  align-items: center;
  padding: 0 ${rem("54px")} 0 ${rem("20px")};
  font-family: "Space Mono", monospace;
  font-feature-settings: "ss01" on;
  color: ${(props) => (props.color === "dark" ? light : dark)};
  white-space: nowrap;
  text-decoration: none;
  transition-duration: 0.3s;

  &:after {
    --iconSize: ${rem("24px")};

    content: "";
    position: absolute;
    right: ${rem("20px")};
    width: var(--iconSize);
    height: var(--iconSize);
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23${(
      props
    ) =>
      props.color === "dark"
        ? "ffffff"
        : "000000"}' width='32' height='32' viewbox='0 0 32 32'><path d='M7.044 17.425h14.893l-6.507 6.507c-0.241 0.243-0.39 0.577-0.39 0.947s0.149 0.704 0.39 0.947l-0-0c0.241 0.242 0.574 0.392 0.942 0.392s0.701-0.15 0.942-0.392l8.783-8.783c0.241-0.24 0.39-0.573 0.39-0.94s-0.149-0.699-0.39-0.94l-8.783-8.787c-0.239-0.234-0.567-0.379-0.929-0.379-0.734 0-1.329 0.595-1.329 1.329 0 0.362 0.145 0.69 0.379 0.929l-0-0 6.507 6.507h-14.897c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333v0z' /></svg>");
    background-repeat: no-repeat;
    background-size: var(--iconSize);
  }

  &:hover {
    box-shadow: ${rem("4px")} ${rem("4px")} 0
      ${(props) => (props.color === "dark" ? grey600 : dark)};
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
