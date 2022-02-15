import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <>
            <div className="navbar">
                <img src="./images/airbnb.png" alt="" />
            </div>
        </>
    )
  }
}
