const $ = (element) => document.querySelectorAll(element);

const $attr = (elem, attr) => elem.getAttribute(attr);

const $class = (elem, className) => {
  elem.classList.contains(className)
    ? elem.classList.remove(className)
    : elem.classList.add(className);
};

const $hasClass = (elem, className) => elem.classList.contains(className);

const $create = (type, classes) => {
  const elem = document.createElement(type);
  elem.setAttribute("class", classes);
  return elem;
};

export {
  $,
  $attr,
  $class,
  $hasClass,
  $create,
};
