/**
 * @flow
 **/

import React from "react";
import logProps from "./HOC";

class HOCButton extends React.Component {
  consoleMethod = () => {
    console.log("consoleMethod console");
  };

  render() {
    const { children } = this.props;
    return <button>{children}</button>;
  }
}

export default logProps(HOCButton);
