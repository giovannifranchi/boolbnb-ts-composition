<template>
  <div>
    <!-- <MapComponent /> -->
    <FilterButtonComponent :filter-list="buttonList" />
    <FilterServicesComponent />
  </div>
</template>

<script setup lang="ts">
import FilterButtonComponent from './FilterButtonComponent.vue'
import FilterServicesComponent from './FilterServicesComponent.vue'
// import MapComponent from './MapComponent.vue'
import type { FilterButtonProps } from '../../types/filter-types/FilterButtonProps'

const buttonList: FilterButtonProps[] = ['beds', 'rooms', 'baths']
</script>

<style scoped></style>
