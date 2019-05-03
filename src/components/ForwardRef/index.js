import React from "react";
import Context from "../Context/WithContext";

class ForwardRef extends Context {
  render() {
    const FancyButton = React.forwardRef((props, ref) => {
      console.log("ref", ref);
      return (
        <button ref={ref} className="FancyButton">
          {props.children}
        </button>
      );
    });

    const ref = React.createRef();
    return (
      <div>
        <FancyButton ref={ref}>Click me!</FancyButton>
      </div>
    );
  }
}

export default ForwardRef;
