import { Footer as Component } from "./design/footer";

function Footer() {
  const social = [
    {
      channel: "github",
      url: "#0",
    },
    {
      channel: "discord",
      url: "#0",
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
        },
        {
          value: "Learn",
          url: "#0",
        },
        {
          value: "Blog",
          url: "#0",
        },
        {
          value: "Features",
          url: "#0",
        },
        {
          value: "Pricing",
          url: "#0",
        },
      ],
    },
    {
      title: "About dappKit",
      links: [
        {
          value: "About",
          url: "#0",
        },
        {
          value: "GitHub",
          url: "#0",
        },
        {
          value: "Discord",
          url: "#0",
        },
        {
          value: "Twitter",
          url: "#0",
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
          value: "Termos of Service",
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
