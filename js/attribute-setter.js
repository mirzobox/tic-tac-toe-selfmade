const attributeSetter = (element, obj) => {
  for (const [key, value] of Object.entries(obj)) {
    element.setAttribute(key, value);
  }
};

export default attributeSetter;
