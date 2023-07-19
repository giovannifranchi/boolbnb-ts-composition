import Ajax from './Ajax'
import type { ApartmentQueryType } from '@/types/api-types/ApartmentQueryType'
import type { ApartmentType } from '@/types/apartment-store/Apartment'

const Apartment = {
  get: (): Promise<ApartmentType[]> => {
    return Ajax.get('/apartments', null, {})
  },

  highlighted: (): Promise<ApartmentType[]> => {
    return Ajax.get('/apartments/highlighted', null, {})
  },

  getOne: (id: string): Promise<ApartmentType> => {
    return Ajax.get(`/apartments/${id}`, null, {})
  },

  searchByPostion: (params: ApartmentQueryType): Promise<ApartmentType[]> => {
    return Ajax.get('/apartments/search/advanced', params, {})
  }
}

export default Apartment
