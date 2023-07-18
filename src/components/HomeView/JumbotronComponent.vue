<template>
    <div v-if="!store.allApartments">
        ...loading
    </div>
    <ul v-else>
        <li v-for="(apartment, index) in store.allApartments" :key="index">
        {{ apartment.name }}
        </li>
    </ul>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import {useApartmentStore} from '../../stores/apartmentStore'

const store = useApartmentStore()

onMounted(async ()=>{
    await store.getAll()
    console.log(import.meta)
})

</script>

<style scoped>

</style>