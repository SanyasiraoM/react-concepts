/**
 * @flow
 **/

import React, { Component } from "react";

function logProps(InputComponent) {
  return class extends React.Component {
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <InputComponent {...this.props} />;
    }
  };
}

class MyComponent extends Component {
  state = { inputValue: "" };

  onChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return <input value={this.state.inputValue} onChange={this.onChange} />;
  }
}

class UsageInRenderExample extends Component {
  render() {
    const LogComponent = logProps(MyComponent);

    return <LogComponent />;
  }
}

export default UsageInRenderExample;
