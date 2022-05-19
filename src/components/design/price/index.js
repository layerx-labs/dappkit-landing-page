import { InView } from "react-intersection-observer";
import Section from "../section";
import { Coin1, Coin2, Coin3, Coin4, Coin5, Coin6 } from "../../../utils/coins";
import * as Styles from "./styles";

function Price(props) {
  const { id, title, description, blink } = props;

  return (
    <Styles.Wrapper id={id}>
      <div className="coins">
        <InView>
          {({ inView, ref }) => (
            <>
              <div
                ref={ref}
                inView={inView}
                className={inView ? "coin-1 in-view" : "coin-1"}
              >
                <Coin1 />
              </div>
            </>
          )}
        </InView>
        <InView>
          {({ inView, ref }) => (
            <>
              <div
                ref={ref}
                inView={inView}
                className={inView ? "coin-2 in-view" : "coin-2"}
              >
                <Coin2 />
              </div>
            </>
          )}
        </InView>
        <InView>
          {({ inView, ref }) => (
            <>
              <div
                ref={ref}
                inView={inView}
                className={inView ? "coin-3 in-view" : "coin-3"}
              >
                <Coin3 />
              </div>
            </>
          )}
        </InView>
        <InView>
          {({ inView, ref }) => (
            <>
              <div
                ref={ref}
                inView={inView}
                className={inView ? "coin-4 in-view" : "coin-4"}
              >
                <Coin4 />
              </div>
            </>
          )}
        </InView>
        <InView>
          {({ inView, ref }) => (
            <>
              <div
                ref={ref}
                inView={inView}
                className={inView ? "coin-5 in-view" : "coin-5"}
              >
                <Coin5 />
              </div>
            </>
          )}
        </InView>
        <InView>
          {({ inView, ref }) => (
            <>
              <div
                ref={ref}
                inView={inView}
                className={inView ? "coin-6 in-view" : "coin-6"}
              >
                <Coin6 />
              </div>
            </>
          )}
        </InView>
      </div>

      <Section color="green">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{blink}</span> 😉
      </Section>
    </Styles.Wrapper>
  );
}

export default Price;
