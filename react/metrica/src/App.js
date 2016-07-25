import React, { Component } from 'react';

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
          <div>
            <input type="text" placeholder="enter measurement" />
            &nbsp;&nbsp;
            <select>
              <option>Inches</option>
              <option>Feet</option>
            </select>
          </div>
          <div>&nbsp;</div>
          <div style={{textAlign: 'left', marginLeft: '40%', marginRight: '40%', }}>
            <div style={{paddingBottom: 10, }}>
              <span>2</span>&nbsp;<span>Meters</span>
            </div>
            <div style={{paddingBottom: 10, }}>
              <span>20</span>&nbsp;<span>Centimeters</span>
            </div>
            <div style={{paddingBottom: 10, }}>
              <span>2000</span>&nbsp;<span>Milimeters</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
