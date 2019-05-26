import City from '../models/City'
import SDG from '../models/SDG'

// initialize an individual city
const initCity = city => {
  // sdg scores
  const sdgs = [...Array(17).keys()].map(x => ++x).map(index => {
    return new SDG({
      number: Number(index),
      score:  Number(city[`SDG${index}`]),
      status: city[`Dashboard SDG${index}`]
    })
  })

  return new City({
    name:         city['city'],
    region:       city['region'],
    rank:         Number(city['rank']),
    score:        Number(city['score']),
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
