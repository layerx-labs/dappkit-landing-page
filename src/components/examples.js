import { useState } from "react";
import Tabs from "./design/tabs";

function Examples() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: "NFTs",
      title: "Non-Fungible Tokens",
      subtitle: "ERC-721, ERC-1155",
      content: "Content 1",
      url: "#0",
    },
    {
      id: 1,
      name: "Crypto Tokens",
      title: "Title 2",
      subtitle: "Subtitle 2",
      content: "Content 2",
      url: "#0",
    },
    {
      id: 2,
      name: "DeFi Platforms",
      title: "Title 3",
      subtitle: "Subtitle 3",
      content: "Content 3",
      url: "#0",
    },
    {
      id: 3,
      name: "DAOs",
      title: "Title 4",
      subtitle: "Subtitle 4",
      content: "Content 4",
      url: "#0",
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
