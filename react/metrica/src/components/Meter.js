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
    case units.length.inch:
      return getInchConversions(measurement);
    case units.length.foot:
      return getFootConversions(measurement);
    case units.length.mile:
      return getMileConversions(measurement);
    default:
      return getInchConversions(measurement);
  }
}

function TypeInput(props) {
  return (
    <div>
      <input type="radio" id="radLength" name="conversionType" defaultChecked="checked" defaultValue={props.types.length} onChange={props.onTypeChange} />
      <label htmlFor="radLength">Length</label>
      &nbsp; &nbsp;
      <input type="radio" id="radWeight" name="conversionType" defaultValue={props.types.weight} onChange={props.onTypeChange} />
      <label htmlFor="radWeight">Weight</label>
      &nbsp; &nbsp;
      <input type="radio" id="radVolume" name="conversionType" defaultValue={props.types.volume} onChange={props.onTypeChange} />
      <label htmlFor="radVolume">Volume</label>
      &nbsp; &nbsp;
      <input type="radio" id="radTempurature" name="conversionType" defaultValue={props.types.temperature} onChange={props.onTypeChange} />
      <label htmlFor="radTempurature">Temperature</label>
    </div>
  )
}

function UnitInput(props) {
  let unitType = 0;
  switch (props.type) {
    case props.types.length:
      unitType = props.unitLabels.length;
      break;
    case props.types.weight:
      unitType = props.unitLabels.weight;
      break;
    case props.types.volume:
      unitType = props.unitLabels.volume;
      break;
    case props.types.temperature:
      unitType = props.unitLabels.temperature;
      break;
    default:
      unitType = props.unitLabels.length;
  }
  let options = unitType.map((unitLabel, index)=> {
    return <option key={index} value={index}>{unitLabel}</option>
  });
  return (
    <select onChange={props.onUnitChange}>
      {options}
    </select>
  )
}

function MeasurementInput(props) {
  return (
    <div>
      <input type="text" placeholder="enter measurement" defaultValue={props.measurement} onChange={props.onMeasurementChange} />
      &nbsp;&nbsp;
      <UnitInput {...props} />
    </div>
  )
}

function ConversionOutput(props) {
  let conversions = getConversions(props.measurement, props.units, props.unit);
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
    <div style={{textAlign: 'center', marginLeft: 'auto' , marginRight: 'auto', paddingTop: '20%', paddingBottom: 0, }}>
      <TypeInput {...props} />
      <div>&nbsp;</div>
      <MeasurementInput {...props} />
      <div>&nbsp;</div>
      <ConversionOutput {...props} />
    </div>
  );
}
