import { x } from "./elements.js";

let currentTurn = x;

const currentTurnChanger = (value) => {
  currentTurn = value;
};

export { currentTurnChanger, currentTurn };
