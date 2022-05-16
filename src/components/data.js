import styled from "styled-components";
import { rem } from "polished";
import Section from "./design/section";
import Card from "./design/card";
import ButtonLink from "./design/button-link";
import { device } from "../styles/design-tokens";

const Grid = styled.div`
  margin-bottom: ${rem("60px")};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${rem("30px")};

  @media ${device.l} {
    grid-template-columns: repeat(4, 1fr);
  }

  .card {
    padding: ${rem("20px")};
    text-align: center;

    h3 {
      font-size: ${rem("52px")};
    }

    p {
      font-size: ${rem("18px")};
    }
  }

  & + a {
    margin: 0 auto;
  }
`;

function Sdk() {
  const items = [
    {
      title: "Total Transaction Volume",
      value: "###",
    },
    {
      title: "Users",
      value: "3.5k+",
    },
    {
      title: "Transactions",
      value: "###",
    },
    {
      title: "Adopters",
      value: "###",
    },
  ];

  return (
    <Section
      title="An open-source framework"
      subtitle="Made possible by the work of hundreds of supporters."
    >
      <Grid>
        {items &&
          Array.isArray(items) &&
          items.map((item, index) => (
            <Card key={index} title={item.value} description={item.title} />
          ))}
      </Grid>
      <ButtonLink variant="text" url="#0" value="Join us on GitHub" />
    </Section>
  );
}

export default Sdk;
