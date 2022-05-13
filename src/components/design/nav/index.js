import Icon from "../icon";
import * as Styles from "./styles";
import { colors } from "../../../styles/design-tokens";
import { DappKit } from "../../../utils/brands";

const { grey900 } = colors;

function Nav(props) {
  const { banner } = props;

  return (
    <Styles.Wrapper>
      {banner && <div>{banner}</div>}
      <Styles.Nav>
        <DappKit />
        <Styles.Menu>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </Styles.Menu>
      </Styles.Nav>
    </Styles.Wrapper>
  );
}

export default Nav;
