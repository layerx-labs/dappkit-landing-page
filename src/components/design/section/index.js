import * as Styles from './styles';

function Section(props) {
  const { id, color = 'light', align = 'center', title, subtitle, children } = props;

  return (
    <Styles.Wrapper id={id} color={color} align={align}>
      <div>
        {(title || subtitle) && (
          <Styles.Header color={color} align={align}>
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
