/**
 * @flow
 **/

import React, { Component } from "react";

class WindowExample extends Component {
  componentDidMount() {
    console.log("window.location.href", window.location.href);
    console.log("window.location.hostname", window.location.hostname);
    console.log("window.location.pathname", window.location.pathname);
    console.log("window.location.protocol", window.location.protocol);
    // console.log(
    //   "window.location.assign",
    //   window.location.assign("https://www.w3schools.com")
    // );
  }
  render() {
    return <div />;
  }
}

export default WindowExample;
