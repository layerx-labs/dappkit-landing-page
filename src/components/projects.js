import styled from 'styled-components';
import { rem } from 'polished';
import Section from './design/section';
// import ButtonLink from "./design/button-link";
import { Polkamarkets, RealFevr, Lepricon, Onda, Bepro, Subvisual } from '../utils/brands';
import { sizes, colors } from '../styles/variables';

const { defaultSize } = sizes;
const { purple500 } = colors;

const Grid = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    width: ${rem('300px', defaultSize)};
    list-style: none;
    padding: ${rem('30px', defaultSize)};

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
      max-width: ${rem('250px', defaultSize)};
      max-height: ${rem('50px', defaultSize)};
    }
  }

  & + a {
    display: inline-block;
    margin: ${rem('60px', defaultSize)} 0 0 50%;
    transform: translateX(-50%);
    background-color: ${purple500};

    span {
      border: 0;
    }
  }
`;

function Projects() {
  const projects = [
    { url: 'https://polkamarkets.com', img: <Polkamarkets /> },
    { url: 'https://realfevr.com', img: <RealFevr /> },
    { url: 'https://subvisual.com', img: <Subvisual /> },
    { url: 'https://ondastudio.co', img: <Onda /> },
    { url: 'https://lepricon.io', img: <Lepricon /> },
    { url: 'https://bepro.network', img: <Bepro /> },
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
      {/* <ButtonLink url="#0" value="Case Studies" /> */}
    </Section>
  );
}

export default Projects;
