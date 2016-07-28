import React, { Component } from 'react';
import Meter from '../components/Meter';

class MeterContainer extends Component {
  units = {inch: 0, foot: 1, };

  constructor() {
    super();

    this.state = {
      measurement: 1,
      unit: this.units.inch,
    }
  }

  handleMeasurementChange = (event) => {
    this.setState({measurement: Number(event.target.value)});
  }

  handleUnitChange = (event) => {
    this.setState({unit: Number(event.target.value)});
  }

  render() {
    return (
      <Meter
        measurement={this.state.measurement}
        onMeasurementChange={this.handleMeasurementChange}
        onUnitChange={this.handleUnitChange}
        units={this.units}
        unit={this.state.unit}
      />
    )
  }

}

export default MeterContainer;
