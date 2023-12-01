import gameSetupDefault from "./game-setup-default.js";

const { playerPick } = gameSetupDefault;

const gameSetup = {
  playerPick,

  get getFinalSetup() {
    const { playerPick } = this;
    return { playerPick };
  },
};

export default gameSetup;
