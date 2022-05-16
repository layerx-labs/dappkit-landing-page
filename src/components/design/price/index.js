import * as Styles from "./styles";
const dollars = "/images/dollars.png";
const dollarCoin1 = "/images/dollar-coin-1.svg";
const dollarCoin2 = "/images/dollar-coin-2.svg";

function Price(props) {
  const { title, description } = props;

  return (
    <Styles.Wrapper>
      <div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <img src={dollars} alt="Dollar symbols" />
        </div>
      </div>

      <img className="dollar-coin-1" src={dollarCoin1} alt="Dollar symbols" />
      <img className="dollar-coin-2" src={dollarCoin1} alt="Dollar symbols" />
      <img className="dollar-coin-3" src={dollarCoin2} alt="Dollar symbols" />
    </Styles.Wrapper>
  );
}

export default Price;
