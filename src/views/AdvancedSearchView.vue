<template>
    <div class="container py-5">
        <SearchComponent/>
        <ul v-if="apartments.length" class="row list-unstyled">
            <li v-for="apartment in apartments" :key="apartment.id" class="col-6 col-md-4">
               <CardComponent :info="apartment"/> 
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Apartment from '@/api/Apartment'
import CardComponent from '@/components/utils/CardComponent.vue';
import SearchComponent from '@/components/utils/SearchComponent.vue';
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

//it needs a computed because route params are not reactive by default
const getParams = computed(()=> route.params)

onMounted( ()=> {
    searchApartments();
})

watch(getParams, ()=> {
    searchApartments()
})

</script>

<style lang="scss" scoped>

</style>