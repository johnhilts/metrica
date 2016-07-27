import React, { Component } from 'react';
import MeterContainer from './containers/MeterContainer';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{textAlign: 'center', marginLeft: 'auto' , marginRight: 'auto', paddingTop: '20%', paddingBottom: 0, }}>
          <input type="radio" id="radLength" name="conversionType" defaultChecked="checked" /><label htmlFor="radLength">Length</label>
          &nbsp; &nbsp;
          <input type="radio" id="radWeight" name="conversionType" /><label htmlFor="radWeight">Weight</label>
          &nbsp; &nbsp;
          <input type="radio" id="radVolume" name="conversionType" /><label htmlFor="radVolume">Volume</label>
          &nbsp; &nbsp;
          <input type="radio" id="radTempurature" name="conversionType" /><label htmlFor="radTempurature">Temperature</label>
          <div>&nbsp;</div>
            <MeterContainer />
        </div>
      </div>
    );
  }
}

export default App;
