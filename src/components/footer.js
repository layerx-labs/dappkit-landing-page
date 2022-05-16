import { Footer as Component } from "./design/footer";

function Footer() {
  const social = [
    {
      channel: "github",
      url: "https://github.com/taikai/dappkit",
    },
    {
      channel: "discord",
      url: "https://discord.gg/9aUufhzhfm",
    },
    {
      channel: "twitter",
      url: "#0",
    },
  ];

  const links = [
    {
      title: "General Resources",
      links: [
        {
          value: "Docs",
          url: "#0",
          external: true,
        },
        {
          value: "Learn",
          url: "#0",
          external: true,
        },
        {
          value: "Blog",
          url: "https://bepronetwork.medium.com",
          external: true,
        },
        {
          value: "Features",
          url: "#features",
        },
        {
          value: "Pricing",
          url: "#pricing",
        },
      ],
    },
    {
      title: "About dappKit",
      links: [
        {
          value: "About",
          url: "https://taikai.network/about-us",
          external: true,
        },
        {
          value: "GitHub",
          url: "https://github.com/taikai/dappkit",
          external: true,
        },
        {
          value: "Discord",
          url: "https://discord.gg/9aUufhzhfm",
          external: true,
        },
        {
          value: "Twitter",
          url: "#0",
          external: true,
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          value: "Privacy Policy",
          url: "#0",
        },
        {
          value: "Terms of Service",
          url: "#0",
        },
      ],
    },
  ];

  return (
    <Component
      social={social}
      links={links}
      copyright="Copyright © 2022 All rights reserved. TAIKAI — Builder Hub"
    />
  );
}

export default Footer;
