/**
 * @flow
 **/

import React, { Component } from "react";

function logProps(InputComponent) {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log("Current props HOC: ", this.props);
      console.log("Next props HOC: ", nextProps);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <InputComponent {...this.props} />;
    }
  };
}

class ClassMutateExample extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("Current Props MutateExample: ", this.props);
    console.log("Next Props MutateExample: ", nextProps);
  }

  static staticMethod() {
    console.log("Called static method");
  }

  render() {
    return <div />;
  }
}

const FunctionalMutateExample = () => <div />;

export default logProps(ClassMutateExample);
