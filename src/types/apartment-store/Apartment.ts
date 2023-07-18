import type { ImagesType } from "./ImagesType";

export interface ApartmentType {
    id: number;
    user_id: number;
    name: string,
    slug: string,
    address: string;
    city: string;
    state: string;
    square_meters: number;
    bathrooms: number;
    rooms: number;
    beds: number;
    price: number;
    discount: number;
    latitude: string;
    longitude: string;
    thumb: string;
    is_visible: boolean;
    description: string;
    created_at: string;
    updated_at: string;
    images?: ImagesType[];
}

