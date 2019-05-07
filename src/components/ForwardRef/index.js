/**
 * @flow
 **/

import React, { Component } from "react";
import HOCButton from "./HOCButton";

class ForwardRefExample extends Component {
  componentDidMount() {
    this.buttonRef.current.consoleMethod();
  }
  render() {
    this.buttonRef = React.createRef();
    return <HOCButton ref={this.buttonRef}>Click me!</HOCButton>;
  }
}

export default ForwardRefExample;
