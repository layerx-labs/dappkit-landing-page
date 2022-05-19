import { useState } from "react";
import Nav from "./design/nav";
import Banner from "./design/banner";

function NavMenu({ hightlightButton }) {
  const [bannerIsVisible, setBannerIsVisible] = useState(true);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const menu = [
    { value: "Features", url: "#features" },
    { value: "Templates", url: "#templates" },
    {
      value: "Community",
      url: "https://discord.gg/9aUufhzhfm",
      external: true,
    },
    { value: "Docs", url: "https://docs.dappkit.dev", external: true },
  ];

  return (
    <Nav
      banner={
        bannerIsVisible && (
          <Banner
            value={`Bepro.js is now dappKit`}
            link="Learn more"
            url="#0"
            onClick={() => {
              setBannerIsVisible(false);
            }}
          />
        )
      }
      menu={menu}
      actionButtonHighlight={hightlightButton}
      actionButtonValue="Get Started"
      actionButtonUrl="https://docs.dappkit.dev/start-building"
      github="https://github.com/taikai/dappkit"
      drawerOpened={drawerOpened}
      drawerOnClick={() => {
        setDrawerOpened(!drawerOpened);
      }}
    />
  );
}

export default NavMenu;
