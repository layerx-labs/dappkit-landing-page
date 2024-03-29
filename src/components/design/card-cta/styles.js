import styled from 'styled-components';
import { rem } from 'polished';
import { colors, sizes } from '../../../styles/variables';

const { light, dark } = colors;
const { defaultSize, border } = sizes;

export const Wrapper = styled.div`
  position: relative;
  border: ${rem(border, defaultSize)} solid ${dark};
  background-color: ${light};
  display: flex;
  flex-direction: column;
  padding: ${rem('50px', defaultSize)};
  text-align: center;
  box-shadow: ${light} ${rem('10px', defaultSize)} ${rem('10px', defaultSize)} 0
      ${rem('-2px', defaultSize)},
    ${dark} ${rem('10px', defaultSize)} ${rem('10px', defaultSize)};

  > div:first-child {
    flex: 1;

    h3 {
      margin-bottom: ${rem('20px', defaultSize)};
      color: ${dark};

      span {
        background-color: ${(props) => props.theme.cardCtaTitleHighlightBg};
        color: ${(props) => props.theme.cardCtaTitleHighlightColor};
      }
    }

    p {
      margin-bottom: ${rem('40px', defaultSize)};
      color: ${dark};

      span {
        color: ${(props) => props.theme.cardCtaTextHighlightColor};
      }
    }
  }

  a {
    display: inline-block;
    margin: 0 auto;
  }
`;
