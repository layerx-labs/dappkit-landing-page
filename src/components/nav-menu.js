import { useState } from 'react';
import Nav from './design/nav';
import Banner from './design/banner';

function NavMenu(props) {
  const { heroIsVisible = true, comicTheme = false } = props;
  const [bannerIsVisible, setBannerIsVisible] = useState(true);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const menu = [
    { value: 'Features', url: '#features' },
    { value: 'Templates', url: '#templates' },
    {
      value: 'Community',
      url: 'https://discord.gg/LayerX',
      external: true,
    },
    { value: 'Docs', url: 'https://sdk.dappkit.dev', external: true },
  ];

  return (
    <Nav
      comicTheme={comicTheme}
      banner={
        bannerIsVisible && (
          <Banner
            value={`Bepro.js is now dappKit`}
            link="Learn more"
            url="https://bepronetwork.medium.com/dappkit-the-simple-way-to-start-your-web3-project-e874c650f13"
            onClick={() => {
              setBannerIsVisible(false);
            }}
          />
        )
      }
      menu={menu}
      heroIsVisible={heroIsVisible}
      actionButtonValue="Get Started"
      actionButtonUrl="https://docs.dappkit.dev/start-building"
      github="https://github.com/layerx-labs/dappkit"
      drawerOpened={drawerOpened}
      drawerOnClick={() => {
        setDrawerOpened(!drawerOpened);
      }}
    />
  );
}

export default NavMenu;
