import Section from "./design/section";
import Price from "./design/price";

function Pricing({ id }) {
  return (
    <Section id={id} color="green">
      <Price
        title="Pricing"
        description={[
          <span key={1}>Free to use. Now and forever,</span>,
          <br key={2} />,
          <span key={3}> even with advanced features 😉</span>,
        ]}
      />
    </Section>
  );
}

export default Pricing;
