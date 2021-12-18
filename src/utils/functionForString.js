// Приводит в верхний регистр
export const firstLetterToUppercase = (str) =>
  str[0].toUpperCase() + str.slice(1);

// Убирает пробелы с по краям
export const trimString = (str) => str.trim();

// Проверка по регулярному выражению
export const isStringWithCyrilic = (str) => {
  const regExp = /[А-я]/gi;
  const isMatched = regExp.test(str);
  return isMatched;
};
