import styled from "styled-components";
import { rem } from "polished";
import Section from "./design/section";
import Card from "./design/card";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: ${rem("30px")};
`;

function Sdk() {
  const items = [
    {
      title: "Easy setup and user-friendly documentation",
      description:
        "With generated documentation from source and a Gitbook documentation maintained by the community, we have it all.",
    },
    {
      title: "Less time researching",
      description:
        "We follow the standards and provide an easy interactable one-stop-shop for all your contract needs.",
    },
    {
      title: "Web3 features integration with just a few lines of code",
      description:
        "We made dappKit because we also felt the pain of repeating code when interacting with the blockchain.",
    },
    {
      title: "Simple integration with any smart contract",
      description:
        "The base of dappKit is an extensible model that can interact with any provided Application Binary Interface.",
    },
  ];

  return (
    <Section
      title="The only SDK you’ll ever need"
      subtitle="With the dappKit, you can build Web3 integrations in a matter of minutes. We mean it."
    >
      <Grid>
        {items &&
          Array.isArray(items) &&
          items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
      </Grid>
    </Section>
  );
}

export default Sdk;
