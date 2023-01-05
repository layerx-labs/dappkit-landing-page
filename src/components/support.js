import styled from 'styled-components';
import { rem } from 'polished';
import Section from './design/section';
import ButtonLink from './design/button-link';

const Buttons = styled.div`
  display: flex;

  a:not(:last-child) {
    margin-right: ${rem('30px')};
  }
`;

function Support() {
  return (
    <Section
      color="light-purple"
      align="left"
      title="We’re here to help"
      subtitle="Let us know if you have any questions. You can explore the dappKit documentation or ask away on Discord."
    >
      <Buttons>
        <ButtonLink color="dark" url="#0" value="Discord" />
        <ButtonLink url="#0" value="Documentation" />
      </Buttons>
    </Section>
  );
}

export default Support;
