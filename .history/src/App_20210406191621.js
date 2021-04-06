import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Create from "./pages/create";
import Post from "./pages/post";
import NoMatch from "./pages/no-match";
import Login from "./pages/login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./pages/privateRoute"

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <h2>Enrique Galindo</h2>
        </Link>
      </nav>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/create" component={Create} />
            <Route path="/login" component={Login} />
            <Route path="/404" component={NoMatch} />
            <Route path="/:slug" component={Post} />
      </main>
          </Switch>
        </AuthProvider>
    </Router>
  );
}

export default App;
