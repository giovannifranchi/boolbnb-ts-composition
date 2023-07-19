<template>
    <div>
        <FilterButtonComponent :filter-list="buttonList"/>
    </div>
</template>

<script setup lang="ts">

import FilterButtonComponent from './FilterButtonComponent.vue';
import type { FilterButtonProps } from '../../types/filter-types/FilterButtonProps';


const buttonList:FilterButtonProps[] = ['beds', 'rooms', 'baths'];

</script>

<style scoped>

</style>