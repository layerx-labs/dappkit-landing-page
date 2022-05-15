import { useState } from "react";
import Tabs from "./design/tabs";
import { nft } from "../utils/snippets";

function Examples() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: "NFTs",
      title: "Non-Fungible Tokens",
      subtitle: "ERC-721 or ERC1155",
      content:
        "Create, Deploy and Mint your own NFTs following the industry standards",
      url: "#0",
      snippet: nft,
      img: "https://static.news.bitcoin.com/wp-content/uploads/2018/08/AP325540479269-1024x724.jpg",
    },
    {
      id: 1,
      name: "Crypto tokens",
      title: "Crypto tokens",
      subtitle: "Launch your own ERC-20 tokens",
      content:
        "ERC20 Tokens can be used as currency or as tokens to reward your users via gamification techniques",
      url: "#0",
      snippet: nft,
      img: "https://static.news.bitcoin.com/wp-content/uploads/2018/08/AP325540479269-1024x724.jpg",
    },
    {
      id: 2,
      name: "DeFi platforms",
      title: "DeFi platforms",
      subtitle: "Sablier, Loophole, or more contracts",
      content:
        "dappKit comes preloaded with default DeFi smart contracts you can use to jumpstart your business",
      url: "#0",
      snippet: nft,
      img: "https://static.news.bitcoin.com/wp-content/uploads/2018/08/AP325540479269-1024x724.jpg",
    },
    {
      id: 3,
      name: "DAOs",
      title: "DAOs",
      subtitle: "Vote contract and network contract",
      content:
        "Base your DAO on our Network and take advantage of a community made smart contract",
      url: "#0",
      snippet: nft,
      img: "https://static.news.bitcoin.com/wp-content/uploads/2018/08/AP325540479269-1024x724.jpg",
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
