import React, { Component } from "react";

class Suraj extends Component {
  constructor() {
    super();
    this.state = {
      data: "TATA",
    };
  }
  apple() {
    this.setState({ data: "Maruti" });
  }

  render() {
    return (
      <div className="Suraj">
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>Update data</button>
      </div>
    );
  }
}

export default Suraj;
