import React from "react";
import { Link, useLocation } from "react-router-dom";
import { pathToArray } from "../../utils/pathToArray";
import Container from "./../container/Container";

function BreadCrumbs() {
  const { pathname } = useLocation();
  const breadCrumbs = pathToArray(pathname);

  let link = "";

  return (
    <div className="breadcrumbs row">
      <Container>
        <div className="row">
          {breadCrumbs.map((b, i, array) => {
            link += "/" + b;
            return (
              <div className="col breadcrumbs-item" key={i}>
                {array.length - (i + 1) === 0 ? (
                  <span>{b}</span>
                ) : (
                  <Link to={link} key={i}>
                    <span>{b}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default React.memo(BreadCrumbs);
