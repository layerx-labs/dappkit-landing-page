export const nft =
  'import { Erc721Standard } from "@taikai/dappkit";\r\n\r\nconst nftToken = new Erc721Standard(\r\n  { web3Host: "https://mainnet.infura.io/v3/", privateKey: "*" },\r\n  "0xContractAddress"\r\n);\r\n\r\nawait nftToken.start();\r\nawait nftToken.mint("0xWalletAddress", "tokenId-1");';

export const crypto =
  'import { ERC20 } from "@taikai/dappkit";\r\n\r\nconst erc20 = new ERC20(\r\n  { web3Host: "https://mainnet.infura.io/v3/", privateKey: "*" },\r\n  "0xContractAddress"\r\n);\r\n\r\nawait erc20.start();\r\nawait erc20.transferTokenAmount("0xWalletAddress", 100);\r\n';

export const defi =
  'import { Sablier } from "@taikai/dappkit";\r\n\r\nconst sablier = new Sablier(\r\n  { web3Host: "https://mainnet.infura.io/v3/", privateKey: "*" },\r\n  "0xContractAddress"\r\n);\r\n\r\nawait sablier.start();\r\nawait sablier.withdrawFromStream(1, 500);';

export const dao =
  'import { Network_V2 } from "@taikai/dappkit";\r\n\r\nconst network = new Network_V2(\r\n  { web3Host: "https://mainnet.infura.io/v3/", privateKey: "*" },\r\n  "0xContractAddress"\r\n);\r\n\r\nawait network.start();\r\nawait network.lock(205000);';
