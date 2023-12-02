import cssClassModifiers from "./css-class-modifiers.js";
import loader from "./loader.js";

const uiUpdater = (gameSetup) => {
  const { timeout } = cssClassModifiers;
  console.log(gameSetup);
  setTimeout(() => loader(false), timeout);
};

export default uiUpdater;
