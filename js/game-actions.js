import attributeSetter from "./attribute-setter.js";
import cssClassModifiers from "./css-class-modifiers.js";
import {
  currentTurn,
  currentTurnChanger,
} from "./current-turn-current-turn-changer.js";
import { x, o } from "./elements.js";
import svgAttributeModifiers from "./svg-attribute-modifiers.js";

const gameActions = (target) => {
  // Current turn
  const { opacity_100, pointerEventsNone } = cssClassModifiers;
  const { xFillStroke, oFillStroke, xSvgD, oSvgD } = svgAttributeModifiers;
  const elSvg = target.querySelector(".js-box-svg");
  const elPath = target.querySelector(".js-box-path");
  elSvg.classList.add(opacity_100);
  target.classList.add(pointerEventsNone);
  if (currentTurn === x) {
    attributeSetter(elPath, {
      fill: xFillStroke,
      stroke: xFillStroke,
      d: xSvgD,
    });
    currentTurnChanger(o);
  } else {
    attributeSetter(elPath, {
      fill: oFillStroke,
      stroke: oFillStroke,
      d: oSvgD,
    });
    currentTurnChanger(x);
  }
};

export default gameActions;
