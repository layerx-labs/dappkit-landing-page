import ButtonLink from "../button-link";
import { DappKit } from "../../../utils/brands";
import * as Styles from "./styles";

function Nav(props) {
  const {
    banner,
    menu,
    actionButtonValue,
    actionButtonUrl,
    drawerOpened = false,
    drawerOnClick,
  } = props;

  return (
    <>
      <Styles.Wrapper>
        {banner && <div>{banner}</div>}
        <Styles.Nav>
          <Styles.HamburgerButton
            className={drawerOpened ? "opened" : undefined}
            onClick={drawerOnClick}
            aria-label="Menu"
          />
          <DappKit />
          <Styles.Menu>
            <ul>
              {menu &&
                Array.isArray(menu) &&
                menu.map((item, index) => (
                  <li key={index}>
                    {item.external ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <a href={item.url}>{item.value}</a>
                    )}
                  </li>
                ))}
            </ul>
            <ButtonLink
              className="get-started--button"
              color="dark"
              url={actionButtonUrl}
              value={actionButtonValue}
              external
            />
            <ButtonLink url={actionButtonUrl} icon="github" external />
          </Styles.Menu>
        </Styles.Nav>
      </Styles.Wrapper>
      <Styles.Drawer className={drawerOpened ? "opened" : undefined}>
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
        <ButtonLink color="dark" url="#0" value={actionButtonValue} />
        <ButtonLink url="#0" value="GitHub" />
      </Styles.Drawer>
    </>
  );
}

export default Nav;
