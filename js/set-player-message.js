import cssClassModifiers from "./css-class-modifiers.js";
import { player } from "./elements.js";
import { elPlayerMessage } from "./html-elements.js";

const setPlayerMessage = (gameSetup) => {
  const { hidden } = cssClassModifiers;
  if (gameSetup.with === player) {
    elPlayerMessage.classList.remove(hidden);
  } else {
    elPlayerMessage.classList.add(hidden);
  }
};

export default setPlayerMessage;
