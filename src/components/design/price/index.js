import { InView } from "react-intersection-observer";
import Section from "../section";
import { Coin1, Coin2, Coin3, Coin4, Coin5, Coin6 } from "../../../utils/coins";
import * as Styles from "./styles";

function Price(props) {
  const { id, title, description, blink } = props;

  return (
    <Styles.Wrapper id={id}>
      <InView threshold={0.25}>
        {({ inView, ref, entry }) => (
          <>
            <div ref={ref} inView={inView}>
              <Coin1 className={inView ? "coin-1 in-view" : "coin-1"} />
            </div>
          </>
        )}
      </InView>
      <InView threshold={0.25}>
        {({ inView, ref, entry }) => (
          <>
            <div ref={ref} inView={inView}>
              <Coin2 className={inView ? "coin-2 in-view" : "coin-2"} />
            </div>
          </>
        )}
      </InView>
      <InView threshold={0.25}>
        {({ inView, ref, entry }) => (
          <>
            <div ref={ref} inView={inView}>
              <Coin3 className={inView ? "coin-3 in-view" : "coin-3"} />
            </div>
          </>
        )}
      </InView>

      <Section color="green">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{blink}</span> 😉
      </Section>
    </Styles.Wrapper>
  );
}

export default Price;
