import React, { Component } from "react";
import "./Card.css";
import data from "./../data";

export default class Card extends Component {
  displayData = () => {
    return data.map((item) => {
      return (
        <div key={item.id}>
          <div className="card  m-2" >
            <img
              className="card-img-top"
              src={`./images/${item.coverImg}`}
              alt="{item.title}"
            />
            <div className="card-body">
              <h3 className="text-capitalize"> {item.title} </h3>
              <p> {item.description}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="card-flex">
        {this.displayData()}
      </div>
    );
  }
}
