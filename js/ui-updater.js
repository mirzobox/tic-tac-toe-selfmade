import cssClassModifiers from "./css-class-modifiers.js";
import gameActions from "./game-actions.js";
import gameSetupIsUpdate from "./game-setup-is-update.js";
import { elBoxTemplate, elGameZone } from "./html-elements.js";
import loader from "./loader.js";
import setScoreBoard from "./set-score-board.js";
import uiCleaner from "./ui-cleaner.js";

const uiUpdater = (gameSetup) => {
  // Clean UI
  uiCleaner();
  const { timeout, gridSize } = cssClassModifiers;
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= gridSize; i++) {
    const elBoxClone = elBoxTemplate.content.cloneNode(true);
    const elBoxContentClone = elBoxClone.querySelector(".js-box");

    // Add actions
    elBoxContentClone.onclick = ({ target }) => gameActions(target);

    fragment.appendChild(elBoxClone);
  }

  // Add elements
  elGameZone.append(fragment);

  // Set score board
  const whichElIsUpdate = gameSetupIsUpdate(gameSetup);
  setScoreBoard(whichElIsUpdate);

  setTimeout(() => loader(false), timeout);
};

export default uiUpdater;
