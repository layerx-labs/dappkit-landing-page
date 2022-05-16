import * as Styles from "./styles";

function ButtonLink(props) {
  const { color = "light", variant, value, url, external = false } = props;

  return (
    <Styles.Button
      variant={variant}
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
