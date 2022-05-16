import Icon from "../icon";
import { DappKit } from "../../../utils/brands";
import { colors } from "../../../styles/design-tokens";
import * as Styles from "./styles";

const { light } = colors;

export function Footer(props) {
  const { social, links, copyright } = props;

  return (
    <Styles.Wrapper>
      <div>
        <Styles.Columns>
          <div>
            <Styles.Social>
              {social &&
                Array.isArray(social) &&
                social.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon fill={light} icon={item.channel} />
                    </a>
                  </li>
                ))}
            </Styles.Social>
          </div>

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
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.value}
                        </a>
                      </li>
                    ))}
                </ul>
              </Styles.ColumnMenu>
            ))}
        </Styles.Columns>
        <Styles.Copyright>
          <DappKit mainColor={light} />
          <span>{copyright}</span>
        </Styles.Copyright>
      </div>
    </Styles.Wrapper>
  );
}
