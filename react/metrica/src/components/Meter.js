import React from 'react';

function getLengthConversion(measurement, units, unit) {

  const getConversion = (measurement, toMetricFactor, toUsFactor) => {
    let meters = measurement * toMetricFactor;
    let inches = measurement * toUsFactor;
    return (
      [
        inches,
        inches * 0.08333,
        inches * 0.00002,
        meters / 1000,
        meters,
        meters * 100,
        meters * 1000,
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
    case units.length.kilometer:
      return getConversion(measurement, 1000, 39370.07874);
    case units.length.meter:
      return getConversion(measurement, 1, 39.37008);
    case units.length.centimeter:
      return getConversion(measurement, 0.01, 0.39370);
    case units.length.milimeter:
      return getConversion(measurement, 0.001, 0.03937);
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
        ounces,
        ounces * 0.06250,
        ounces * 0.00003,
        grams / 1000,
        grams,
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
    case units.weight.kilogram:
      return getConversion(measurement, 1000, 35.27397);
    case units.weight.gram:
      return getConversion(measurement, 1, 0.03527);
    default:
      return getConversion(measurement, 28.34952, 1);
  }
}

function getVolumeConversion(measurement, units, unit) {
  const getConversion = (measurement, toMetricFactor, toUsFactor) => {
    let liters = measurement * toMetricFactor;
    let pints = measurement * toUsFactor;
    return (
      [
        pints,
        pints * 0.5,
        pints * 0.125,
        liters,
        liters * 1000,
      ]
    )
  }

  switch (unit) {
    case units.volume.pint:
      return getConversion(measurement, 0.47, 1);
    case units.volume.quart:
      return getConversion(measurement, 0.96, 2);
    case units.volume.gallon:
      return getConversion(measurement, 3.8, 8);
    case units.volume.liter:
      return getConversion(measurement, 1, 2.1);
    case units.volume.mililiter:
      return getConversion(measurement, 0.001, 0.0021);
    default:
      return getConversion(measurement, 0.47, 1);
  }
}

function getTemperatureConversion(measurement, units, unit) {
  const getConversion = (measurement, isToMetric) => {
    let celsius = isToMetric ? (measurement - 32) * 0.5555555 : measurement;
    let fahrenheit = isToMetric ? measurement : (measurement * 1.8) + 32;
    return (
      [
        fahrenheit,
        celsius,
      ]
    )
  }

  switch (unit) {
    case units.temperature.fahrenheit:
      return getConversion(measurement, true);
    case units.temperature.celsius:
      return getConversion(measurement, false);
    default:
      return getConversion(measurement, true);
  }
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
      return getTemperatureConversion(measurement, units, unit);
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

function getConversionLabelTypeByMeasurementType(types, type, unitLabels) {
  let conversionLabelType = 0;
  switch (type) {
    case types.length:
      conversionLabelType = unitLabels.length;
      break;
    case types.weight:
      conversionLabelType = unitLabels.weight;
      break;
    case types.volume:
      conversionLabelType = unitLabels.volume;
      break;
    case types.temperature:
      conversionLabelType = unitLabels.temperature;
      break;
    default:
      conversionLabelType = unitLabels.length;
  }

  return conversionLabelType;
}

function ConversionOutput(props) {
  let conversionLabelType = getConversionLabelTypeByMeasurementType(props.types, props.type, props.unitLabels);
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
