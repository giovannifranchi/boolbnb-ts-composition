<template>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {{ props.title }}
  </button>
  <ul class="dropdown-menu">
    <li v-for="(link, index) in props.links" :key="index">
      <RouterLink :to="link.path">
        {{ link.title }}
      </RouterLink>
    </li>
  </ul>
</div>
</template>

<script setup lang="ts">

import {  PropType } from 'vue'

import type { DropDownLinks } from '@/types/utils-types/DropDownLinks';

const props = defineProps({
    title: {
        required: true, 
        type: String
    },

    links: {
        required: true,
        type: Array as PropType<DropDownLinks[]>
    }
})

</script>

<style scoped>

</style>