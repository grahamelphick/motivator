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
import { useUser } from 'reactfire';
import Login2 from "./components/Login2.js";
import Logout from "./components/Logout.js";
import Signup from "./components/Signup";
import firebase from "firebase/app";
import "firebase/auth";

function App() {

 
  const user = useUser();


  return (
    <div>
    {/* <div className="App">
      {
        user &&
        <Logout />
      }
      {
        !user &&
        <>
          <Signup />
          <Login />
        </>
      }
    </div> */}
    {/* // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text" name="email" placeholder="email"></input>
    //     <input type="text" name="password" placeholder="password"></input>
    //     <input type="submit" name="submit"></input>
    //   </form> */}
    <div>  
      <Router basename="/">
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
      </Router>
      </div>
    </div>
  );
}

export default App;