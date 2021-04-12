import React, { Component } from "react";
import "./ProductInfo.css";
class ProductInfo extends Component {
  constructor({ info }) {
    super();
    const { title, description, rating, price, colour, sizes, features } = info;
    this.state = {
      title,
      description,
      rating,
      price,
      colour,
      sizes,
      features,
    };
  }
  render() {
    return (
      <div className="productInfo">
        <h2>{this.state.title}</h2>
        <h3>{this.state.description}</h3>
        <h4 className="__price">{this.state.price}</h4>
        <div className="containColor">
          <h6 className="__colour">{this.state.colour.name} :</h6>
          <div className="circle"></div>
        </div>
        <ul className="__features">
          {this.state.features.map((feature , index) => {
            return <li key={index}>{feature}</li>;
          })}
        </ul>
        <div className="containColor">
          <label htmlFor="sizes">Sizes</label>
          <select name="sizes" id="sizes">
            {this.state.sizes.map((size ,index) => {
              return (
                <option key={index} value={size} className="__sizes">
                  {size}
                </option>
              );
            })}
          </select>
        </div>
        <div className="__addToCart">
          <button>Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
