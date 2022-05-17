import { Footer as Component } from "./design/footer";

function Footer() {
  const links = [
    {
      title: "General Resources",
      links: [
        {
          value: "Docs",
          url: "https://doc.dappkit.dev",
          external: true,
        },
        {
          value: "Learn",
          url: "#0",
          external: true,
        },
        {
          value: "About",
          url: "https://taikai.network/about-us",
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

  return (
    <Component
      supportTitle="We’re here to help"
      supportSubtitle="Let us know if you have any questions."
      community="https://discord.gg/9aUufhzhfm"
      docs="https://doc.dappkit.dev"
      links={links}
      social={social}
      copyright="Copyright © 2022 All rights reserved. TAIKAI — Builder Hub"
    />
  );
}

export default Footer;
