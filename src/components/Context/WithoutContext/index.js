import React from "react";

const Toolbar = (props) => {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
};

const ThemedButton = (props) => {
  return <button theme={props.theme}>{props.theme}</button>;
};

class WithoutContext extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

export default WithoutContext;
