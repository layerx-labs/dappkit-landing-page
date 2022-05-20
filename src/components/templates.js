import styled from "styled-components";
import { rem } from "polished";
import Section from "./design/section";
import CardLink from "./design/card-link";
import { sizes } from "../styles/variables";
import { Nodejs, Nextjs, Angular } from "../utils/brands";

const { defaultSize } = sizes;

const Grid = styled.ul`
  margin: ${rem("-25px", defaultSize)} 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;

  li {
    list-style: none;
    margin: ${rem("25px", defaultSize)};
  }
`;

function Templates({ id }) {
  const templates = [
    {
      name: "Node.js",
      url: "https://stackblitz.com/edit/node-b3cgaa?file=index.js",
      img: <Nodejs />,
    },
    {
      name: "Next.js",
      url: "https://stackblitz.com/edit/nextjs-nzulwe?file=pages/index.js",
      img: <Nextjs />,
    },
    {
      name: "Angular",
      url: "https://github.com/taikai/dappkit-testflight",
      img: <Angular />,
    },
  ];
  return (
    <Section
      id={id}
      title="Project templates"
      subtitle="Start your project with an open-source repository."
    >
      <Grid>
        {templates &&
          Array.isArray(templates) &&
          templates.map((template, index) => (
            <li key={index}>
              <CardLink img={template.img} url={template.url} />
            </li>
          ))}
      </Grid>
    </Section>
  );
}

export default Templates;
