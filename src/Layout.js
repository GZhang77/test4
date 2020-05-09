import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import PageA from "./PageA";
import Matterhorn from "./Matterhorn";
import Niesen from "./Niesen";
import LakeGeneva from "./LakeGeneva";
import Bern from "./Bern";
import Zurich from "./Zurich";
import Lauberhorn from "./Lauberhorn";
import Appenzeller from "./Appenzeller";
import "./Layout.css";

export default function Layout() {
  return (
    <Router>
      <div>
        <ul className="layout">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pageA">Highlights</Link>
          </li>
          <li>
            <Link to="/matterhorn">Matterhorn</Link>
          </li>
          <li>
            <Link to="/niesen">Niesen</Link>
          </li>
          <li>
            <Link to="/lakeGeneva">Lake Geneva</Link>
          </li>
          <li>
            <Link to="/bern">Bern</Link>
          </li>
          <li>
            <Link to="/zurich">Zurich</Link>
          </li>
          <li>
            <Link to="/lauberhorn">Lauberhorn</Link>
          </li>
          <li>
            <Link to="/appenzeller">Appenzeller Alpfahrt</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/pageA">
            <PageA />
          </Route>
          <Route path="/matterhorn">
            <Matterhorn />
          </Route>
          <Route path="/niesen">
            <Niesen />
          </Route>
          <Route path="/lakeGeneva">
            <LakeGeneva />
          </Route>
          <Route path="/bern">
            <Bern />
          </Route>
          <Route path="/zurich">
            <Zurich />
          </Route>
          <Route path="/lauberhorn">
            <Lauberhorn />
          </Route>
          <Route path="/appenzeller">
            <Appenzeller />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
