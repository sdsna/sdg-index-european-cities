const SDG_LABELS = [
  "No poverty",
  "Zero hunger",
  "Good health and well-being",
  "Quality education",
  "Gender equality",
  "Clean water and sanitation",
  "Affordable and clean energy",
  "Decent work and economic growth",
  "Industry, innovation and infrastructure",
  "Reduced inequalities",
  "Sustainable cities and communities",
  "Responsible consumption and production",
  "Climate action",
  "Life below water",
  "Life on land",
  "Peace, justice and strong institutions",
  "Partnerships for the goals"
]

class SDG {
  constructor({number, score, status}) {
    this.number = number
    this.score = score
    this.status = status
  }

  // returns the label for the given SDG number, such as 'No poverty' for 1
  static getLabel(number) {
    return SDG_LABELS[Number(number) - 1]
  }

  getLabel() {
    return this.constructor.getLabel(this.number)
  }
}

export default SDG
