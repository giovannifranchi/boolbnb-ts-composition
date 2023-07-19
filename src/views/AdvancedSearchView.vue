<template>
    <div class="container py-5">
        <SearchComponent/>
        <ul v-if="store.filteredApartments.length" class="row list-unstyled">
            <li v-for="apartment in store.filteredApartments" :key="apartment.id" class="col-6 col-md-4">
               <CardComponent :info="apartment"/> 
            </li>
        </ul>
        <FilterButtonComponent :filterList="buttonFilters"/>
    </div>
</template>

<script setup lang="ts">

import { onMounted, watch } from 'vue';
import CardComponent from '@/components/utils/CardComponent.vue';
import SearchComponent from '@/components/utils/SearchComponent.vue';
import { useFilterStore } from '@/stores/filterStore';
import { useRoute } from 'vue-router';
import FilterButtonComponent from '@/components/AdvancedSearchView/FilterButtonComponent.vue'

const store = useFilterStore();

const buttonFilters = ['beds', 'baths', 'rooms']

const route = useRoute();

const setLongLat = (()=>{
    store.setLongitude(route.params.lon as string)
    store.setLatitude(route.params.lat as string)
})



onMounted(()=> {
    if(!store.filter.latitude){
        setLongLat();
        store.searchAdvanced()
    }else{
        store.searchAdvanced()
    }
})

watch(store.filter, ()=>{
    store.searchAdvanced();
})

</script>

<style lang="scss" scoped>

</style>