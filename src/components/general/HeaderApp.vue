<template>
  <header class="bg-dark text-white py-5">
    <div class="container d-flex justify-content-between">
      <LogoComponent size="small" logoImg="fefwf" />
      <DropDownComponent :title="dropDownData.dropDownTitle" :links="dropDownData.dropDownLinks" />
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoComponent from '../utils/LogoComponent.vue'
import DropDownComponent from '../utils/DropDownComponent.vue'

const dropDownData = {
  dropDownTitle: 'access',
  dropDownLinks: [
    {
      title: 'login',
      path: '/login'
    },
    {
      title: 'register',
      path: '/register'
    }
  ]
}
</script>

<style scoped></style>
