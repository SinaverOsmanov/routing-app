import { pathToArray } from "./pathToArray";

export function searchRoute(loc, obj) {
  if (loc === "/main") {
    return obj;
  }
  const path = pathToArray(loc).map((p) => "/" + p);
  const pathCopy = [...path];

  return recursion(pathCopy, obj);
}

function recursion(path, object, parent) {
  let tmpPath = path;
  let tmpObject = object;

  if (tmpPath[0] === tmpObject.route && tmpPath.length === 1) {
    return tmpObject;
  } else {
    if (tmpPath[0] !== tmpObject.route && parent && parent.nodes.length) {
      return;
    } else if (tmpPath[0] === tmpObject.route && tmpObject.nodes.length > 0) {
      tmpPath.shift();

      for (let i = 0; i < tmpObject.nodes.length; i++) {
        if (tmpPath[0] === tmpObject.nodes[i].route) {
          return recursion(tmpPath, tmpObject.nodes[i], tmpObject);
        }
      }
    }
  }
}
