const LABELS = [
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

// Converts SDG into its label
// Expects input: "SDG12" or "SDG6"
const getSDGLabel = sdg => {
  const sdgNumber = Number(sdg.substring(3))

  return LABELS[sdgNumber];
}

export default getSDGLabel
