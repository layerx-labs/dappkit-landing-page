import ButtonLink from "../button-link";
import * as Styles from "./styles";

function CardCta(props) {
  const { title, description, ctaUrl, ctaValue } = props;

  return (
    <Styles.Wrapper>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <ButtonLink color="dark" url={ctaUrl} value={ctaValue} />
      </div>
    </Styles.Wrapper>
  );
}

export default CardCta;
