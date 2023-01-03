import styled from 'styled-components';
import { rem } from 'polished';
import Section from './design/section';
import Card from './design/card';
import { sizes, device } from '../styles/variables';

const { defaultSize } = sizes;

const Grid = styled.div`
  margin: 0 ${rem('-30px', defaultSize)};
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${rem('30px', defaultSize)};
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  scroll-snap-type: x mandatory;
  scroll-padding-left: ${rem('60px', defaultSize)};

  &::-webkit-scrollbar {
    display: none;
  }

  &:before,
  &:after {
    content: '';
    width: ${rem('15px', defaultSize)};
  }

  > div {
    width: calc(100vw - ${rem('120px', defaultSize)});
    scroll-snap-align: start;
  }

  @media ${device.s} {
    > div {
      width: calc(100vw - ${rem('300px', defaultSize)});
    }
  }

  @media ${device.m} {
    margin: 0;
    display: grid;
    grid-auto-flow: inherit;
    grid-template-columns: repeat(12, 1fr);
    overflow: inherit;

    &:before,
    &:after {
      content: inherit;
      width: 0;
    }

    > div {
      width: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &:first-child {
        grid-column: 1 / 6;
        grid-row: 1 / 2;
      }

      &:nth-child(2) {
        grid-column: 6 / 13;
        grid-row: 1 / 2;
      }

      &:nth-child(3) {
        grid-column: 1 / 8;
        grid-row: 2 / 3;
      }

      &:nth-child(4) {
        grid-column: 8 / 13;
        grid-row: 2 / 3;
      }

      &:nth-child(5) {
        grid-column: 1 / 5;
        grid-row: 3 / 4;
      }

      &:last-child {
        grid-column: 5 / 13;
        grid-row: 3 / 4;
      }
    }
  }
`;

function Features({ id }) {
  const items = [
    {
      title: 'Connect to an EVM Blockchain node in 3 lines of code',
      description: [
        'Connecting is as easy as providing a RPC Url and (optionally) a private key to the ',
        <span key={1}>WebConnection</span>,
        ' and calling a ',
        <span key={2}>connect</span>,
        ' method.',
      ],
    },
    {
      title: 'Interact with EVM Smart Contract methods and public data',
      description: [
        'The ',
        <span key={1}>Model</span>,
        ' class provides two important methods, ',
        <span key={2}>sendTx</span>,
        ' and ',
        <span key={3}>callTx</span>,
        ' with which its possible to interact with any deployed contract on the blockchain; The same class also provides all methods, and typings, under the ',
        <span key={4}>contract.methods</span>,
        ' property getter.',
      ],
    },
    {
      title: 'Deploy standard and custom contracts',
      description: [
        'ERC-20, ERC-1155, ERC-721, or other custom contracts can be deployed to any EVM compatible blockchain. By providing the ',
        <span key={1}>Model</span>,
        ' with a ',
        <span key={2}>Web3Connection</span>,
        ' and an ABI array, the ',
        <span key={3}>deploy()</span>,
        ' function becomes available, providing the required arguments will return a ',
        <span key={4}>TransactionReceipt</span>,
        ' holding the new ',
        <span key={5}>contractAddress</span>,
        '. You can even use dappKit to create custom typescript or javascript scripts to interact with any EVM blockchain',
      ],
    },
    {
      title: 'Web3 Utilities',
      description: [
        'dappKit provides its own utilities as well as the ones from ',
        <span key={1}>web3js</span>,
        ', where first you need to import individually when used and the latter is bundled under the ',
        <span key={2}>Web3Connection.Web3.utils</span>,
        ' property.',
      ],
    },
    {
      title: 'Wallet Integration ',
      description:
        'Integrates easily with Metamask to sign and submit smart contract transactions in your javascript dapp.',
    },
    {
      title: 'Generate a wrapper for your EVM contract',
      description:
        'Interact with your smart contract on your dapp by generating a typescript/javascript wrapper.',
    },
  ];

  return (
    <Section id={id} color="dark" title="Advanced Features">
      <Grid>
        {items &&
          Array.isArray(items) &&
          items.map((item, index) => (
            <Card key={index} color="dark" title={item.title} description={item.description} />
          ))}
      </Grid>
    </Section>
  );
}

export default Features;
