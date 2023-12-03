import { x } from "./elements.js";
import gameSetupIsUpdate from "./game-setup-is-update.js";
import scoreBoardDatas from "./score-board-datas.js";

const getScoreBoardDatas = (gameSetup) => {
  const isUpdate = gameSetupIsUpdate(gameSetup);
  if (isUpdate) {
    scoreBoardDatas.forEach((data) => {
      const { statusChangeAvailable } = data;
      if (statusChangeAvailable) {
        // data.getStatus;
      }
    });
  }

  return scoreBoardDatas;
};

export default getScoreBoardDatas;
