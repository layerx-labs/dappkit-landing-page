import { useState } from "react";
import Tabs from "./design/tabs";
import {
  ExampleNfts,
  ExampleCryptoTokens,
  ExampleDefi,
  ExampleDaos,
} from "../utils/examples";
import { nft, crypto, defi, dao } from "../utils/snippets";
import { colors } from "../styles/variables";

const { orange, green500 } = colors;

function Examples({ comicTheme = false }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: "NFTs",
      title: "Non-Fungible Tokens",
      subtitle: "ERC-721 or ERC1155",
      content:
        "Create, Deploy and Mint your own NFTs following the industry standards",
      url: "https://docs.dappkit.dev/start-building/how-to-guides/create-an-nft",
      snippet: nft,
      img: <ExampleNfts mainColor={comicTheme ? orange : green500} />,
    },
    {
      id: 1,
      name: "Crypto tokens",
      title: "Crypto tokens",
      subtitle: "Launch your own ERC-20 tokens",
      content:
        "ERC20 Tokens can be used as currency or as tokens to reward your users via gamification techniques",
      url: "https://docs.dappkit.dev/start-building/how-to-guides/create-an-erc-20-token",
      snippet: crypto,
      img: <ExampleCryptoTokens mainColor={comicTheme ? orange : green500} />,
    },
    {
      id: 2,
      name: "DeFi platforms",
      title: "Decetralised Finance Platforms",
      subtitle: "Sablier, Loophole, or more contracts",
      content:
        "dappKit comes preloaded with default DeFi smart contracts you can use to jumpstart your business",
      url: "https://docs.dappkit.dev/start-building/how-to-guides/usage",
      snippet: defi,
      img: <ExampleDefi mainColor={comicTheme ? orange : green500} />,
    },
    {
      id: 3,
      name: "DAOs",
      title: "Decentralised Autonomous Organisations",
      subtitle: "Vote contract and network contract",
      content:
        "Base your DAO on our Network and take advantage of a community made smart contract",
      url: "https://docs.dappkit.dev/start-building/how-to-guides/usage",
      snippet: dao,
      img: <ExampleDaos mainColor={comicTheme ? orange : green500} />,
    },
  ];

  return (
    <Tabs
      tabs={tabs}
      content={tabs[selectedTab]}
      onClick={(index) => {
        setSelectedTab(index);
      }}
    />
  );
}

export default Examples;
