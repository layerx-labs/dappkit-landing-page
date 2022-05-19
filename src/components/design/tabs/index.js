import { useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "../../../../node_modules/highlight.js/styles/github.css";
import ButtonLink from "../button-link";
import * as Styles from "./styles";

hljs.registerLanguage("javascript", javascript);

function Tabs(props) {
  const { tabs = [], content = {}, onClick } = props;
  const [codeEditorTab, setCodeEditorTab] = useState("code");

  useEffect(() => {
    hljs.initHighlighting();
  }, [codeEditorTab]);

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
        <Styles.TabContainer>
          <Styles.TabContent>
            <span className="subtitle">{content.subtitle}</span>
            <h2>{content.title}</h2>
            <p>{content.content}</p>
            <ButtonLink color="dark" url={content.url} value="Documentation" />
          </Styles.TabContent>
          <Styles.TabContent className="snippet">
            <Styles.CodeEditor>
              <Styles.CodeEditorTabs>
                <Styles.CodeEditorButton
                  active={codeEditorTab === "code"}
                  onClick={() => setCodeEditorTab("code")}
                >
                  Code
                </Styles.CodeEditorButton>
                <Styles.CodeEditorButton
                  active={codeEditorTab === "inUse"}
                  onClick={() => setCodeEditorTab("inUse")}
                >
                  In use
                </Styles.CodeEditorButton>
              </Styles.CodeEditorTabs>
              <Styles.CodeEditorContent>
                {codeEditorTab === "code" && (
                  <pre>
                    <code className="js">{`${content.snippet}`}</code>
                  </pre>
                )}
                {codeEditorTab === "inUse" && (
                  <Styles.InUse>
                    <img src={content.img} alt={content.title} />
                  </Styles.InUse>
                )}
              </Styles.CodeEditorContent>
            </Styles.CodeEditor>
          </Styles.TabContent>
        </Styles.TabContainer>
      </div>
    </Styles.Wrapper>
  );
}

export default Tabs;
