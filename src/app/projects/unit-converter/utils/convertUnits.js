// /utils/convertUnits.js

const conversionTable = {
  Length: {
    Meter: 1,
    Kilometer: 0.001,
    Centimeter: 100,
    Millimeter: 1000,
    Inch: 39.3701,
    Foot: 3.28084,
    Yard: 1.09361,
    Mile: 0.000621371,
  },
  Mass: {
    Gram: 1,
    Kilogram: 0.001,
    Milligram: 1000,
    Pound: 0.00220462,
    Ounce: 0.035274,
    Ton: 0.000001,
  },
  Volume: {
    Liter: 1,
    Milliliter: 1000,
    CubicMeter: 0.001,
    Gallon: 0.264172,
    Quart: 1.05669,
    Pint: 2.11338,
    Cup: 4.22675,
    FluidOunce: 33.814,
  },
  Temperature: 'special', // handled separately
  Speed: {
    'Meter/second': 1,
    'Kilometer/hour': 3.6,
    'Mile/hour': 2.23694,
    'Foot/second': 3.28084,
    'Knot': 1.94384,
  },
}

export function convertUnits(value, from, to, category) {
  if (category === 'Temperature') {
    return convertTemperature(value, from, to)
  }

  const table = conversionTable[category]
  const valueInBase = value / table[from]
  const converted = valueInBase * table[to]
  return converted
}

function convertTemperature(value, from, to) {
  if (from === to) return value

  let celsius
  // Convert to Celsius
  switch (from) {
    case 'Celsius':
      celsius = value
      break
    case 'Fahrenheit':
      celsius = (value - 32) * (5 / 9)
      break
    case 'Kelvin':
      celsius = value - 273.15
      break
  }

  // Convert from Celsius to target
  switch (to) {
    case 'Celsius':
      return celsius
    case 'Fahrenheit':
      return celsius * (9 / 5) + 32
    case 'Kelvin':
      return celsius + 273.15
  }
}
