const $ = (element) => {
  return document.querySelectorAll(element);
};
const $attr = (elem, attr) => {
  return elem.getAttribute(attr);
};
const $class = (elem, className) => {
  if (elem.classList.contains(className)) {
    elem.classList.remove(className);
  } else {
    elem.classList.add(className);
  }
};

const $hasClass = (elem, className) => {
  return elem.classList.contains(className);
};

module.exports = {
  $,
  $attr,
  $class,
  $hasClass,
};
