import { useRef } from "react";
import styled from "styled-components";
import { Parallax } from "@react-spring/parallax";
import NavMenu from "./components/nav-menu";
import Intro from "./components/intro";
import Examples from "./components/examples";
import Sdk from "./components/sdk";
import Features from "./components/features";
import Templates from "./components/templates";
import Bounties from "./components/bounties";
import Pricing from "./components/pricing";
import Projects from "./components/projects";
import Footer from "./components/footer";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  > div > div {
    overflow: initial !important;
  }
`;

function App() {
  const parallax = useRef(null);
  return (
    <Wrapper>
      <NavMenu />
      <Parallax ref={parallax} pages={0}>
        <Intro />
        <Examples />
        <Sdk />
        <Features id="features" />
        <Templates id="templates" />
        <Bounties />
        <Pricing id="pricing" />
        <Projects />
        <Footer />
      </Parallax>
    </Wrapper>
  );
}

export default App;
