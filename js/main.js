import getGameSetup from "./get-game-setup.js";
import { elGameSetupForm, elSetupSubmitter, elWith } from "./html-elements.js";
import loader from "./loader.js";

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
  const finalGameSetup = getGameSetup(gameSetup);
  console.log(finalGameSetup);
};
