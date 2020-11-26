import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { ProgressContext } from "./Context";
export function NavBar() {
  const { pathname } = useLocation();
  const { unlocked } = useContext(ProgressContext);

  useEffect(() => {}, [unlocked]);

  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.navbar}>
        <Link
          to="/"
          className={clsx(
            classes.link,
            classes.heading,
            pathname === "/" && classes.active
          )}
        >
          <h1 className={classes.title}>Graphs</h1>
        </Link>

        <Link
          to="/graph-theory"
          className={clsx(
            classes.link,
            pathname === "/graph-theory" && classes.active,
            !localStorage.getItem("unlockedPages").includes("graph-theory") &&
              classes.disabled
          )}
        >
          Graph theory
        </Link>
        <Link
          to="/dijkstra-algo"
          className={clsx(
            classes.link,
            pathname === "/dijkstra-algo" && classes.active,
            !localStorage.getItem("unlockedPages").includes("dijkstra-algo") &&
              classes.disabled
          )}
        >
          Dijkstra's Algorithm
        </Link>
     
      </div>
    </div>
  );
}
