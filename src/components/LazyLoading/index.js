/**
 * @flow
 **/

import React, { Component, Suspense } from "react";
const LazyPDFDocument = React.lazy(() => import("../../components/PDFPreview"));

class LazyLoading extends Component {
  state = {
    name: "",
    showPDFPreview: false
  };

  handleClick = () => this.setState({ showPDFPreview: true });

  handleNameChange = (event) => this.setState({ name: event.target.value });

  render() {
    const greeting = `Hello ${this.state.name}`;

    return (
      <div>
        <input
          placeholder="Enter your name"
          type="text"
          onChange={this.handleNameChange}
        />

        <button onClick={this.handleClick}>Generate PDF</button>
        {this.state.showPDFPreview && (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyPDFDocument title={greeting} />
          </Suspense>
        )}
      </div>
    );
  }
}

export default LazyLoading;
