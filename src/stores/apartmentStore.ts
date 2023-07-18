import { defineStore } from 'pinia'

import Apartment from '@/api/Apartment'
import type { ApartmentType } from '@/types/apartment-store/Apartment'

export const useApartmentStore = defineStore('apartmentStore', {
    
    state: ()=> {
        return {
            allApartments: [] as ApartmentType[],
            highlighted: [] as ApartmentType[],
        }
    },

    actions: {
        async getAll(){
            const result: ApartmentType[] = await Apartment.get();
            this.allApartments = result;
        },

        async getHighlighted(){
            const result: ApartmentType[] = await Apartment.highlighted();
            this.highlighted = result
        }
    }

    
})