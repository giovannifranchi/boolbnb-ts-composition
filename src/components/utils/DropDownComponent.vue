<template>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {{ dropDownTitle }}
  </a>

  <ul class="dropdown-menu d-flex flex-column"> 
    <RouterLink v-for="(link, index) in dropDownLinks" :key="index" :to="link.path">{{ link.title }}</RouterLink>
  </ul>
</div>
</template>

<script setup lang="ts">

import { defineProps, PropType } from 'vue'

import type { DropDownLinks } from '@/types/utils-types/DropDownLinks';

const { dropDownTitle, dropDownLinks } = defineProps({
    dropDownTitle: {
        required: true, 
        type: String
    },

    dropDownLinks: {
        required: true,
        type: Array as PropType<DropDownLinks[]>
    }
})

</script>

<style scoped>

</style>