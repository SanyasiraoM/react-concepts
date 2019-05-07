import React from "react";

function SearchBoxHOC(WrappedComponent) {
  return class Hoc extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: ""
      };
    }
    onChange = e => {
      this.setState({ text: e.target.value });
    };
    onClick = () => {
      this.setState({ text: "" });
    };
    render() {
      const { text } = this.state;
      return (
        <WrappedComponent
          onChange={this.onChange}
          onClick={this.onClick}
          text={text}
        />
      );
    }
  };
}
export default SearchBoxHOC;
