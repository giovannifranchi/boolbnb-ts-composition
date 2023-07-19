export type AddressType = {
  streetName: string
  municipality: string
  country: string
}

export type PositionType = {
  lon: number
  lat: number
  radius: number
}

export type AutoCompleteType = {
  address: AddressType
  position: PositionType
}
