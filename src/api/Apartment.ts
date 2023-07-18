import Ajax from "./Ajax";
import type { PositionType } from "@/types/api-types/AddressType";
import type { ApartmentType } from "@/types/apartment-store/Apartment";

const Apartment = {
    get: (): Promise<ApartmentType[]>=>{
        return Ajax.get('/apartments', null, {});
    },

    highlighted: (): Promise<ApartmentType[]>=>{
        return Ajax.get('/apartments/highlighted', null, {});
    },

    searchByPostion: (params:PositionType): Promise<ApartmentType[]>=> {
        return Ajax.get('/apartments/search/advanced', params, {});
    }
}

export default Apartment