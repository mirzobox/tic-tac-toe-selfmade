import gameSetupDefault from "./game-setup-default.js";

const gameSetup = {
  ...gameSetupDefault,
  get getFinalSetup() {
    return { ...this };
  },
};

export default gameSetup;
