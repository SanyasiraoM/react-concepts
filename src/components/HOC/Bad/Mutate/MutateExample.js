/**
 * @flow
 **/

import React, { Component } from "react";

function logProps(InputComponent) {
  InputComponent.prototype.componentWillReceiveProps = function(nextProps) {
    console.log("Current props HOC: ", this.props);
    console.log("Next props HOC: ", nextProps);
  };
  // The fact that we're returning the original input is a hint that it has
  // been mutated.
  return InputComponent;
}

class ClassMutateExample extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("Current Props MutateExample: ", this.props);
    console.log("Next Props MutateExample: ", nextProps);
  }

  render() {
    return <div />;
  }
}

const FunctionalMutateExample = () => <div />;

export default logProps(ClassMutateExample);
