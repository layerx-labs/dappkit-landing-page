import { Footer as Component } from './design/footer';

function Footer({ comicTheme = false }) {
  const links = [
    {
      title: 'General Resources',
      links: [
        {
          value: 'Docs',
          url: 'https://sdk.dappkit.dev',
          external: true,
        },
        {
          value: 'Learn',
          url: 'https://docs.dappkit.dev/start-building',
          external: true,
        },
        {
          value: 'About Us',
          url: 'https://layerx.xyz/about',
          external: true,
        },
        {
          value: 'Features',
          url: '#features',
        },
        {
          value: 'Pricing',
          url: '#pricing',
        },
      ],
    },
    {
      title: 'Legal',
      links: [
        {
          value: 'Privacy Policy',
          url: 'https://bepro.network/privacy',
        },
        {
          value: 'Terms of Service',
          url: 'https://bepro.network/terms-and-conditions',
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
      copyright={
        <>
          <span>Made with</span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="#FF6624"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
          <span>
            by
            <a href="https://layerx.xyz" target="_blank" rel="noopener noreferrer">
              LayerX Labs — Web3 Builder Hub
            </a>
          </span>
        </>
      }
    />
  );
}

export default Footer;
