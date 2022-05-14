import * as Styles from "./styles";

function ButtonLink(props) {
  const { color = "light", value, url, external = false } = props;

  return (
    <Styles.Button
      color={color}
      href={url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span>{value}</span>
    </Styles.Button>
  );
}

export default ButtonLink;
