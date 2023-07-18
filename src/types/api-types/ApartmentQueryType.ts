export type ServicesType = {
    id:number;
    name:string
    icon_url:string;
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