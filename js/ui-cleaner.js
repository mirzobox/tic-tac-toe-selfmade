import { elGameZone, elScoreBoard } from "./html-elements.js";

const uiCleaner = () => {
  elGameZone.innerHTML = null;
  elScoreBoard.innerHTML = null;
};

export default uiCleaner;
