import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/design-tokens";

const { green, purple, grey900, black } = colors;

export const Banner = styled.div`
  position: relative;
  border-bottom: 1px solid ${black};
  background-color: ${green};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${rem("10px")} 0;
  font-size: ${rem("14px")};

  a {
    position: relative;
    margin-left: ${rem("20px")};
    border-bottom: 1px solid ${purple};
    padding-bottom: ${rem("4px")};
    color: ${purple};
    text-decoration: none;
    transition-duration: 0.3s;

    &:after {
      --iconSize: ${rem("18px")};

      content: "";
      position: absolute;
      margin-left: ${rem("10px")};
      width: var(--iconSize);
      height: var(--iconSize);
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%237B61FF' width='32' height='32' viewbox='0 0 32 32'><path d='M7.044 17.425h14.893l-6.507 6.507c-0.241 0.243-0.39 0.577-0.39 0.947s0.149 0.704 0.39 0.947l-0-0c0.241 0.242 0.574 0.392 0.942 0.392s0.701-0.15 0.942-0.392l8.783-8.783c0.241-0.24 0.39-0.573 0.39-0.94s-0.149-0.699-0.39-0.94l-8.783-8.787c-0.239-0.234-0.567-0.379-0.929-0.379-0.734 0-1.329 0.595-1.329 1.329 0 0.362 0.145 0.69 0.379 0.929l-0-0 6.507 6.507h-14.897c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333v0z' /></svg>");
      background-repeat: no-repeat;
      background-size: var(--iconSize);
      background-position: 0 ${rem("2px")};
    }

    &:hover {
      border-color: ${grey900};
      color: ${grey900};

      &:after {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23202020' width='32' height='32' viewbox='0 0 32 32'><path d='M7.044 17.425h14.893l-6.507 6.507c-0.241 0.243-0.39 0.577-0.39 0.947s0.149 0.704 0.39 0.947l-0-0c0.241 0.242 0.574 0.392 0.942 0.392s0.701-0.15 0.942-0.392l8.783-8.783c0.241-0.24 0.39-0.573 0.39-0.94s-0.149-0.699-0.39-0.94l-8.783-8.787c-0.239-0.234-0.567-0.379-0.929-0.379-0.734 0-1.329 0.595-1.329 1.329 0 0.362 0.145 0.69 0.379 0.929l-0-0 6.507 6.507h-14.897c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333v0z' /></svg>");
      }
    }
  }

  button {
    position: absolute;
    right: ${rem("10px")};
    border: 0;
    background-color: transparent;
    width: ${rem("24px")};
    height: ${rem("24px")};
    padding: 0;
    opacity: 0.2;
    cursor: pointer;
    transition-duration: 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`;
