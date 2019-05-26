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
}

export default City
