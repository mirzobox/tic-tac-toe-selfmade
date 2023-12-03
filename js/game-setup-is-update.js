import gameSetupDefault from "./game-setup-default.js";

const gameSetupIsUpdate = (gameSetup) => {
  let checker = false;

  for (const value in gameSetup) {
    if (gameSetup[value] !== gameSetupDefault[value]) {
      checker = true;
    }
  }

  return checker;
};

export default gameSetupIsUpdate;
