import { useState } from "react";
import Banner from "./components/design/banner";

function App() {
  const [bannerIsVisible, setBannerIsVisible] = useState(true);

  return (
    <>
      {bannerIsVisible && (
        <Banner
          value={`Bepro.js is now dappKit`}
          link="Learn more"
          url="#0"
          onClick={() => {
            setBannerIsVisible(false);
          }}
        />
      )}
    </>
  );
}

export default App;
