import icons from "./icons";

function Icon(props) {
  const { fill, icon, className = "icon", style } = props;

  return (
    <svg viewBox="0 0 32 32" className={className} style={style}>
      <path style={{ fill }} d={icons[icon]} />
    </svg>
  );
}

export default Icon;
