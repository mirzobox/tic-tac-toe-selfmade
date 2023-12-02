import gameSetup from "./game-setup.js";

const getGameSetup = (setup) => {
  for (const [key, value] of setup.entries()) {
    gameSetup[key] = value;
  }
  return gameSetup;
};

export default getGameSetup;
