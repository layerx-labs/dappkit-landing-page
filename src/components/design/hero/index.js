import ButtonLink from "../button-link";
import * as Styles from "./styles";

function Hero(props) {
  const { getStartedUrl, docsUrl, children } = props;

  return (
    <Styles.Wrapper>
      {children}
      <Styles.ActionButtons>
        <ButtonLink
          color="dark"
          url={getStartedUrl}
          value="Get Started"
          external
        />
        <ButtonLink url={docsUrl} value="Documentation" external />
      </Styles.ActionButtons>
    </Styles.Wrapper>
  );
}

export default Hero;
