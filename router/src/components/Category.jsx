import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Nike from "./Nike";
import Adidas from "./Adidas";

function Contact() {
  return (
    <div>
      <Router>
        <li>
          <Link to="/category/shoes">Shoes</Link>
        </li>
        <li>
          <Link to="/category/boots">Boots</Link>
        </li>
        <li>
          <Link to="/category/footwear">Footwear</Link>
        </li>
        <Route path="/category/shoes" exact render={() => <h3> {Nike}</h3>} />
        <Route path="/category/boots" exact render={() => <h3> {Adidas}</h3>} />
        <Route
          path="/category/footwear"
          exact
          render={() => <h3> GO barefoot</h3>}
        />
      </Router>
    </div>
  );
}
export default Contact;