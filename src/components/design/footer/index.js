import ButtonLink from '../button-link';
import { DappKit, DappKitComic } from '../../../utils/brands';
import { colors } from '../../../styles/variables';
import * as Styles from './styles';

const { dark } = colors;

export function Footer(props) {
  const {
    supportTitle,
    supportSubtitle,
    docs,
    community,
    links,
    copyright,
    comicTheme = false,
  } = props;

  return (
    <Styles.Wrapper>
      <div>
        <Styles.Columns>
          <Styles.Support>
            <h2>{supportTitle}</h2>
            <p>{supportSubtitle}</p>
            <div>
              <ButtonLink color="dark" url={community} value="Discord" external />
              <ButtonLink url={docs} value="Documentation" external />
            </div>
          </Styles.Support>

          <Styles.Menu>
            {links &&
              Array.isArray(links) &&
              links.map((column, index) => (
                <Styles.ColumnMenu key={index}>
                  <ul>
                    {column.links &&
                      Array.isArray(column.links) &&
                      column.links.map((link, index) => (
                        <li key={index}>
                          {link.external ? (
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
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
          <div className="copyright">
            {comicTheme ? <DappKitComic /> : <DappKit mainColor={dark} />}
            <span>{copyright}</span>
          </div>
          <Styles.Social>
            <ButtonLink url="https://github.com/taikai/dappkit" icon="github" external />
            <ButtonLink url="https://discord.gg/9aUufhzhfm" icon="discord" external />
            <ButtonLink url="https://twitter.com/bepronet" icon="twitter" external />
          </Styles.Social>
        </Styles.Copyright>
      </div>
    </Styles.Wrapper>
  );
}
