const boxCleaner = (element, attributeName) => {
  const elPath = element.querySelector(".js-box-path");

  console.log(elPath);
  elPath.removeAttribute(attributeName);
};

export default boxCleaner;
