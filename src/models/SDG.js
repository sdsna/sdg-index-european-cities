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
  constructor({number, score}) {
    this.number = number
    this.score = score
  }

  getLabel() {
    return SDG_LABELS[this.number - 1]
  }
}

export default SDG
