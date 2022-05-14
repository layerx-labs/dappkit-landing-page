import * as Styles from "./styles";

function Card(props) {
  const { title, description } = props;

  return (
    <Styles.Wrapper>
      <h3>{title}</h3>
      <p>{description}</p>
    </Styles.Wrapper>
  );
}

export default Card;
