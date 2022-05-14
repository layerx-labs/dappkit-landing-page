import ButtonLink from "../button-link";
import * as Styles from "./styles";

function Hero() {
  return (
    <Styles.Wrapper>
      <h1>
        <span>Your Web3 project</span>
        <br /> <span>3 lines of code away</span>
      </h1>
      <span>
        dappKit is a powerful SDK that allows you to develop beautiful web3 apps
      </span>
      <Styles.ActionButtons>
        <ButtonLink color="dark" url="#0" value="Get Started" />
        <ButtonLink url="#0" value="Documentation" />
      </Styles.ActionButtons>
    </Styles.Wrapper>
  );
}

export default Hero;
