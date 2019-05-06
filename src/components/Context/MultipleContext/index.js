/**
 * @flow
 **/

import React, { Component } from "react";

import { FirstContext, SecondContext } from "./contexts";

const ContextConsumer = () => (
  <FirstContext.Consumer>
    {(context1Value) => {
      console.log("context1Value", context1Value);
      return (
        <SecondContext.Consumer>
          {(context2Value) => {
            console.log("context2Value", context2Value);
            return <div />;
          }}
        </SecondContext.Consumer>
      );
    }}
  </FirstContext.Consumer>
);

class MultipleContext extends Component {
  render() {
    return (
      <FirstContext.Provider value={{ context1: "Name" }}>
        <SecondContext.Provider>
          <ContextConsumer />
        </SecondContext.Provider>
      </FirstContext.Provider>
    );
  }
}

export default MultipleContext;
