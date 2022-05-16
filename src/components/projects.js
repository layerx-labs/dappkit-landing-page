import styled from "styled-components";
import { rem } from "polished";
import Section from "./design/section";
import ButtonLink from "./design/button-link";
import { Polkamarkets, RealFevr, DappKit } from "../utils/brands";
import { device } from "../styles/design-tokens";

const Grid = styled.ul`
  margin: 0 0 ${rem("60px")} 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${rem("30px")};

  @media ${device.s} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.m} {
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    list-style: none;
    padding: ${rem("30px")};

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
      max-width: ${rem("250px")};
      max-height: ${rem("50px")};
    }
  }

  & + a {
    margin: 0 auto;
  }
`;

function Projects() {
  const projects = [
    { url: "#0", img: <Polkamarkets /> },
    { url: "#0", img: <RealFevr /> },
    { url: "#0", img: <DappKit mainColor="white" /> },
    { url: "#0", img: <DappKit mainColor="white" /> },
    { url: "#0", img: <DappKit mainColor="white" /> },
    { url: "#0", img: <DappKit mainColor="white" /> },
  ];

  return (
    <Section color="dark" title="Projects built with dappKit">
      <Grid>
        {projects &&
          Array.isArray(projects) &&
          projects.map((project, index) => (
            <li key={index}>
              <a href={project.url}>{project.img}</a>
            </li>
          ))}
      </Grid>
      <ButtonLink url="#0" value="Case Studies" />
    </Section>
  );
}

export default Projects;
