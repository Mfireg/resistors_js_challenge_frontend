import React, { Component } from 'react';
import axios from 'axios';

class ToleranceComboBoxComponent extends Component {
  constructor() {
    super();
    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/retrieve/tolerances')
      .then(response => {
        const options = response.data.map(item => ({
          value: item.value,
          label: item.label
        }));

        options.unshift({
          value: "",
          label: "No Color"
        });

        this.setState({ options });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  handleComboBoxChange = event => {
    this.props.onValueChange(event.target.value);
  };

  render() {
    const { options } = this.state;

    return (
      <div>
        <h2>Tolerance</h2>
        <select
          style={{ width: 600 }}
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

export default ToleranceComboBoxComponent;
