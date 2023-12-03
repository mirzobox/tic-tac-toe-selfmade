import { elScoreBoard, elScoreBoardElementTemplate } from "./html-elements.js";

const uiScoreBoardUpdater = (scoreBoardDatas) => {
  const fragment = document.createDocumentFragment();
  scoreBoardDatas.forEach(({ getStatus, score, boardElementColor }) => {
    const elScoreBoardElementClone =
      elScoreBoardElementTemplate.content.cloneNode(true);
    const elBoard = elScoreBoardElementClone.querySelector(".js-board");
    const elStatus = elScoreBoardElementClone.querySelector(".js-status");
    const elScore = elScoreBoardElementClone.querySelector(".js-score");
    elBoard.classList.add(boardElementColor);
    elStatus.innerText = getStatus;
    elScore.innerText = score;

    fragment.appendChild(elScoreBoardElementClone);
  });

  elScoreBoard.append(fragment);
};

export default uiScoreBoardUpdater;
