import attributeSetter from "./attribute-setter.js";
import cssClassModifiers from "./css-class-modifiers.js";
import {
  currentTurn,
  currentTurnChanger,
} from "./current-turn-current-turn-changer.js";
import { o, x, player } from "./elements.js";
import gameSetupDefault from "./game-setup-default.js";
import getGameSetup from "./get-game-setup.js";
import {
  elConfirmGameStartModal,
  elGameSetupForm,
  elPlayerMessage,
  elSetupSubmitter,
  elStartGameButton,
  elWith,
} from "./html-elements.js";
import isBox from "./is-box.js";
import loader from "./loader.js";
import setGameStartModal from "./set-game-start-modal.js";
import setPlayerMessage from "./set-player-message.js";
import svgAttributeModifiers from "./svg-attribute-modifiers.js";
import uiUpdater from "./ui-updater.js";

// Variables
let finalGameSetup = gameSetupDefault;

// Loader
window.onload = () => {
  loader(false);
};

elWith.forEach((radio) => {
  radio.onchange = () => {
    elSetupSubmitter.click();
    radio.checked = false;
  };
});

elGameSetupForm.onsubmit = (e) => {
  e.preventDefault();
  const gameSetup = new FormData(elGameSetupForm);
  finalGameSetup = getGameSetup(gameSetup);

  // Message
  setPlayerMessage(finalGameSetup);

  // showModal() daisyUI function
  elConfirmGameStartModal.showModal();
};

// Confirm game modal controller
elConfirmGameStartModal.onclick = ({ target }) => {
  target === elConfirmGameStartModal && target.close();
};

// Start game
elStartGameButton.onclick = () => {
  const { timeout } = cssClassModifiers;
  setTimeout(() => {
    loader(true);
    setGameStartModal(false);
    uiUpdater(finalGameSetup);
  }, timeout);
};

// Game actions
document.onmouseover = ({ target }) => {
  const { none, xFillStroke, xSvgD, oFillStroke, oSvgD } =
    svgAttributeModifiers;
  const checker = isBox(target);
  if (checker) {
    const elPath = target.querySelector(".js-box-path");
    if (currentTurn === x) {
      attributeSetter(elPath, {
        fill: none,
        stroke: xFillStroke,
        d: xSvgD,
      });
    } else {
      attributeSetter(elPath, {
        fill: none,
        stroke: oFillStroke,
        d: oSvgD,
      });
    }
  }
};

// uiUpdater(finalGameSetup, 9);
// setGameStartModal(false);
