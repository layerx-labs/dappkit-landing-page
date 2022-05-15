import * as Styles from "./styles";

function Section(props) {
  const { color = "light", title, subtitle, children } = props;

  return (
    <Styles.Wrapper color={color}>
      <div>
        {(title || subtitle) && (
          <Styles.Header color={color}>
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
