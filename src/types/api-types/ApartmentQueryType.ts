export type ServicesType = {
    id:number;
    icon:string;
}


export interface ApartmentQueryType  {
    longitude: string;
    latitude:string;
    radius:string;
    minPrice?:number;
    maxPrice?:number;
    rooms?:number;
    baths?:number;
    beds?:number;
    serivices?:ServicesType[];
}