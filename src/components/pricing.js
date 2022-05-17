import Price from "./design/price";

function Pricing({ id }) {
  return (
    <Price
      id={id}
      title="Pricing"
      description="Free to use. Now and forever!"
      blink="even with advanced features"
    />
  );
}

export default Pricing;
