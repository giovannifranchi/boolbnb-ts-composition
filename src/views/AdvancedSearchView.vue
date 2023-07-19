<template>
  <div class="container py-5">
    <SearchComponent />
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      Button with data-bs-target
    </button>
    <ul v-if="store.filteredApartments.length" class="row list-unstyled">
      <li v-for="apartment in getFilteredApartments" :key="apartment.id" class="col-6 col-md-4">
        <CardComponent :info="apartment" />
      </li>
    </ul>
  </div>

  <!-- offcanva -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <FilterOffcanvaComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, computed } from 'vue'
import CardComponent from '@/components/utils/CardComponent.vue'
import SearchComponent from '@/components/utils/SearchComponent.vue'
import { useFilterStore } from '@/stores/filterStore'
import { useRoute } from 'vue-router'
import FilterOffcanvaComponent from '@/components/AdvancedSearchView/FilterOffcanvaComponent.vue'

const store = useFilterStore()

const route = useRoute()

const setLongLat = () => {
  store.setLongitude(route.params.lon as string)
  store.setLatitude(route.params.lat as string)
}

const getFilteredApartments = computed(() => {
  return store.filteredApartments
})

onMounted(() => {
  if (!store.filter.latitude) {
    setLongLat()
    store.searchAdvanced()
  } else {
    store.searchAdvanced()
  }
})

watch(
  store.filter,
  () => {
    store.searchAdvanced()
  },
  { deep: true }
)
</script>

<style lang="scss" scoped></style>
