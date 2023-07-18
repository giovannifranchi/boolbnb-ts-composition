<template>
  <div class="background d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="row input-box">
            <div class="col-9">
              <div class="mb-3">
                <label for="search" class="form-label">Search</label>
                <input
                  type="text"
                  class="form-control"
                  id="search"
                  v-model="currentSearch"
                  @input="setFoundItems"
                />
                <ul v-if="foundItems">
                  <li v-for="(item, index) in foundItems" :key="index" @click="goToAddress(item.position.lon, item.position.lat)">
                    {{ item.address.streetName }}, {{ item.address.municipality }},
                    {{ item.address.country }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import AutoComplete from '@/api/AutoComplete'
import type { AutoCompleteType } from '@/types/api-types/AddressType'

import { ref } from 'vue'
import { useRouter } from 'vue-router';

// Current search options

const foundItems = ref<AutoCompleteType[]>([])

const currentSearch = ref<string>('')

const setFoundItems = async () => {
  if (currentSearch.value.trim() !== '') {
    const response = await AutoComplete.search(currentSearch.value)
    foundItems.value = response.results
  }
}

// Router

const router = useRouter();

const goToAddress = (lon:number, lat:number, radius:number = 20)=> {
    router.push({name: 'advancedSearch', params: {lon, lat, radius}});
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url('../../assets/images/copenaghen.jpg');
  height: 30rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .input-box {
    background-color: #fff;
  }
}
</style>
