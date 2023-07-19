import type { ApartmentType } from "../apartment-store/Apartment";

export interface FilterType {
    maxPrice: number | null;
    minPrice: number | null;
    latitude: number | null | string;
    longitude: number | null | string;
    range: number;
    services: number[];
    rooms: number | null;
    beds: number | null;
    baths: number | null;
}

export interface FilterStoreType {
    filter: FilterType;
    filteredApartments: ApartmentType[]; 
}