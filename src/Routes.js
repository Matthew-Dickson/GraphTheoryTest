import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import { DijkstraAlgo } from "./DijkstraAlgo";
import { GraphTheory } from "./GraphTheory";
import { Home } from "./Home";
import { NavBar } from "./NavBar";

export function Routes() {
  let location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dijkstra-algo" component={DijkstraAlgo} />
        <Route path="/graph-theory" component={GraphTheory} />
      </Switch>
    </>
  );
}
