import Icon from "../icon";
import * as Styles from "./styles";
import { colors } from "../../../styles/design-tokens";

const { dark } = colors;

function Banner(props) {
  const { value, link, url, onClick } = props;

  return (
    <Styles.Banner>
      <span>{value}</span>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
      <button onClick={onClick}>
        <Icon icon="cross" fill={dark} />
      </button>
    </Styles.Banner>
  );
}

export default Banner;
