import { firstLetterToUppercase, trimString } from "./functionForString";
import { pathToArray } from "./pathToArray";
import { reduceFunctions } from "./reduceFunctions";

//
export function generateState(path, state) {
  const newArray = pathToArray(path).splice(1);
  const newState = { ...state };
  createTreeStateByPath(newArray, newState);
  return newState;
}

// генерирует state по pathname
function createTreeStateByPath(newArray, state) {
  if (newArray.length === 0) {
    return true;
  }

  let obj = {
    nodes: [],
    title: reduceFunctions(newArray[0], [firstLetterToUppercase, trimString]),
    route: "/" + newArray[0],
  };

  state.nodes.push(obj);

  newArray.shift();
  createTreeStateByPath(newArray, obj);
}
