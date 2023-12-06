import cssClassModifiers from "./css-class-modifiers.js";
import { player } from "./elements.js";
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
import loader from "./loader.js";
import setGameStartModal from "./set-game-start-modal.js";
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
  const { hidden } = cssClassModifiers;
  e.preventDefault();
  const gameSetup = new FormData(elGameSetupForm);
  finalGameSetup = getGameSetup(gameSetup);
  // showModal() daisyUI function
  if (finalGameSetup.with === player) {
    elPlayerMessage.classList.remove(hidden);
  } else {
    elPlayerMessage.classList.add(hidden);
  }
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

// uiUpdater(finalGameSetup, 9);
// setGameStartModal(false);
