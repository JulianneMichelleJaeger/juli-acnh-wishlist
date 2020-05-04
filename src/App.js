import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.scss';

import Navbar from "./components/Navbar.js";
import About from "./pages/About.js";
import Wishlist from "./pages/Wishlist.js";
import Thanks from "./pages/Thanks.js";
import Donate from "./pages/Donate.js";

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="navbar">
          <Navbar />
        </div>

        <Switch>
          <Route exact path="/">
            <div className="content pink">
              <About />
            </div>
          </Route>
          <Route path="/wishlist">
            <div className="content green">
              <Wishlist />
            </div>
          </Route>
          <Route path="/thanks">
            <div className="content blue">
              <Thanks />
            </div>
          </Route>
          <Route path="/donate">
            <div className="content purple">
              <Donate />
            </div>
          </Route>
        </Switch>
      </div>
      <div className="footer">
        This is a fan-made website that claims no ownership of any intellectual property associated with Nintendo or Animal Crossing.
      </div>
    </Router>
  );
}

export default App;
