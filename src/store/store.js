import { findInArray } from "../utils/findInArray";
import { firstLetterToUppercase, trimString } from "../utils/functionForString";
import { pathToArray } from "../utils/pathToArray";
import { reduceFunctions } from "../utils/reduceFunctions";

const initialState = {
  route: "/main",
  nodes: [],
  title: "Main",
};
export function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "add":
      const isEqualRoutes = findInArray(
        payload.componentState.nodes,
        payload.form.route,
        "route"
      );
      if (!isEqualRoutes) {
        payload.componentState.nodes = [
          ...payload.componentState.nodes,
          { ...payload.form },
        ];
      }
      return { ...state };
    case "set":
      const r = splitPath(payload);
      return { ...r };
    case "get":
      return { ...state };
    default:
      return { ...state };
  }
}

function splitPath(path) {
  const newArray = pathToArray(path).splice(1);
  const state = { ...initialState };
  fn(newArray, state);
  return state;
}

function fn(newArray, state) {
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
  fn(newArray, obj);
}
