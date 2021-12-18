// Вызов функций для обработки данных (выполнение функций справа на лево)
export function reduceFunctions(value, arrayFunctions) {
  return arrayFunctions.reduceRight((value, fn) => fn(value), value);
}
