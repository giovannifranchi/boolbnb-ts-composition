<template>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {{ props.title }}
  </a>

  <ul class="dropdown-menu d-flex flex-column"> 
    <RouterLink v-for="(link, index) in props.links" :key="index" :to="link.path">{{ link.title }}</RouterLink>
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