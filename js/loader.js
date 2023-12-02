import cssClassModifiers from "./css-class-modifiers.js";
import { elLoader } from "./html-elements.js";

const loader = (value) => {
  const { opacity_0, pointerEventsNone } = cssClassModifiers;
  if (value) elLoader.classList.remove(opacity_0, pointerEventsNone);
  else elLoader.classList.add(opacity_0, pointerEventsNone);
};

export default loader;
