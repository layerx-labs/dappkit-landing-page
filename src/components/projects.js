import styled from "styled-components";
import { rem } from "polished";
import Section from "./design/section";
import ButtonLink from "./design/button-link";
import { Polkamarkets, RealFevr, Lepricon, Bepro } from "../utils/brands";
import { device, sizes, colors } from "../styles/design-tokens";

const { defaultSize } = sizes;
const { grey600 } = colors;

const Grid = styled.ul`
  margin: 0 0 ${rem("60px", defaultSize)} 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${"" /* grid-template-columns: 1fr; */}

  @media ${device.s} {
    ${"" /* grid-template-columns: repeat(2, 1fr); */}
  }

  @media ${device.m} {
    ${"" /* grid-template-columns: repeat(3, 1fr); */}
  }

  li {
    width: ${rem("300px", defaultSize)};
    list-style: none;
    padding: ${rem("30px", defaultSize)};

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    svg {
      width: 100%;
      height: 100%;
      max-width: ${rem("250px", defaultSize)};
      max-height: ${rem("50px", defaultSize)};
    }
  }

  & + a {
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
    background-color: ${grey600};
  }
`;

function Projects() {
  const projects = [
    { url: "#0", img: <Polkamarkets /> },
    { url: "#0", img: <RealFevr /> },
    { url: "#0", img: <Lepricon /> },
    { url: "#0", img: <Bepro /> },
  ];

  return (
    <Section color="dark" title="Projects built with dappKit">
      <Grid>
        {projects &&
          Array.isArray(projects) &&
          projects.map((project, index) => (
            <li key={index}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.img}
              </a>
            </li>
          ))}
      </Grid>
      <ButtonLink url="#0" value="Case Studies" />
    </Section>
  );
}

export default Projects;
