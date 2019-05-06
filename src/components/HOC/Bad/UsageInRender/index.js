/**
 * @flow
 **/

import UsageInRenderExample from "./UsageInRenderExample";

import React, { Component } from "react";

class HOC extends Component {
  state = { prop1: "Value1" };

  onClick = () => {
    this.setState({ prop1: "Value2" });
  };

  render() {
    return (
      <div>
        <UsageInRenderExample prop1={this.state.prop1} />
        <button onClick={this.onClick}>Change prop</button>
      </div>
    );
  }
}

export default HOC;
