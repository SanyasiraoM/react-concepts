/**
 * @flow
 **/

import React, { Component } from "react";
import withStrictMode from "./withStrictMode";

class StrictMode extends Component {
  // attached to each new instance of the class/prototype
  state = { a: 1, b: 2, eval: 3 };

  componentWillMount() {
    console.log("In componentWillMount");
  }

  render() {
    return <div ref="strict_mode" />;
  }
}

export default withStrictMode(StrictMode);
