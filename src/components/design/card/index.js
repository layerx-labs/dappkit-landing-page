import * as Styles from "./styles";

function Card(props) {
  const { className, color = "light", title, description } = props;

  return (
    <Styles.Wrapper className={className} color={color}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Styles.Wrapper>
  );
}

export default Card;
