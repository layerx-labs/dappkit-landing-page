import { Footer as Component } from "./design/footer";

function Footer({ comicTheme = false }) {
  const links = [
    {
      title: "General Resources",
      links: [
        {
          value: "Docs",
          url: "https://sdk.dappkit.dev",
          external: true,
        },
        {
          value: "Learn",
          url: "https://docs.dappkit.dev/start-building",
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
          url: "https://bepro.network/privacy",
        },
        {
          value: "Terms of Service",
          url: "https://bepro.network/terms-and-conditions",
        },
      ],
    },
  ];

  return (
    <Component
      comicTheme={comicTheme}
      supportTitle="We’re here to help"
      supportSubtitle="Let us know if you have any questions."
      community="https://discord.gg/9aUufhzhfm"
      docs="https://docs.dappkit.dev"
      links={links}
      copyright={[
        "Copyright © 2022 All rights reserved. ",
        <a
          key={1}
          href="https://taikai.network"
          target="_blank"
          rel="noopener noreferrer"
        >
          TAIKAI — Builder Hub
        </a>,
      ]}
    />
  );
}

export default Footer;
