const elLoader = document.getElementById("loader"),
  elGameSetupForm = document.getElementById("gameSetupForm"),
  elWith = document.querySelectorAll(".js-with"),
  elSetupSubmitter = document.getElementById("setupSubmitter"),
  elConfirmGameStartModal = document.getElementById("confirmGameStartModal"),
  elStartGameButton = document.getElementById("startGameButton"),
  elStartGameModal = document.getElementById("startGameModal"),
  elTurn = document.getElementById("turn"),
  elGameZone = document.getElementById("gameZone"),
  elScoreBoard = document.getElementById("scoreBoard"),
  // Templates
  elBoxTemplate = document.getElementById("boxTemplate"),
  elScoreBoardElementTemplate = document.getElementById(
    "scoreBoardElementTemplate",
  );

export {
  elLoader,
  elGameSetupForm,
  elWith,
  elSetupSubmitter,
  elConfirmGameStartModal,
  elStartGameButton,
  elStartGameModal,
  elTurn,
  elGameZone,
  elScoreBoard,

  // Templates
  elBoxTemplate,
  elScoreBoardElementTemplate,
};
