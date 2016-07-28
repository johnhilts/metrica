import React from 'react';

function getInchConversions(measurement) {
  let milimeters = measurement * 25.4;
  return (
    {
      milimeters: milimeters,
      centimeters: milimeters / 100,
      meters: milimeters / 1000,
    }
  )
}

function getFootConversions(measurement) {
  let meters = measurement * 0.3048;
  return (
    {
      meters: meters,
      centimeters: meters * 100,
      milimeters: meters * 1000,
    }
  )
}

function getConversions(measurement, units, unit) {
  switch (unit) {
    case units.inch:
      return getInchConversions(measurement);
    case units.foot:
      return getFootConversions(measurement);
    default:
      return getInchConversions(measurement);
  }
}

export default function Meter(props) {
  let measurement = props.measurement;
  let units = props.units;
  let unit = props.unit;
  let conversions = getConversions(measurement, units, unit);
  return (
    <div>
      <div>
        <input type="text" placeholder="enter measurement" defaultValue={measurement} onChange={props.onMeasurementChange} />
        &nbsp;&nbsp;
        <select onChange={props.onUnitChange}>
          <option value={units.inch}>Inches</option>
          <option value={units.foot}>Feet</option>
        </select>
      </div>
      <div>&nbsp;</div>
      <div style={{textAlign: 'left', marginLeft: '40%', marginRight: '40%', }}>
        <div style={{paddingBottom: 10, }}>
          <span>{conversions.meters}</span>&nbsp;<span>Meters</span>
        </div>
        <div style={{paddingBottom: 10, }}>
          <span>{conversions.centimeters}</span>&nbsp;<span>Centimeters</span>
        </div>
        <div style={{paddingBottom: 10, }}>
          <span>{conversions.milimeters}</span>&nbsp;<span>Milimeters</span>
        </div>
      </div>
    </div>
  );
}
