import React, { Component } from "react";

function withRestrictMode(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <React.StrictMode>
          <WrappedComponent {...this.props} />
        </React.StrictMode>
      );
    }
  };
}

export default withRestrictMode;
