import { trimString } from "./functionForString";
import { reduceFunctions } from "./reduceFunctions";

export function routeString(str) {
  const newString = reduceFunctions(str, [trimString]);
  return "/" + newString;
}
