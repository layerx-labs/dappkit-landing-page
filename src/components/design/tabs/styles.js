import styled from "styled-components";
import { rem } from "polished";
import { colors, typography } from "../../../styles/design-tokens";

const { green, light, grey900 } = colors;
const { regular, bold } = typography;

export const Wrapper = styled.div`
  background-color: ${green};
  padding: ${rem("100px")} ${rem("30px")};

  > div {
    margin: 0 auto;
    max-width: ${rem("1240px")};
  }
`;

export const TabsNav = styled.ul`
  margin: 0 0 ${rem("60px")};
  padding: 0;
  display: flex;
  justify-content: space-between;

  li {
    list-style: none;
  }
`;

export const TabButton = styled.button`
  border: 0;
  height: ${rem("48px")};
  background-color: ${(props) => (props.active ? grey900 : "transparent")};
  display: flex;
  align-items: center;
  padding: 0;
  font-family: "Space Mono", monospace;
  font-size: ${rem("32px")};
  font-weight: ${(props) => (props.active ? bold : regular)};
  color: ${(props) => (props.active ? light : grey900)};
  white-space: nowrap;
  transition-duration: 0.3s;
  cursor: pointer;
  pointer-events: ${(props) => (props.active ? "none" : "initial")};

  &:hover {
    background-color: ${light};
    color: ${grey900};
    box-shadow: ${rem("4px")} ${rem("4px")} 0 ${grey900};
  }
`;

export const TabContent = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${rem("60px")};
`;
