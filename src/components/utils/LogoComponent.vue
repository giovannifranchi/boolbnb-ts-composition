<template>
    <div class="logo">
        <img :src="logoImg" alt="logo" :style="computedStyle">
        <span>Logo</span>
    </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import type { Size } from '@/types/utils-types/Size'


const {logoImg, size} = defineProps({
    logoImg: {
        type: String as ()=> string | null,
        required: true
    },

    size: {
        required: true,
        type: String as ()=> Size
    }
})

let computedStyle = computed(() => {
  let dimension: string
  switch (size.value) {
    case 'big':
      dimension = '100px'
      break
    case 'medium':
      dimension = '70px'
      break
    case 'small':
      dimension = '50px'
      break
    default:
      dimension = ''
  }
  return `width: ${dimension}; height: ${dimension};`
})

</script>

<style scoped>

</style>