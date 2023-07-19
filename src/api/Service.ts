import Ajax from './Ajax'
import type { ServicesType } from '@/types/api-types/ApartmentQueryType'

const Service = {
  get: (): Promise<ServicesType[]> => {
    return Ajax.get('/services', null, {})
  }
}

export default Service
