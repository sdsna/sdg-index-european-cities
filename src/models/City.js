class City {
  constructor({name,  score, rank, sdgs, region}) {
    this.name = name
    this.region = region
    this.score = score
    this.rank = rank
    this.sdgs = sdgs
  }

  // Return the SDG instance
  getSDG(sdg) {
    return this.sdgs[Number(sdg) - 1]
  }

  // Return lowercase slug without any spaces
  // The Hague -> thehague
  slug() {
    return this.name.toLowerCase().replace(/ /g,'')
  }

  // Return the url for the city
  url() {
    return `/${this.slug()}`
  }

  localeCompare(otherCity) {
    return this.name.localeCompare(otherCity.name)
  }
}

export default City
