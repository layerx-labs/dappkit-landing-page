import styled from "styled-components";
import { rem } from "polished";
import Section from "./design/section";
import CardCta from "./design/card-cta";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${rem("60px")};
`;

function Bounties() {
  const bounties = [
    {
      title: [
        "Custom solutions with ",
        <br key={1} />,
        <span key={2}>Bepro Network</span>,
      ],
      description:
        "Create bounties and have a Web3 developer community building the right solution for your projects.",
      ctaValue: "Create Bounty",
      ctaUrl: "#0",
    },
    {
      title: "Start contributing with dappKit and get rewarded",
      description: [
        "Earn ",
        <span key={1}>$BEPRO</span>,
        " Tokens by participating in an open-source project with dappKit.",
      ],
      ctaValue: "Open Bounties",
      ctaUrl: "#0",
    },
  ];

  return (
    <Section color="purple">
      <Grid>
        {bounties &&
          Array.isArray(bounties) &&
          bounties.map((item, index) => (
            <CardCta
              key={index}
              title={item.title}
              description={item.description}
              ctaValue={item.ctaValue}
              ctaUrl={item.ctaUrl}
            />
          ))}
      </Grid>
    </Section>
  );
}

export default Bounties;