import { defineStore } from 'pinia'

import Apartment from '@/api/Apartment'
import Service from '@/api/Service'
import type { ApartmentType } from '@/types/apartment-store/Apartment'
import type { ServicesType } from '@/types/api-types/ApartmentQueryType'

export const useApartmentStore = defineStore('apartmentStore', {
  state: () => {
    return {
      allApartments: [] as ApartmentType[],
      highlighted: [] as ApartmentType[],
      services: [] as ServicesType[]
    }
  },

  actions: {
    async getAll() {
      const result: ApartmentType[] = await Apartment.get()
      this.allApartments = result
    },

    async getHighlighted() {
      const result: ApartmentType[] = await Apartment.highlighted()
      this.highlighted = result
    },

    async getServices() {
      const result: ServicesType[] = await Service.get()
      this.services = result
    }
  }
})
