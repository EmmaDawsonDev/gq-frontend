interface IPosition {
  lat: number
  lng: number
}

export const haversineDistance = (prevPosition: IPosition, currentPosition: IPosition) => {
  const R = 6371.071 // Radius of the Earth in km
  const rlat1 = prevPosition.lat * (Math.PI / 180) // Convert degrees to radians
  const rlat2 = currentPosition.lat * (Math.PI / 180) // Convert degrees to radians
  const difflat = rlat2 - rlat1 // Radian difference (latitudes)
  const difflon = (currentPosition.lng - prevPosition.lng) * (Math.PI / 180) // Radian difference (longitudes)

  const distanceKm =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)
      )
    )
  return distanceKm
}
