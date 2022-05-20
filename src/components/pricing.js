import Price from "./design/price";

function Pricing(props) {
  const { id, comicTheme = false } = props;

  return (
    <Price
      id={id}
      title="Pricing"
      description="Free to use. Now and forever!"
      blink="even with advanced features"
      comicTheme={comicTheme}
    />
  );
}

export default Pricing;
