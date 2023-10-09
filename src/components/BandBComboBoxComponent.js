import React, { Component } from 'react';

class BandBComboBoxComponent extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        { value: "black", label: "Black" },
        { value: "brown", label: "Brown" },
        { value: "red", label: "Red" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "violet", label: "Violet" },
        { value: "gray", label: "Gray" },
        { value: "white", label: "White" },
      ],
    };
  }

  handleComboBoxChange = event => {
    this.props.onValueChange(event.target.value);
  };

  render() {
    const { options } = this.state;

    return (
      <div>
        <h2>Second Color</h2>
        <select
          style={{width: 600}}
          className="form-select"
          onChange={this.handleComboBoxChange}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default BandBComboBoxComponent;
