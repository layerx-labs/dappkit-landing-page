import { useState } from "react";
import Nav from "./design/nav";
import Banner from "./design/banner";

function NavMenu() {
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
    { value: "Docs", url: "#0", external: true },
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
      actionButtonValue="Get Started"
      actionButtonUrl="#0"
      github="https://github.com/taikai/dappkit"
      drawerOpened={drawerOpened}
      drawerOnClick={() => {
        setDrawerOpened(!drawerOpened);
      }}
    />
  );
}

export default NavMenu;
