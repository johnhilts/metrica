import React, { Component } from 'react';
import Meter from '../components/Meter';

class MeterContainer extends Component {
  constructor() {
    super();

    this.state = {
      measurement: 1,
    }
  }

  handleChange = (event) => {
    this.setState({measurement: event.target.value});
  }

  render() {
    return <Meter measurement={this.state.measurement} onChange={this.handleChange} />
  }

}

export default MeterContainer;
