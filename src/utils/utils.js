import {FIRST_NAMES, LAST_NAMES} from "../utils/films.js";

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomIndex = (indices) => {
  return getRandomInteger(0, indices.length - 1);
};

export const getRandomElem = (elements) => {
  return elements[getRandomIndex(elements)];
};

const getShuffledArray = (elements) => {
  for (let i = elements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [elements[i], elements[j]] = [elements[j], elements[i]];
  }

  return elements;
};

export const getRandomArray = (elements) => {
  const clonedElements = elements.slice();
  const shuffledElements = getShuffledArray(clonedElements);

  return shuffledElements.slice(getRandomIndex(shuffledElements));
};

export const getBoolean = () => {
  return Boolean(getRandomInteger(0, 1));
};

export const getRandomName = () => {
  return `${getRandomElem(FIRST_NAMES)} ${getRandomElem(LAST_NAMES)}`;
};

export const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

export const getRandomDescription = (description) => {
  const sentences = description.split(`. `);
  const randomSentences = getRandomArray(sentences);
  const randomDescription = `${randomSentences.join(`. `)}.`;

  return randomDescription;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

