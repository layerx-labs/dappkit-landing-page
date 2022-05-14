import * as Styles from "./styles";

function Tabs(props) {
  const { tabs = [], content = {}, onClick } = props;

  return (
    <Styles.Wrapper>
      <div>
        <Styles.TabsNav>
          {tabs &&
            Array.isArray(tabs) &&
            tabs.map((tab, index) => (
              <li key={index}>
                <Styles.TabButton
                  active={content.id === index}
                  onClick={() => {
                    onClick(index);
                  }}
                >
                  {tab.name}
                </Styles.TabButton>
              </li>
            ))}
        </Styles.TabsNav>
        <Styles.TabContent>
          <div>
            <span>{content.subtitle}</span>
            <h2>{content.title}</h2>
            <p>{content.content}</p>
            <a href={content.url}>Documentation</a>
          </div>
          <div>code</div>
        </Styles.TabContent>
      </div>
    </Styles.Wrapper>
  );
}

export default Tabs;
