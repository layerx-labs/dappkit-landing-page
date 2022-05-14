import * as Styles from "./styles";

function Section(props) {
  const { title, subtitle, children } = props;

  return (
    <Styles.Wrapper>
      <div>
        {(title || subtitle) && (
          <Styles.Header>
            {title && <h2>{title}</h2>}
            {subtitle && <span>{subtitle}</span>}
          </Styles.Header>
        )}

        {children}
      </div>
    </Styles.Wrapper>
  );
}

export default Section;
