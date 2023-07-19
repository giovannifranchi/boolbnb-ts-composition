<template>
  <div v-for="(filter, index) in props.filterList" :key="index">
    <h3>{{ filter }}</h3>
    <ul class="row list-unstyled">
      <li class="col-2" v-for="(button, btnIndex) in 7" :key="button">
        <button class="btn btn-primary" @click="applyFilters(filter, btnIndex)">
          {{ formatButtons(btnIndex) }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
//TODO: set a function that returns the class active if store has it

import { type PropType } from 'vue'

import type { FilterButtonProps } from '../../types/filter-types/FilterButtonProps'

import { useFilterStore } from '../../stores/filterStore'

const props = defineProps({
  filterList: {
    required: true,
    type: Array as PropType<FilterButtonProps[]>
  }
})

const formatButtons = (index: number): string | number => {
  if (index === 0) {
    return 'All'
  } else if (index >= 1 && index <= 5) {
    return index
  } else {
    return '6+'
  }
}

const store = useFilterStore()

const applyFilters = (filter: string, value: number) => {
  switch (filter) {
    case 'beds':
      store.setBeds(value)
      break
    case 'rooms':
      store.setRooms(value)
      break
    case 'baths':
      store.setBaths(value)
      break
    default:
      return
  }
}
</script>

<style scoped></style>
