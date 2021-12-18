import { useSelector } from "react-redux";
import { searchRoute } from "../utils/getRouteObject";

export function useRouteState(location) {
  const object = useSelector((state) => state);
  const state = searchRoute(location, object);
  return [state];
}
