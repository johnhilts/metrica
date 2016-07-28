import React, { Component } from 'react';
import Meter from '../components/Meter';

class MeterContainer extends Component {
  types = {length: 0, weight: 1, volume: 2, temperature: 3, };
  units = {
    length: {inch: 0, foot: 1, mile: 2, },
    weight: {ounce: 0, pound: 1, ton: 2, },
    volume: {pint: 0, quart: 1, gallon: 2, },
    temperature: {fahrenheit: 0, },
  };
  unitLabels = {
    length: ['Inches', 'Feet', 'Miles', ],
    weight: ['Ounces', 'Pounds', 'Tons', ],
    volume: ['Pints', 'Quarts', 'Gallons', ],
    temperature: ['Fahrenheit', ],
  };

  constructor() {
    super();

    this.state = {
      measurement: 1,
      unit: this.units.length.inch,
      type: this.types.length,
    }
  }

  handleMeasurementChange = (event) => {
    this.setState({measurement: Number(event.target.value)});
  }

  handleUnitChange = (event) => {
    this.setState({unit: Number(event.target.value)});
  }

  handleTypeChange = (event) => {
    this.setState({type: Number(event.target.value)});
  }

  render() {
    return (
      <Meter
        measurement={this.state.measurement}
        onMeasurementChange={this.handleMeasurementChange}
        onUnitChange={this.handleUnitChange}
        onTypeChange={this.handleTypeChange}
        units={this.units}
        unit={this.state.unit}
        unitLabels={this.unitLabels}
        types={this.types}
        type={this.state.type}
      />
    )
  }

}

export default MeterContainer;
