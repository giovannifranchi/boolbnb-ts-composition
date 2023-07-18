<template>
    <div>
        <ul v-if="apartments.length" class="row list-unstyled">
            <li v-for="apartment in apartments" :key="apartment.id" class="col-6 col-md-4">
               <CardComponent :info="apartment"/> 
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Apartment from '@/api/Apartment'
import CardComponent from '@/components/utils/CardComponent.vue';
import type { ApartmentType } from '@/types/apartment-store/Apartment';

const route = useRoute();

const apartments = ref<ApartmentType[]>([])

const searchApartments = async ()=> {
    const respose = await Apartment.searchByPostion({
        latitude: route.params.lat as string,
        longitude: route.params.lon as string,
        radius: route.params.radius as string
    })
    apartments.value = respose;
}

onMounted( ()=> {
    searchApartments();
})

</script>

<style lang="scss" scoped>

</style>