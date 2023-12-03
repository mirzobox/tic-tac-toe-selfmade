import gameSetupDefault from "./game-setup-default.js";

const gameSetupIsUpdate = (gameSetup) => {
  let checker = false;
  for (const value in gameSetupDefault) {
    if (gameSetupDefault[value] !== gameSetup[value]) {
      checker = true;
    }
  }

  return checker;
};

export default gameSetupIsUpdate;
