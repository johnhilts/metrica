import React from 'react';

function getLengthConversion(measurement, units, unit) {
  const getConversion = (measurement, toMetricFactor, toUsFactor) => {
    let meters = measurement * toMetricFactor;
    let inches = measurement * toUsFactor;
    return (
      [
        meters / 1000,
        meters,
        meters * 100,
        meters * 1000,
        inches,
        inches * 0.08333,
        inches * 0.00002,
      ]
    )
  }

  switch (unit) {
    case units.length.inch:
      return getConversion(measurement, 0.02540, 1);
    case units.length.foot:
      return getConversion(measurement, 0.30480, 12);
    case units.length.mile:
      return getConversion(measurement, 1609.34688, 63360.11354);
    default:
      return getConversion(measurement, 0.02540, 1);
  }
}

function getWeightConversion(measurement, units, unit) {
  const getConversion = (measurement, toMetricFactor, toUsFactor) => {
    let grams = measurement * toMetricFactor;
    let ounces = measurement * toUsFactor;
    return (
      [
        grams / 1000,
        grams,
        ounces,
        ounces * 0.06250,
        ounces * 0.00003,
      ]
    )
  }

  switch (unit) {
    case units.weight.ounce:
      return getConversion(measurement, 28.34952, 1);
    case units.weight.pound:
      return getConversion(measurement, 453.59232, 16);
    case units.weight.ton:
      return getConversion(measurement, 907184.64, 32000);
    default:
      return getConversion(measurement, 28.34952, 1);
  }
}

function getVolumeConversion(measurement, units, unit) {
  const getConversion = (measurement, factor) => {
    let liter = measurement * factor;
    return (
      [
        liter,
        liter * 1000,
      ]
    )
  }

  switch (unit) {
    case units.volume.pint:
      return getConversion(measurement, 0.47);
    case units.volume.quart:
      return getConversion(measurement, 0.96);
    case units.volume.gallon:
      return getConversion(measurement, 3.8);
    default:
      return getConversion(measurement, 0.47);
  }
}

function getTemperatureConversion(measurement) {
    let celsius = (measurement - 32) * 0.5555555;
    return (
      [
        celsius,
      ]
    )
}

function getConversions(measurement, types, type, units, unit) {
  switch (type) {
    case types.length:
      return getLengthConversion(measurement, units, unit);
    case types.weight:
      return getWeightConversion(measurement, units, unit);
    case types.volume:
      return getVolumeConversion(measurement, units, unit);
    case types.temperature:
      return getTemperatureConversion(measurement);
    default:
      return getLengthConversion(measurement, units, unit);
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

function getUnitLabelTypeByMeasurementType(types, type, unitLabels) {
  let unitLabelType = 0;
  switch (type) {
    case types.length:
      unitLabelType = unitLabels.length;
      break;
    case types.weight:
      unitLabelType = unitLabels.weight;
      break;
    case types.volume:
      unitLabelType = unitLabels.volume;
      break;
    case types.temperature:
      unitLabelType = unitLabels.temperature;
      break;
    default:
      unitLabelType = unitLabels.length;
  }

  return unitLabelType;
}

function UnitInput(props) {
  let unitLabelType = getUnitLabelTypeByMeasurementType(props.types, props.type, props.unitLabels);
  let options = unitLabelType.map((unitLabel, index)=> {
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

function getConversionLabelTypeByMeasurementType(types, type, conversionLabels) {
  let conversionLabelType = 0;
  switch (type) {
    case types.length:
      conversionLabelType = conversionLabels.length;
      break;
    case types.weight:
      conversionLabelType = conversionLabels.weight;
      break;
    case types.volume:
      conversionLabelType = conversionLabels.volume;
      break;
    case types.temperature:
      conversionLabelType = conversionLabels.temperature;
      break;
    default:
      conversionLabelType = conversionLabels.length;
  }

  return conversionLabelType;
}

function ConversionOutput(props) {
  let conversionLabelType = getConversionLabelTypeByMeasurementType(props.types, props.type, props.conversionLabels);
  let conversions = getConversions(props.measurement, props.types, props.type, props.units, props.unit);
  let conversionOutput = conversionLabelType.map((label, index) => {
    return (
      <div key={index} style={{paddingBottom: 10, }}>
        <span>{conversions[index]}</span>&nbsp;<span>{label}</span>
      </div>
    )
  });

  return (
    <div style={{textAlign: 'left', marginLeft: '40%', marginRight: '40%', }}>
      {conversionOutput}
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
