// /utils/weatherBackgrounds.js

export function getBackgroundForWeather(icon) {
  const code = icon.slice(0, 2)

  switch (code) {
    case '01':
      return 'clear'
    case '02':
    case '03':
    case '04':
      return 'clouds'
    case '09':
    case '10':
      return 'rain'
    case '11':
      return 'thunderstorm'
    case '13':
      return 'snow'
    case '50':
      return 'mist'
    default:
      return 'default'
  }
}
