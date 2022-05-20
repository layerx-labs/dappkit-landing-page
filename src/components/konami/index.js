import { useEffect, useContext, useState } from "react";
import KonamiContext from "./context";
import useHotKey from "./useHotKey";

const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const KonamiTrigger = ({ easterEggIsActive }) => {
  const [keysPressed, setKeysPress] = useState(false);
  const { hasEasterEgg, setEasterEgg } = useContext(KonamiContext);

  useEffect(() => {
    /* istanbul ignore else  */
    if (!keysPressed && !hasEasterEgg) {
      console.log(
        "%cThis site is beautiful, but if you try the Konami Code, we will show you a better version!",
        "color: white; background: #7761FF; font-family:monospace;"
      );
    }
  }, []);

  /**
   * Callback triggered when the user has pressed
   * @param {boolean} status
   * @returns {void}
   */
  function onUnlock(status) {
    setKeysPress(status);
    easterEggIsActive(status);
    console.log(
      "%cNow we are talking! 💅",
      "color: white; background: #7761FF; font-family:monospace;"
    );

    setEasterEgg();
  }

  useHotKey(sequence, () => onUnlock(true));

  return (
    <div
      className="sr-only"
      data-testid="konami-code-trigger"
      data-unlocked={keysPressed}
    />
  );
};

export default KonamiTrigger;
