<template>
    <div class="ms-card">
        <div class="img-container position-relative">
            <img :src="mergeThumbAndGallery[activePic]" :alt="props.info.name" class="img-fluid bordered">
            <div class="arrow left">
                <button class="btn btn-primary" @click="decreasePic">
                    <FontAwesomeIcon icon="chevron-left" />
                </button>
            </div>
            <div class="arrow right">
                <button class="btn btn-primary" @click="incresePic">
                    <FontAwesomeIcon icon="chevron-right" />
                </button>
            </div>
            <ul class="index list-unstyled d-flex gap-1">
                <li v-for="(pic, index) in mergeThumbAndGallery" :key="index">
                    <span @click="selectPic(index)" :class="index === activePic ? 'ms-active' : ''"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, type PropType } from 'vue';
import type { ApartmentType } from '@/types/apartment-store/Apartment';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Props

const props = defineProps({
    info: {
        required: true,
        type: Object as PropType<ApartmentType>
    },
})

// Images Section

const activePic = ref<number>(0)

const incresePic = ()=>{
    activePic.value >= mergeThumbAndGallery.value.length ? activePic.value = 0 : activePic.value++
}

const decreasePic = ()=>{
    activePic.value <= 0 ? activePic.value = mergeThumbAndGallery.value.length - 1 : activePic.value--;
}

const selectPic = (index:number)=>{
    activePic.value = index;
}

const mergeThumbAndGallery = computed(():string[]=>{
    const galleryPaths:string[] = props.info.images?.map((image)=> image.path) || [];
    return [props.info.thumb, ...galleryPaths]
})




</script>

<style lang="scss" scoped>

.index{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    li{
        width: 10px;
        height: 5px;
        background-color: #c1c1c1;
        cursor: pointer;
        &:hover {
            background-color: #fff;
        }
        &>*.ms-active{
            background-color: #fff;
        }
    }
}
.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 200;
}

.left{
    left: 10px;
}

.right{
    right: 10px;
}

</style>