import React, { Component } from "react";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Card />      
      </div>
    );
  }
}
