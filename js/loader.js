import cssClassModifiers from "./css-class-modifiers.js";
import { elLoader } from "./html-elements.js";

const loader = (value) => {
  const { loaderNone, pointerEventsNone } = cssClassModifiers;
  if (value) elLoader.classList.remove(loaderNone, pointerEventsNone);
  else elLoader.classList.add(loaderNone, pointerEventsNone);
};

export default loader;
