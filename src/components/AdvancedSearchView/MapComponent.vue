<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<script setup lang="ts">

import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

import { useFilterStore } from '../../stores/filterStore'
import { onMounted, watch } from "vue";
import { create } from "domain";



const store = useFilterStore();

const createMap = ()=>{

   
    let map = tt.map({
        key: 'bVmlyrmMO9i8TC8som4J4yYXIscwmChf',
        container: "map",
        center: [store.filter.longitude, store.filter.latitude], // Change this to your desired initial position
        zoom: 11,
    })

    store.filteredApartments.forEach(element => {
        let marker = new tt.Marker().setLngLat([element.longitude, element.latitude]).addTo(map);
    });
}

onMounted(()=>{
    createMap()
})

watch(store.filter.longitude,()=> {
    createMap()
})

watch(store.filter.latitude,()=> {
    createMap()
})





</script>

<style scoped>

#map{
    width: 500px;
    height: 300px;
}
</style>