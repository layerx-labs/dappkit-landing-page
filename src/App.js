import { useState } from "react";
import Banner from "./components/design/banner";

function App() {
  const [bannerIsVisible, setBannerIsVisible] = useState(true);

  return (
    <>
      <h1>title</h1>
      {bannerIsVisible && <Banner value={`asdasd`} />}
    </>
  );
}

export default App;
