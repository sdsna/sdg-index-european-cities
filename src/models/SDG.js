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

const COLOR_SCHEME = [{
    colorName: 'green',
    tileColor: '#1c8634',
    mapColor: '#009c00',
    description: 'SDG achieved'
  },{
    colorName: 'yellow',
    tileColor: '#f2bc3c',
    mapColor: '#ffea00',
    description: 'Challenges remain'
  },{
    colorName: 'orange',
    tileColor: '#e9713a',
    mapColor: '#ff7500',
    description: 'Significant challenges remain'
  },{
    colorName: 'red',
    tileColor: '#dc3545',
    mapColor: '#c90000',
    description: 'Major challenges remain'
  },{
    colorName: 'gray',
    tileColor: '#5a5a5a',
    mapColor: '#5a5a5a',
    description: 'Data missing'
  }
]


class SDG {
  constructor({number, score, status}) {
    this.number = number
    this.score = score
    this.status = status
  }

  static colorScheme() {
    return COLOR_SCHEME
  }

  // returns the label for the given SDG number, such as 'No poverty' for 1
  static getLabel(number) {
    return SDG_LABELS[Number(number) - 1]
  }

  getLabel() {
    return this.constructor.getLabel(this.number)
  }

  // return the light color for the goal's status
  mapStatusColor() {
    return COLOR_SCHEME.find(option => option.colorName === this.status).mapColor
  }

  // return the dark color for the goal's status
  tileStatusColor() {
    return COLOR_SCHEME.find(option => option.colorName === this.status).tileColor
  }
}

export default SDG
