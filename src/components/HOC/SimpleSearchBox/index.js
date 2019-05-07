import React from "react";
import SearchBox2 from "./SearchBox2";
import SearchBox1 from "./SearchBox1";

import "./styles.css";

function SimpleSearchBox() {
  return (
    <div className="App">
      <h1>Hello this is simple input box </h1>
      <SearchBox1 />
      <br />
      <SearchBox2 />
    </div>
  );
}
export default SimpleSearchBox;
