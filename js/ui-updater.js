import cssClassModifiers from "./css-class-modifiers.js";
import { elBoxTemplate, elGameZone } from "./html-elements.js";
import loader from "./loader.js";
import uiCleaner from "./ui-cleaner.js";

const uiUpdater = (gameSetup) => {
  // Clean UI
  uiCleaner();
  const { timeout, gridSize } = cssClassModifiers;
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= gridSize; i++) {
    const elBoxClone = elBoxTemplate.content.cloneNode(true);
    fragment.appendChild(elBoxClone);
  }

  // Add elements
  elGameZone.append(fragment);

  setTimeout(() => loader(false), timeout);
};

export default uiUpdater;
