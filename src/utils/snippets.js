export const nft = `import { Erc721Standard } from "@taikai/dappkit";

const nftToken = new Erc721Standard(
  { web3Host: "http://localhost:1337", privateKey: "*" },
  "0xContractAddress"
);

await nftToken.start();
await nftToken.mint("0xWalletAddress", "tokenId-1");
`;

export const crypto = `import { ERC20 } from "@taikai/dappkit";

const erc20 = new ERC20(
  { web3Host: "http://localhost:1337", privateKey: "*" },
  "0xContractAddress"
);

await erc20.start();
await erc20.transferTokenAmount("0xWalletAddress", 100);
`;

export const defi = `import { Sablier } from "@taikai/dappkit";

const sablier = new Sablier(
  { web3Host: "http://localhost:1337", privateKey: "*" },
  "0xContractAddress"
);

await sablier.start();
await sablier.withdrawFromStream(1, 500);
`;

export const dao = `import { Network_V2 } from "@taikai/dappkit";

const network = new Network_V2(
  { web3Host: "http://localhost:1337", privateKey: "*" },
  "0xContractAddress"
);

await network.start();
await network.lock(205000);
`;
