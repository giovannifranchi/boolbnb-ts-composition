<template>
  <div class="mb-3">
    <label for="search" class="form-label">Search</label>
    <input
      type="text"
      class="form-control"
      id="search"
      v-model="currentSearch"
      @input="setFoundItems"
    />
    <ul v-if="foundItems">
      <li
        v-for="(item, index) in foundItems"
        :key="index"
        @click="goToAddress(item.position.lon, item.position.lat)"
      >
        {{ item.address.streetName ? `${item.address.streetName},` : '' }}
        {{ item.address.municipality }},
        {{ item.address.country }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import AutoComplete from '@/api/AutoComplete'
import type { AutoCompleteType } from '@/types/api-types/AddressType'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFilterStore } from '@/stores/filterStore'

// Current search options

const foundItems = ref<AutoCompleteType[]>([])

const currentSearch = ref<string>('')

const setFoundItems = async () => {
  if (currentSearch.value.trim() !== '') {
    const response = await AutoComplete.search(currentSearch.value)
    foundItems.value = response.results
  }
}

// Router

const router = useRouter()
const store = useFilterStore()

const goToAddress = (lon: number, lat: number, radius: number = 20) => {
  foundItems.value = []
  currentSearch.value = ''
  store.setLatitude(lat)
  store.setLongitude(lon)
  router.push({ name: 'advancedSearch', params: { lon, lat, radius } })
}
</script>

<style scoped></style>
