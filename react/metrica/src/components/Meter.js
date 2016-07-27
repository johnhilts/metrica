import React from 'react';

export default function Meter(props) {
  let measurement = props.measurement;
  let milimeters = measurement * 25.4;
  let centimeters = milimeters / 100;
  let meters = milimeters / 1000;
  return (
    <div>
      <div>
        <input type="text" placeholder="enter measurement" defaultValue={measurement} onChange={props.onChange} />
        &nbsp;&nbsp;
        <select>
          <option>Inches</option>
          <option>Feet</option>
        </select>
      </div>
      <div>&nbsp;</div>
      <div style={{textAlign: 'left', marginLeft: '40%', marginRight: '40%', }}>
        <div style={{paddingBottom: 10, }}>
          <span>{meters}</span>&nbsp;<span>Meters</span>
        </div>
        <div style={{paddingBottom: 10, }}>
          <span>{centimeters}</span>&nbsp;<span>Centimeters</span>
        </div>
        <div style={{paddingBottom: 10, }}>
          <span>{milimeters}</span>&nbsp;<span>Milimeters</span>
        </div>
      </div>
    </div>
  );
}
