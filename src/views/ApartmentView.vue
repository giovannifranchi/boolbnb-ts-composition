<template>
    <div v-if="apartment">
        {{ apartment?.name }}
    </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import Apartment from '@/api/Apartment'
import type { ApartmentType } from '@/types/apartment-store/Apartment';

const apartment = ref<ApartmentType | null>(null);

const route = useRoute();

const findApartment = async(id:string)=>{
    const result = await Apartment.getOne(id)
    apartment.value = result;
}

onMounted(()=>{
    findApartment(route.params.id as string);
})

</script>

<style lang="scss" scoped>

</style>