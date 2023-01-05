import Icon from '../icon';
import * as Styles from './styles';

function ButtonLink(props) {
  const {
    className = 'button',
    color = 'light',
    variant,
    value,
    icon,
    url,
    external = false,
  } = props;

  return (
    <Styles.Button
      className={className}
      variant={variant}
      color={color}
      icon={icon}
      href={url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <span>{icon ? <Icon icon={icon} /> : value}</span>
    </Styles.Button>
  );
}

export default ButtonLink;
