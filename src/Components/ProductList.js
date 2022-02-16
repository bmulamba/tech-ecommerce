import React, { Component } from "react";
import "./ProductList.css";
import data from "../data";
import { Link } from "react-router-dom";

export default class Card extends Component {
  constructor(props){
    super(props);

    // this.state = {
    // }
  }
  displayData = () => {
    

    return data.map((item) => {
      return (
        <div key={item.id}>
          
          <div className="card  m-2" >
            {item.openSpots === 0 && <div className="bag-soldOut">SOLD OUT</div>}
            {item.location === "online" && <div className="bag-soldOut">ONLINE</div>}
            <img
              className="card-img-top"
              src={`./images/${item.coverImg}`}
              alt="{item.title}"
            />
            <div className="card-body">
              <h3 className="text-capitalize"> {item.title} </h3>
              <p> <span><i className="fas fa-star text-danger "></i></span>({item.stats.reviewCount}) {item.stats.rating} . <span className="text-success">{item.location}</span> </p>
              <h4>$ {item.price}</h4>
              <Link to={`/product/${item.id}`} type="button" className="btn btn-primary btn-block">Select</Link>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    console.log(data.categories["all"]);

    

    return (
      <div className="card-flex">
        {this.displayData()}
      </div>
    );
  }
}
