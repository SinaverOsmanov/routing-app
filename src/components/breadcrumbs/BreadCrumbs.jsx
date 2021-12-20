import React from "react";
import { Link, useLocation } from "react-router-dom";
import { pathToArray } from "../../utils/pathToArray";

function BreadCrumbs() {
  const { pathname } = useLocation();
  const breadCrumbs = pathToArray(pathname);

  let link = "";

  return (
    <div className="breadcrumbs row">
      {breadCrumbs.map((b, i, array) => {
        link += "/" + b;
        return (
          <React.Fragment key={i}>
            {array.length - (i + 1) === 0 ? (
              <div>{b}</div>
            ) : (
              <div>
                <Link to={link} key={i}>
                  {b}
                </Link>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default React.memo(BreadCrumbs);
