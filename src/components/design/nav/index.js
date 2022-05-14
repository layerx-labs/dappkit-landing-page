import Icon from "../icon";
import * as Styles from "./styles";
import { DappKit } from "../../../utils/brands";

function Nav(props) {
  const { banner, menu, actionButtonValue, actionButtonUrl, github } = props;

  return (
    <Styles.Wrapper>
      {banner && <div>{banner}</div>}
      <Styles.Nav>
        <DappKit />
        <Styles.Menu>
          <ul>
            {menu &&
              Array.isArray(menu) &&
              menu.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                </li>
              ))}
          </ul>
          <a
            className="get-started--link"
            href={actionButtonUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {actionButtonValue}
          </a>
          <a
            className="github--link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="github" />
          </a>
        </Styles.Menu>
      </Styles.Nav>
    </Styles.Wrapper>
  );
}

export default Nav;
