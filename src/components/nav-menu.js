import { useState } from "react";
import Nav from "./design/nav";
import Banner from "./design/banner";

function NavMenu() {
  const [bannerIsVisible, setBannerIsVisible] = useState(true);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const menu = [
    { value: "Features", url: "#0" },
    { value: "Templates", url: "#0" },
    { value: "Community", url: "#0" },
    { value: "Docs", url: "#0" },
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
      github="#0"
      drawerOpened={drawerOpened}
      drawerOnClick={() => {
        setDrawerOpened(!drawerOpened);
      }}
    />
  );
}

export default NavMenu;
