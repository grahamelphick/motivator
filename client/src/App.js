import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Journal from "./pages/Journal";
import Resources from "./pages/Resources";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/dashboard"]}>
            <Dashboard></Dashboard>
          </Route>
          <Route exact path={["/login"]}>
            <Login></Login>
          </Route>
          <Route exact path="/goals">
            <Goals></Goals>
          </Route>
          <Route exact path="/journal">
            <Journal></Journal>
          </Route>
          <Route exact path="/resources">
            <Resources></Resources>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
