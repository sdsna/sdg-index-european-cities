import City from '../models/City'
import SDG from '../models/SDG'
import Indicator from '../models/Indicator'

// initialize an inidivdual SDG
const initSDG = (sdgNumber, sdgData) => {
  // indicators
  const indicators =
    Object
      .keys(sdgData)
      .filter(key => key.startsWith(`sdg${sdgNumber}_`))
      .map(key => {
        const label = key.split(" : ").pop()

        return new Indicator({
          label: label,
          score: sdgData[key],
          status: sdgData[`Dashboard: ${label}`]
        })
      })

  return new SDG({
    number:     Number(sdgNumber),
    score:      Number(sdgData[`SDG${sdgNumber}`]),
    status:     sdgData[`Dashboard SDG${sdgNumber}`],
    indicators: indicators
  })
}

// initialize an individual city
const initCity = cityData => {
  // sdg scores
  const sdgs =
    [...Array(17).keys()].map(x => ++x).map(index => initSDG(index, cityData))

  return new City({
    name:         cityData['city'],
    region:       cityData['region'],
    rank:         Number(cityData['rank']),
    score:        Number(cityData['score']),
    sdgs:         sdgs
  })
}

const loadCities = callback => {
  fetch('/data/cities.json')
    .then(response => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(data => {
      // initialize each city
      const cities = data.map(city => initCity(city))

      // trigger callback
      callback(cities)
    })
}

export default loadCities
