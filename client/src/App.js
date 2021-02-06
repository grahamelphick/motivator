import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Journal from "./pages/Journal";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import NewGoal from "./pages/NewGoal";
// import firebase from "firebase";

function App() {
  // const firebaseApp = firebase.apps[0]; 
  return (
    <div>
    {/* <div>
      <h1>React & Firebase</h1>
      <h2>By @farazamiruddin</h2>
      <code> */}
        {/* <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre> */}
      {/* </code>
    </div> */}
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
          <Route exact path="/new-goal">
            <NewGoal></NewGoal>
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
    </div>
  );
}

export default App;
