import cssClassModifiers from "./css-class-modifiers.js";
import { elStartGameModal } from "./html-elements.js";
const setGameStartModal = (value) => {
  const { hidden } = cssClassModifiers;
  if (value) elStartGameModal.classList.remove(hidden);
  else elStartGameModal.classList.add(hidden);
};

export default setGameStartModal;
