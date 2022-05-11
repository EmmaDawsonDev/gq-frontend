export interface IQuestion {
  _id: string
  type: 'Feature'
  properties: {
    city: string
    question: string
    answered: boolean
  }
  geometry: {
    type: 'Point'
    coordinates: [number, number]
  }
}
