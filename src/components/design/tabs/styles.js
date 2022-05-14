import styled from "styled-components";
import { rem } from "polished";
import { colors, typography } from "../../../styles/design-tokens";

const { green, light, grey200, grey900, purple } = colors;
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

export const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${rem("60px")};
`;

export const TabContent = styled.div`
  &.snippet {
    padding: 0 ${rem("4px")} ${rem("4px")};
    overflow: hidden;
  }

  h2 {
    margin: ${rem("16px")} 0 ${rem("10px")};
    font-family: "Space Mono", monospace;
    font-size: ${rem("50px")};
    font-weight: ${bold};
  }

  .subtitle {
    font-size: ${rem("24px")};
    font-family: "Space Mono", monospace;
  }

  p {
    margin-bottom: ${rem("16px")};
  }
`;

export const CodeEditor = styled.div`
  border: 1px solid ${grey900};
  border-radius: ${rem("10px")};
  box-shadow: ${rem("4px")} ${rem("4px")} 0 ${grey900};
`;

export const CodeEditorTabs = styled.div`
  height: ${rem("44px")};
  display: flex;
  border-bottom: 1px solid ${grey900};
`;

export const CodeEditorButton = styled.button`
  flex: 1;
  margin: 0;
  border: 0;
  background-color: ${(props) => (props.active ? purple : light)};
  color: ${(props) => (props.active ? light : grey900)};
  font-weight: ${(props) => (props.active ? bold : regular)};
  font-size: ${rem("16px")};
  cursor: pointer;
  pointer-events: ${(props) => (props.active ? "none" : "initial")};
  transition-duration: 0.3s;

  &:first-child {
    border-radius: ${rem("9px")} 0 0 0;
  }

  &:last-child {
    border-radius: 0 ${rem("9px")} 0 0;
  }

  &:hover {
    background-color: ${grey200};
  }
`;

export const CodeEditorContent = styled.div`
  pre {
    margin: 0;
    line-height: 1.5;

    code {
      overflow-x: scroll;
      border-radius: 0 0 ${rem("9px")} ${rem("9px")};
    }
  }
`;

export const InUse = styled.div`
  margin-bottom: 0px;
  border-radius: 0 0 ${rem("9px")} ${rem("9px")};
  background-color: ${light};
  overflow: hidden;

  img {
    margin-bottom: ${rem("-8px")};
    width: 100%;
    height: auto;
  }
`;
