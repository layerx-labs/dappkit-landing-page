import Hero from "./design/hero";

function Intro() {
  return (
    <Hero
      getStartedUrl="https://docs.dappkit.dev/start-building"
      docsUrl="https://docs.dappkit.dev"
    >
      <h1>
        <span>Your Web3 project</span>
        <br /> <span>3 lines of code away</span>
      </h1>
      <span>
        dappKit is a powerful SDK that allows you to develop beautiful web3 apps
      </span>
    </Hero>
  );
}

export default Intro;
