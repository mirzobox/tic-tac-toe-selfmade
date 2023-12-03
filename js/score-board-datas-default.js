import { cpu, o, player, x } from "./elements.js";

const scoreBoardDatasDefault = [
  {
    current: x,
    turn: cpu,
    score: 0,
    statusChangeAvailable: true,
    boardElementColor: "bg-light-blue",
    get getStatus() {
      return `${this.current} (${this.turn})`;
    },
    set setStatus(value) {
      this.current = value;
    },
    get getTurn() {
      this.turn = value;
      return this.turn;
    },
    set setTurn(value) {
      this.turn = value;
    },
  },
  {
    status: "ties",
    score: 0,
    statusChangeAvailable: false,
    boardElementColor: "bg-silver",
    get getStatus() {
      return this.status;
    },
  },
  {
    current: o,
    turn: player,
    score: 0,
    statusChangeAvailable: true,
    boardElementColor: "bg-light-yellow",
    get getStatus() {
      return `${this.current} (${this.turn})`;
    },
    set setStatus(value) {
      this.current = value;
    },
    get getTurn() {
      this.turn = value;
      return this.turn;
    },
    set setTurn(value) {
      this.turn = value;
    },
  },
];

export default scoreBoardDatasDefault;
