import React, { Component } from "react";

class Goat extends Component {
  constructor() {
    super();
    this.state = {
      data: "This is Goat",
    };
  }
  apple()
  {
    this.setState({data:"This is goat"})
  }
  render() {
    return (
      <div className="Goat">
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}> Update Data </button>
      </div>
    );
  }
}

export default Goat;
