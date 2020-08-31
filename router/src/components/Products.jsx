import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Nike from "./Nike";
import Adidas from "./Adidas";

import "./products.css";
function About() {
  return (
    <Router>
      <div className="prod">
        <Switch>
          <div className="products">
            <h3>Products</h3>
            <ul>
              <li>
                <Link to="/products/1">NIKE Sneakers</Link>
              </li>
              <li>
                <Link to="/products/2">ADIDAS Shoes</Link>
              </li>
            </ul>
          </div>
        </Switch>
        <div className="productsContainer">
          <div className="productsDetail">
            <Route path="/products/1" component={Nike} />
            <Route path="/products/2" exact component={Adidas} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default About;