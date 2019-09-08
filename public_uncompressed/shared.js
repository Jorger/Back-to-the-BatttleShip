"use strict";
const DIMENSION_BOARD = 10;

/**
 * Genetar un valor aleatorio dado el rango
 * @param {*} min
 * @param {*} max
 */
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Genera un token
 */
const guid = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

const sanizateTags = input =>
  input ? input.replace(/<\/?[^>]+(>|$)/g, "") : "";
