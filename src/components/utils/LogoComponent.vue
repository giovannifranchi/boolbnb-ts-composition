<template>
  <RouterLink to="/">
    <div class="logo">
      <img :src="props.logoImg" alt="logo" :style="computedStyle" />
      <span>Logo</span>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import type { Size } from '@/types/utils-types/Size'

const props = defineProps({
  logoImg: {
    type: String,
    required: true
  },

  size: {
    required: true,
    type: String as PropType<Size>
  }
})

let computedStyle = computed(() => {
  let dimension: string
  switch (props.size) {
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

<style scoped></style>
