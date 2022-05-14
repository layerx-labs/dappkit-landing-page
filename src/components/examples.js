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
      subtitle: "ERC-721, ERC-1155",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "#0",
      snippet: nft,
      img: "https://static.news.bitcoin.com/wp-content/uploads/2018/08/AP325540479269-1024x724.jpg",
    },
    {
      id: 1,
      name: "Crypto Tokens",
      title: "Title 2",
      subtitle: "Subtitle 2",
      content: "Content 2",
      url: "#0",
      snippet: nft,
      img: "https://static.news.bitcoin.com/wp-content/uploads/2018/08/AP325540479269-1024x724.jpg",
    },
    {
      id: 2,
      name: "DeFi Platforms",
      title: "Title 3",
      subtitle: "Subtitle 3",
      content: "Content 3",
      url: "#0",
      snippet: nft,
      img: "https://static.news.bitcoin.com/wp-content/uploads/2018/08/AP325540479269-1024x724.jpg",
    },
    {
      id: 3,
      name: "DAOs",
      title: "Title 4",
      subtitle: "Subtitle 4",
      content: "Content 4",
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
