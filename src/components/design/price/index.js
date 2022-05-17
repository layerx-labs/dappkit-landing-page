import Section from "../section";
import { Coin1, Coin2, Coin3, Coin4, Coin5, Coin6 } from "../../../utils/coins";
import * as Styles from "./styles";

function Price(props) {
  const { id, title, description, blink } = props;

  return (
    <Styles.Wrapper>
      <Coin1 />
      <Coin2 />
      <Coin3 />
      <Coin4 />
      <Coin5 />
      <Coin6 />

      <Section id={id} color="green">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{blink}</span> 😉
      </Section>
    </Styles.Wrapper>
  );
}

export default Price;
