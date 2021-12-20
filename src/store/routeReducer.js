import { findInArray } from "../utils/findInArray";
import { generateState } from "../utils/generateState";

const initialState = {
  route: "/main",
  nodes: [],
  title: "Main",
};
export function routeReducer(state = initialState, action) {
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
      const r = generateState(payload, state);
      return { ...r };
    case "get":
      return { ...state };
    default:
      return { ...state };
  }
}
