<template>
  <div>
    <h3>Services</h3>
    <ul class="d-flex flex-wrap list-unstyled gap-2">
      <li v-for="(service, index) in apartmentStore.services" :key="index">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            @change="handleSelection(service.id)"
          />
          <label class="form-check-label" for="flexCheckDefault">
            <FontAwesomeIcon :icon="service.icon_url" />
            {{ service.name }}
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '../../stores/filterStore'
import { useApartmentStore } from '../../stores/apartmentStore'
import { onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const filterStore = useFilterStore()
const apartmentStore = useApartmentStore()

onMounted(() => {
  apartmentStore.getServices()
})

const handleSelection = (id: number) => {
  filterStore.filter.services.includes(id) ? filterStore.removeServices(id) : filterStore.setServices(id)
}
</script>

<style scoped></style>
