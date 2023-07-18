<template>
    <div>
        <h1>{{ params }}</h1>
    </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const params = ref< any | null>(null)

onMounted(()=> {
    params.value = route.params
})

</script>

<style lang="scss" scoped>

</style>