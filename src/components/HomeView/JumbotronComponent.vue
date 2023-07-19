<template>
  <div class="background d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="row input-box">
            <div class="col-9">
              <SearchComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchComponent from '../utils/SearchComponent.vue'
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
