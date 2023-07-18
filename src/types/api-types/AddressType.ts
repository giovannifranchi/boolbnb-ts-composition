

export type AddressType =  {
    streetName:string;
    municipality:string;
    country:string
}

export type PositionType = {
    log:string;
    lat:string;
}

export type AutoCompleteType = {
    address: AddressType;
    position:PositionType;
} 

