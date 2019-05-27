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
    mapColor: '#00c600',
    mapStrokeColor: '#1c8634',
    description: 'SDG achieved'
  },{
    colorName: 'yellow',
    tileColor: '#f2bc3c',
    mapColor: '#ffea00',
    mapStrokeColor: '#f2bc3c',
    description: 'Challenges remain'
  },{
    colorName: 'orange',
    tileColor: '#e9713a',
    mapColor: '#ff7500',
    mapStrokeColor: '#c35900',
    description: 'Significant challenges remain'
  },{
    colorName: 'red',
    tileColor: '#dc3545',
    mapColor: '#c90000',
    mapStrokeColor: '#710000',
    description: 'Major challenges remain'
  },{
    colorName: 'gray',
    tileColor: '#5a5a5a',
    mapColor: '#5a5a5a',
    mapStrokeColor: '#2d2d2d',
    description: 'Data missing'
  }
]


class SDG {
  constructor({number, score, status, indicators}) {
    this.number     = number
    this.score      = score
    this.status     = status
    this.indicators = indicators || []
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

  // return the color option for this SDG
  getColorOption() {
    return COLOR_SCHEME.find(option => option.colorName === this.status)
  }

  // return the light color for the goal's status
  mapStatusColor() {
    return this.getColorOption().mapColor
  }

  // return the stroke color for the goal's statu
  mapStatusStrokeColor() {
    return this.getColorOption().mapStrokeColor
  }

  // return the dark color for the goal's status
  tileStatusColor() {
    return this.getColorOption().tileColor
  }
}

export default SDG
