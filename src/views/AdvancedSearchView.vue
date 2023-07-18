<template>
    <div>
        <ul v-if="apartments.length">
            <li v-for="apartment in apartments" :key="apartment.id">
                {{ apartment.name }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Apartment from '@/api/Apartment'
import type { ApartmentType } from '@/types/apartment-store/Apartment';

const route = useRoute();

const apartments = ref<ApartmentType[]>([])

const searchApartments = async ()=> {
    const respose = await Apartment.searchByPostion({
        latitude: route.params.lat,
        longitude: route.params.lon,
        radius: route.params.radius
    })
    apartments.value = respose;
}

onMounted( ()=> {
    searchApartments();
})

</script>

<style lang="scss" scoped>

</style>