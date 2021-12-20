import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useRouteState } from "../hooks/useRouteState";

export const withContent = (Component) => (props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [state] = useRouteState(pathname);

  const theme = state && state.nodes.length > 0 ? "whatsApp" : "facebook";

  useEffect(() => {
    dispatch({
      type: "set",
      payload: pathname,
    });
  }, [dispatch]);

  return (
    <div className={theme}>
      <Component state={state} {...props} />
    </div>
  );
};
