import styled from "styled-components";
import { rem } from "polished";
import { colors, typography, device, sizes } from "../../../styles/variables";

const { dark, light, grey50 } = colors;
const { regular, bold } = typography;
const { border, defaultSize } = sizes;

export const Wrapper = styled.div`
  border-width: ${rem(border, defaultSize)} 0;
  border-style: solid;
  border-color: ${dark};
  background-color: ${(props) => props.theme.exampleSectionBg};
  padding: ${rem("100px", defaultSize)} ${rem("30px", defaultSize)};

  > div {
    margin: 0 auto;
    max-width: ${rem("1240px", defaultSize)};
  }
`;

export const TabsNav = styled.ul`
  margin: 0 0 ${rem("60px", defaultSize)};
  padding: 0;

  li {
    list-style: none;

    &:not(:last-child) {
      margin-bottom: ${rem("10px", defaultSize)};
    }
  }

  @media ${device.m} {
    display: flex;
    justify-content: space-between;

    li {
      list-style: none;

      &:not(:last-child) {
        margin-bottom: 0;
      }
    }
  }
`;

export const TabButton = styled.button`
  position: relative;
  border: 0;
  height: ${rem("48px", defaultSize)};
  background-color: ${(props) => (props.active ? dark : "transparent")};
  display: flex;
  align-items: center;
  padding: 0;
  font-family: ${(props) => props.theme.exampleTabButtonFont};
  font-size: ${rem("36px", defaultSize)};
  font-weight: ${(props) => (props.active ? bold : regular)};
  font-feature-settings: "ss01" on;
  color: ${(props) => (props.active ? light : dark)};
  white-space: nowrap;
  transition-duration: 0.3s;
  cursor: pointer;
  pointer-events: ${(props) => (props.active ? "none" : "initial")};

  &:after {
    content: "";
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
`;

export const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${rem("30px", defaultSize)};

  @media ${device.m} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.snippet {
    padding: 0 ${rem("8px", defaultSize)} ${rem("8px", defaultSize)};
    overflow: hidden;
  }

  h2 {
    margin: ${rem("5px", defaultSize)} 0 ${rem("20px", defaultSize)};
    font-size: ${rem("44px", defaultSize)};
  }

  .subtitle {
    font-size: ${rem("24px", defaultSize)};
    font-family: ${(props) => props.theme.exampleTabSubtitleFont};
    font-feature-settings: "ss01" on;
    text-transform: uppercase;
  }

  p {
    margin-bottom: ${rem("40px", defaultSize)};
    font-size: ${rem("24px", defaultSize)};
  }

  .button {
    max-width: min-content;
  }
`;

export const CodeEditor = styled.div`
  border: ${rem(border, defaultSize)} solid ${dark};
  border-radius: ${rem("10px", defaultSize)};
  box-shadow: ${rem("8px", defaultSize)} ${rem("8px", defaultSize)} 0 ${dark};
`;

export const CodeEditorTabs = styled.div`
  height: ${rem("44px", defaultSize)};
  display: flex;
  border-bottom: ${rem(border, defaultSize)} solid ${dark};
`;

export const CodeEditorButton = styled.button`
  flex: 1;
  margin: 0;
  border: 0;
  background-color: ${(props) =>
    props.active ? props.theme.editorButtonBgActive : light};
  color: ${(props) => (props.active ? light : dark)};
  font-family: ${(props) => props.theme.editorButtonFont};
  font-size: 1rem;
  font-feature-settings: "ss01" on;
  font-weight: ${bold};
  cursor: pointer;
  pointer-events: ${(props) => (props.active ? "none" : "initial")};
  transition-duration: 0.3s;

  &:first-child {
    border-right: ${rem(border, defaultSize)} solid ${dark};
    border-radius: ${rem("7px", defaultSize)} 0 0 0;
  }

  &:last-child {
    border-radius: 0 ${rem("7px", defaultSize)} 0 0;
  }

  &:hover {
    background-color: ${dark};
    color: ${light};
  }
`;

export const CodeEditorContent = styled.div`
  position: relative;
  border-radius: ${rem("8px", defaultSize)};
  background-color: ${grey50};
  width: 100%;

  > * {
    top: 0;
    width: 100%;
  }

  pre {
    margin: 0;
    font-size: ${rem("16px", defaultSize)};
    line-height: 1.5;

    code {
      border-radius: 0 0 ${rem("7px", defaultSize)} ${rem("7px", defaultSize)};
      background-color: ${grey50};
      overflow: auto;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  @media ${device.m} {
    padding-top: 56.25%;

    > * {
      position: absolute;
    }
  }
`;

export const InUse = styled.div`
  margin-bottom: 0px;
  border-radius: 0 0 ${rem("7px", defaultSize)} ${rem("7px", defaultSize)};
  background-color: ${light};
  overflow: hidden;

  svg {
    margin-bottom: ${rem("-8px", defaultSize)};
    width: 100%;
    height: auto;
  }
`;
