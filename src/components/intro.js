import styled from "styled-components";
import { InView } from "react-intersection-observer";
import Hero from "./design/hero";

const CoinWrapper = styled.div``;

function Intro({ visible }) {
  return (
    <InView threshold={0.14} onChange={(inView) => visible(inView)}>
      {({ inView, ref }) => (
        <CoinWrapper ref={ref} inView={inView}>
          <Hero
            getStartedUrl="https://docs.dappkit.dev/start-building"
            docsUrl="https://docs.dappkit.dev"
          >
            <h1>
              <span>Your Web3 project</span>
              <br /> <span>3 lines of code away</span>
            </h1>
            <span>
              dappKit is a powerful SDK that allows you to develop beautiful
              web3 apps
            </span>
          </Hero>
        </CoinWrapper>
      )}
    </InView>
  );
}

export default Intro;
