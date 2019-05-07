import React from "react";
import SearchBoxHOC from "./SearchBoxHOC";
import "./styles.css";

class SearchBox1 extends React.Component {
  render() {
    const { onChange, onClick, text } = this.props;
    return (
      <div className="App">
        <p>{text}</p>
        <input type="text" onChange={onChange} value={text} />
        <button onClick={onClick}>Click me</button>
      </div>
    );
  }
}
export default SearchBoxHOC(SearchBox1);
