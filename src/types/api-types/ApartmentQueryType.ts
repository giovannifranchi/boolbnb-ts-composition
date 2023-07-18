export type ServicesType = {
    id:number;
    icon:string;
}


export interface ApartmentQueryType  {
    longitutde: number;
    latitude:number;
    radius:number;
    minPrice?:number;
    maxPrice?:number;
    rooms?:number;
    baths?:number;
    beds?:number;
    serivices?:ServicesType[];
}