import React from 'react';

function getInchConversions(measurement) {
  let milimeters = measurement * 25.4;
  return (
    {
      milimeters: milimeters,
      centimeters: milimeters / 100,
      meters: milimeters / 1000,
      kilometers: milimeters / 1000000,
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
      kilometers: meters / 1000,
    }
  )
}

function getMileConversions(measurement) {
  let kilometers = measurement * 1.6093;
  return (
    {
      kilometers: kilometers,
      centimeters: kilometers * 100000,
      milimeters: kilometers * 1000000,
      meters: kilometers * 1000,
    }
  )
}

function getConversions(measurement, units, unit) {
  switch (unit) {
    case units.inch:
      return getInchConversions(measurement);
    case units.foot:
      return getFootConversions(measurement);
    case units.mile:
      return getMileConversions(measurement);
    default:
      return getInchConversions(measurement);
  }
}

function MeasurementInput(props) {
  return (
    <div>
      <input type="text" placeholder="enter measurement" defaultValue={props.measurement} onChange={props.onMeasurementChange} />
      &nbsp;&nbsp;
      <select onChange={props.onUnitChange}>
        <option value={props.units.inch}>Inches</option>
        <option value={props.units.foot}>Feet</option>
        <option value={props.units.mile}>Miles</option>
      </select>
    </div>
  )
}

function ConversionOutput(props) {
  let measurement = props.measurement;
  let units = props.units;
  let unit = props.unit;
  let conversions = getConversions(measurement, units, unit);
  return (
    <div style={{textAlign: 'left', marginLeft: '40%', marginRight: '40%', }}>
      <div style={{paddingBottom: 10, }}>
        <span>{conversions.kilometers}</span>&nbsp;<span>Kilometers</span>
      </div>
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
  )
}

export default function Meter(props) {
  return (
    <div>
      <MeasurementInput {...props} />
      <div>&nbsp;</div>
      <ConversionOutput {...props} />
    </div>
  );
}
