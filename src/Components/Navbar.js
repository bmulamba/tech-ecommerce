import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return(
      < >
        <div className="navbar">
            <img src="./images/phone-logo.jpg" alt=""/>
              <ul className="navb">
                <li>All</li>
                <li>Tech</li>
                <li>Phone</li>
              </ul>
              <Link to="/" className="item">
                <h4><i className="fas fa-cart-plus text-dark"></i></h4>
              </Link>
        </div>           
      </>
    )
  }
}
