export type ServicesType = {
    id:number;
    name:string
    icon_url:string;
}


export interface ApartmentQueryType  {
    longitude: number | null;
    latitude:number | null;
    radius:number;
    minPrice:number | null;
    maxPrice:number | null;
    rooms:number | null;
    baths:number | null;
    beds:number | null;
    serivices:number[] | ServicesType[];
}