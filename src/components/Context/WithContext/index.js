import React from "react";
import ThemedButton from "./ThemedButton";
import { ThemeContext } from "./contexts";

const Toolbar = (props) => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

class WithContext extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

export default WithContext;
