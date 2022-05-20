import * as Styles from "./styles";

function CardLink(props) {
  const { url, img } = props;

  return (
    <Styles.Wrapper>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {img}
      </a>
    </Styles.Wrapper>
  );
}

export default CardLink;
