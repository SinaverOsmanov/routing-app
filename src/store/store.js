import { createStore } from "redux";
import { routeReducer } from "./routeReducer";

export const store = createStore(routeReducer);
