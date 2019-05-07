import React from "react";
import SearchBoxHOC from "./SearchBoxHOC";
import "./styles.css";

class SearchBox2 extends React.Component {
  render() {
    const { onChange, onClick, text } = this.props;
    return (
      <div className="App">
        <button onClick={onClick}>Click me</button>
        <input type="text" onChange={onChange} value={text} />
        <p>{text}</p>
      </div>
    );
  }
}
export default SearchBoxHOC(SearchBox2);
