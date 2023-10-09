import React, { Component } from "react";

class ResistorInfoComponent extends Component {

render() {
  const { ohmValue, tolerance } = this.props;

  return (
    <div>
      <p>
        <b>Ohm: </b> {ohmValue}
      </p>
      <p>
        <b>Tolerance: </b> {tolerance}
      </p>
    </div>
  )
}
}

export default ResistorInfoComponent;