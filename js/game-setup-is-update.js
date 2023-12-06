import gameSetupDefault from "./game-setup-default.js";

const gameSetupIsUpdate = (gameSetup) => {
  const whichElIsUpdate = {};

  for (const key in gameSetup) {
    if (gameSetup[key] !== gameSetupDefault[key]) {
      whichElIsUpdate[key] = gameSetup[key];
    }
  }

  return whichElIsUpdate;
};

export default gameSetupIsUpdate;
