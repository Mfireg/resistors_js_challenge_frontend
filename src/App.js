import './assets/css/App.css';
import React, { Component } from 'react';
import BandAComboBoxComponent from './components/BandAComboBoxComponent';
import BandBComboBoxComponent from './components/BandBComboBoxComponent';
import MultiplierComboBoxComponent from './components/MultiplierComboBoxComponent';
import ToleranceComboBoxComponent from './components/ToleranceComboBoxComponent';
import ResistorInfoComponent from './components/ResistorInfoComponent';
import Navbar from './components/menus/NavbarComponent';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedBandAValue: 'brown',
      selectedBandBValue: 'black',
      selectedMultiplierValue: 'silver',
      selectedToleranceValue: 'No Color',
      ohmValue: null,
      tolerance: null,
    };
  }

  handleBandAValueChange = (selectedValue) => {
    console.log(selectedValue);
    this.setState({ selectedBandAValue: selectedValue });
  };

  handleBandBValueChange = (selectedValue) => {
    console.log("B");
    this.setState({ selectedBandBValue: selectedValue });
  };

  handleMultiplierValueChange = (selectedValue) => {
    console.log("C");
    this.setState({ selectedMultiplierValue: selectedValue });
  };

  handleToleranceValueChange = (selectedValue) => {
    if (selectedValue === "No Color") {
      selectedValue = "no-color"
    }
    this.setState({ selectedToleranceValue: selectedValue });
  };

  componentDidMount(){
    this.calculateResistorProperties();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.selectedBandAValue !== this.state.selectedBandAValue ||
      prevState.selectedBandBValue !== this.state.selectedBandBValue ||
      prevState.selectedMultiplierValue !== this.state.selectedMultiplierValue ||
      prevState.selectedToleranceValue !== this.state.selectedToleranceValue
    ) {
      this.calculateResistorProperties();
    }
  }

  calculateResistorProperties() {
    let data = {
      "bandAColor": this.state.selectedBandAValue,
      "bandBColor": this.state.selectedBandBValue,
      "bandCColor": this.state.selectedMultiplierValue,
      "bandDColor": this.state.selectedToleranceValue
    }

    axios.post('http://localhost:3001/challenge/resistors-info', data)
      .then(response => {
        const { ohmValue, tolerance } = response.data;
        this.setState({ ohmValue, tolerance });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const {
      selectedBandAValue,
      selectedBandBValue,
      selectedMultiplierValue,
      selectedToleranceValue,
    } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="grid-container">
          <div className="div-left">
            <BandAComboBoxComponent
              selectedValue={selectedBandAValue}
              onValueChange={this.handleBandAValueChange}
            />
            <BandBComboBoxComponent
              selectedValue={selectedBandBValue}
              onValueChange={this.handleBandBValueChange}
            />
            <MultiplierComboBoxComponent
              selectedValue={selectedMultiplierValue}
              onValueChange={this.handleMultiplierValueChange}
            />
            <ToleranceComboBoxComponent
              selectedValue={selectedToleranceValue}
              onValueChange={this.handleToleranceValueChange}
            />
          </div>
          <div className="div-right">
            <div className="resistor-image">
              <div className="resistor">
                <div className="right-connector"></div>
                <div className={`stripe stripe1 ${selectedBandAValue}`}></div>
                <div className={`stripe stripe2 ${selectedBandBValue}`}></div>
                <div className={`stripe stripe3 ${selectedMultiplierValue}`}></div>
                <div className={`stripe stripe4 ${selectedToleranceValue}`}></div>
                <div className="right-connector"></div>
              </div>
            </div>
            <div className='resistor-info'>
              <ResistorInfoComponent
                ohmValue={this.state.ohmValue}
                tolerance={this.state.tolerance}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
