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
    latitude: number;
    longitude: number;
    thumb: string;
    is_visible: boolean;
    description: string;
    created_at: string;
    updated_at: string;
}

