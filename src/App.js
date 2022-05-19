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

function App() {
  return (
    <>
      <NavMenu />
      <Intro />
      <Examples />
      <Sdk />
      <Features id="features" />
      <Templates id="templates" />
      <Bounties />
      <Pricing id="pricing" />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
