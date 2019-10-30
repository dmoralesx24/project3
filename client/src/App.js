import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/exercises" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route
            exact
            path="/dashboard"
            render={props => <Dashboard {...props} 
            // isAuthed={true} 
            />
          }
          />
          <Route exact path="/users/login" render={props => <Login {...props} />} />
          <Route exact path="/users/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
// makinf changes

export default App;
