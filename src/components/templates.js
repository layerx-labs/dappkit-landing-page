import styled from "styled-components";
import { rem } from "polished";
import Section from "./design/section";
import CardLink from "./design/card-link";
import { Nodejs, Nextjs, Angular } from "../utils/brands";

const Grid = styled.ul`
  margin: ${rem("-20px")} 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;

  li {
    list-style: none;
    margin: ${rem("20px")};
  }
`;

function Templates() {
  const templates = [
    { name: "Node.js", url: "#0", img: <Nodejs /> },
    { name: "Next.js", url: "#0", img: <Nextjs /> },
    { name: "Angular", url: "#0", img: <Angular /> },
  ];
  return (
    <Section
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
