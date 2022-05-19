import styled, { css } from "styled-components";
import { rem } from "polished";
import { colors, sizes } from "../../../styles/design-tokens";

const { light, dark, purple500 } = colors;
const { defaultSize, shadow } = sizes;

export const Button = styled.a`
  position: relative;
  background-color: ${(props) => (props.color === "dark" ? purple500 : dark)};
  font-family: "Space Mono", monospace;
  font-size: ${rem("20px", defaultSize)};
  font-feature-settings: "ss01" on;
  color: ${(props) => (props.color === "dark" ? light : dark)};
  white-space: nowrap;
  text-decoration: none;

  span {
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
    transition-duration: 0.3s;

    &::after {
      --iconSize: ${rem("18px", defaultSize)};

      display: ${(props) => (props.icon ? "none" : "inherit")};
      content: "";
      margin-left: ${rem("10px", defaultSize)};
      width: var(--iconSize);
      height: var(--iconSize);
      background-image: ${(props) =>
        props.color === "dark"
          ? `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' width='32' height='32' viewbox='0 0 32 32'><path d='M32 16L29.5518 18.4889L17.311 6.04443L19.7592 3.55554L32 16Z M29.5519 13.5111L32 16L19.7592 28.4444L17.3111 25.9555L29.5519 13.5111Z M2.17301e-07 17.6348L0 14.115L29.4289 14.115V17.6348L2.17301e-07 17.6348Z' /></svg>")`
          : `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23000000' width='32' height='32' viewbox='0 0 32 32'><path d='M32 16L29.5518 18.4889L17.311 6.04443L19.7592 3.55554L32 16Z M29.5519 13.5111L32 16L19.7592 28.4444L17.3111 25.9555L29.5519 13.5111Z M2.17301e-07 17.6348L0 14.115L29.4289 14.115V17.6348L2.17301e-07 17.6348Z' /></svg>")`};
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
