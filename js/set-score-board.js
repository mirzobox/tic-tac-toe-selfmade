import { player, x } from "./elements.js";
import { elOStatus, elXStatus } from "./html-elements.js";

const setScoreBoard = (whichElIsUpdate) => {
  const xData = elXStatus.dataset.x;
  const oData = elXStatus.dataset.o;
  if (Object.keys(whichElIsUpdate).length === 0) {
    elXStatus.innerText = `${xData} (${elXStatus.dataset.cpu})`;
    elOStatus.innerText = `${oData} (${elOStatus.dataset.you})`;
  } else {
    if (whichElIsUpdate.with === player) {
      elXStatus.innerText = `${xData} (${elXStatus.dataset.p})`;
      elOStatus.innerText = `${oData} (${elOStatus.dataset.p})`;
    }

    if (whichElIsUpdate.playerPick === x && whichElIsUpdate.with !== player) {
      elXStatus.innerText = `${xData} (${elXStatus.dataset.you})`;
      elOStatus.innerText = `${oData} (${elOStatus.dataset.cpu})`;
      elXStatus.setAttribute("id", elOStatus.getAttribute("id"));
      elOStatus.setAttribute("id", elXStatus.getAttribute("id"));
    }
  }
};

export default setScoreBoard;
