import { defineStore } from "pinia";
import Apartment from "@/api/Apartment";

import type { FilterStoreType } from "@/types/filter-types/FilterType";

export const useFilterStore = defineStore('filterStore', {
    state: ():FilterStoreType => ({
        filter: {
            maxPrice: null,
            minPrice: null,
            latitude: null,
            longitude: null,
            range: 20,
            services: [],
            rooms: 0,
            beds: 0,
            baths: 0
        },
        filteredApartments: []
    }),

    actions: {
        setMaxPrice(param: number | null) {
            this.filter.maxPrice = param;
        },
        setMinPrice(param: number | null) {
            this.filter.minPrice = param;
        },
        setLatitude(param: number | null | string) {
            this.filter.latitude = param;
        },
        setLongitude(param: number | null | string) {
            this.filter.longitude = param;
        },
        setRange(param: number) {
            this.filter.range = param;
        },
        setServices(param: number) {
            this.filter.services.push(param);
        },
        removeServices(param:number){
            this.filter.services = this.filter.services.filter((id)=> id !== param);
        },
        setRooms(param: number | null) {
            this.filter.rooms = param;
        },
        setBeds(param: number | null) {
            this.filter.beds = param;
        },
        setBaths(param: number | null) {
            this.filter.baths = param;
        },

        async searchAdvanced() {
            const result = await Apartment.searchByPostion({
                longitude: this.filter.longitude,
                latitude: this.filter.latitude,
                radius: this.filter.range,
                baths: this.filter.baths,
                beds: this.filter.beds,
                rooms: this.filter.rooms,
                minPrice: this.filter.minPrice,
                maxPrice: this.filter.maxPrice,
                serivices: this.filter.services
            })
            this.filteredApartments = result;
        }
    }
})
