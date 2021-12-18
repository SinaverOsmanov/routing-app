// Поиск элемента по ключу в массиве объектов и сравнение значений
export const findInArray = (array, findElement, key) =>
  !!array.find((node) =>
    typeof node === "object" ? node[key] === findElement : node === findElement
  );
