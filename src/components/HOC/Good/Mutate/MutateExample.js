/**
 * @flow
 **/

import React, { Component } from "react";
import hoistNonReactStatic from "hoist-non-react-statics";

function logProps(InputComponent) {
  class LogPropsComponent extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log("Current props HOC: ", this.props);
      console.log("Next props HOC: ", nextProps);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <InputComponent {...this.props} />;
    }
  }
  hoistNonReactStatic(LogPropsComponent, InputComponent);
  return LogPropsComponent;
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
