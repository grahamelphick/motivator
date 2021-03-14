import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/Login";
import SignUp from "./components/Signup";
import { AuthProvider } from "./components/Auth";
import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Journal from "./pages/Journal";
import Resources from "./pages/Resources";
import Mantra from "./pages/Mantra"
import { Navbar } from "react-bootstrap";
// import Login from "./pages/LoginPage";
// import NewGoal from "./pages/NewGoal";
// import { useUser } from 'reactfire';
// import Logout from "./components/Logout/";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import firebase from "firebase/app";
// import "firebase/auth";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router basename="/">
          <Switch>
            <Route exact path={["/", "/dashboard"]}>
              <NavBar />
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/goals">
              <NavBar />
              <Goals></Goals>
            </Route>
            <Route exact path="/journal">
              <NavBar />
              <Journal></Journal>
            </Route>
            <Route exact path="/resources">
              <NavBar />
              <Resources></Resources>
            </Route>
            <Route exact path="/mantra">
              <NavBar />
              <Mantra></Mantra>
            </Route>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;

{
  /* <AuthProvider>
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </Router>
</AuthProvider> */
}
