import { cpu, player, x } from "./elements.js";
import { elOStatus, elXStatus } from "./html-elements.js";

const setScoreBoard = (whichElIsUpdate) => {
  if (Object.keys(whichElIsUpdate).length === 0) {
    elXStatus.innerText = `${elXStatus.dataset.x} (${elXStatus.dataset.cpu})`;
    elOStatus.innerText = `${elOStatus.dataset.o} (${elOStatus.dataset.you})`;
  } else {
    if (whichElIsUpdate.with === player) {
      elXStatus.innerText = `${elXStatus.dataset.x} (${elXStatus.dataset.p})`;
      elOStatus.innerText = `${elOStatus.dataset.o} (${elOStatus.dataset.p})`;
    }

    if (whichElIsUpdate.playerPick === x && whichElIsUpdate.with !== player) {
      elXStatus.innerText = `${elXStatus.dataset.x} (${elXStatus.dataset.you})`;
      elOStatus.innerText = `${elOStatus.dataset.o} (${elOStatus.dataset.cpu})`;
    }
  }
};

export default setScoreBoard;
