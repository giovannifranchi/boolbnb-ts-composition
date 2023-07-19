<template>
    <div class="container py-5">
        <SearchComponent/>
        <ul v-if="store.filteredApartments.length" class="row list-unstyled">
            <li v-for="apartment in store.filteredApartments" :key="apartment.id" class="col-6 col-md-4">
               <CardComponent :info="apartment"/> 
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import { onMounted, watch } from 'vue';
import CardComponent from '@/components/utils/CardComponent.vue';
import SearchComponent from '@/components/utils/SearchComponent.vue';
import { useFilterStore } from '@/stores/filterStore';

const store = useFilterStore();

onMounted(()=> {
    store.searchAdvanced()
})

watch(store.filter, ()=>{
    store.searchAdvanced();
})

</script>

<style lang="scss" scoped>

</style>