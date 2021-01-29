import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Mantra from "./components/Mantra";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Mantra></Mantra>
        {/* <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
