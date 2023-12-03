import cssClassModifiers from "./css-class-modifiers.js";
import { elBoxTemplate, elGameZone } from "./html-elements.js";
import loader from "./loader.js";
import getScoreBoardDatas from "./get-score-board-datas.js";
import uiCleaner from "./ui-cleaner.js";
import uiScoreBoardUpdater from "./ui-score-board-updater.js";

const uiUpdater = (gameSetup) => {
  // Clean UI
  uiCleaner();
  const { timeout, gridSize } = cssClassModifiers;
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= gridSize; i++) {
    const elBoxClone = elBoxTemplate.content.cloneNode(true);
    fragment.appendChild(elBoxClone);
  }

  // Add elements
  elGameZone.append(fragment);

  // Score board
  const scoreBoardDatas = getScoreBoardDatas(gameSetup);
  uiScoreBoardUpdater(scoreBoardDatas);

  setTimeout(() => loader(false), timeout);
};

export default uiUpdater;
