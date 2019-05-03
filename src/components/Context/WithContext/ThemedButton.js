import React from "react";
import { ThemeContext } from "./contexts";

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <button theme={this.context}>{this.context}</button>;
  }
}

export default ThemedButton;
