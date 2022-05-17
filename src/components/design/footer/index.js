import Icon from "../icon";
import ButtonLink from "../button-link";
import { DappKit } from "../../../utils/brands";
import { colors } from "../../../styles/design-tokens";
import * as Styles from "./styles";

const { dark } = colors;

export function Footer(props) {
  const { supportTitle, supportSubtitle, links, social, copyright } = props;

  return (
    <Styles.Wrapper>
      <div>
        <Styles.Columns>
          <Styles.Support>
            <h2>{supportTitle}</h2>
            <p>{supportSubtitle}</p>
            <div>
              <ButtonLink
                color="dark"
                url="https://discord.gg/9aUufhzhfm"
                value="Discord"
                external
              />
              <ButtonLink url="#0" value="Documentation" external />
            </div>
          </Styles.Support>

          <Styles.Menu>
            {links &&
              Array.isArray(links) &&
              links.map((column, index) => (
                <Styles.ColumnMenu key={index}>
                  <h4>{column.title}</h4>
                  <ul>
                    {column.links &&
                      Array.isArray(column.links) &&
                      column.links.map((link, index) => (
                        <li key={index}>
                          {link.external ? (
                            <a
                              href={link.url}
                              target={"_blank"}
                              rel={"noopener noreferrer"}
                            >
                              {link.value}
                            </a>
                          ) : (
                            <a href={link.url}>{link.value}</a>
                          )}
                        </li>
                      ))}
                  </ul>
                </Styles.ColumnMenu>
              ))}
          </Styles.Menu>
        </Styles.Columns>
        <Styles.Copyright>
          <div>
            <DappKit mainColor={dark} />
            <span>{copyright}</span>
          </div>
          <Styles.Social>
            {social &&
              Array.isArray(social) &&
              social.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Icon fill={dark} icon={item.channel} />
                  </a>
                </li>
              ))}
          </Styles.Social>
        </Styles.Copyright>
      </div>
    </Styles.Wrapper>
  );
}
