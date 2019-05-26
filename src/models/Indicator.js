import SDG from './SDG'

class Indicator {
  constructor({label, score, status}) {
    this.label = label
    this.score = score
    this.status = status || 'gray'
  }

  // rounds the score to two decimal places
  roundedScore() {
    if(!this.score)
      return 'N/A'

    return (+this.score.toFixed(2)).toString()
  }

  // return a color for the indicator's status
  statusColor() {
    return SDG.colorScheme().find(option => option.colorName === this.status).tileColor
  }
}

export default Indicator
