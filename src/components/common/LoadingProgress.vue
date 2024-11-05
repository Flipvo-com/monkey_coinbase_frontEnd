<template>
  <div class="_h-full _flex _items-center _justify-center ">
    <ion-spinner v-if="!noSpinner"
                 color="success" class="_w-16 _h-16"></ion-spinner>
    <MyParticles v-if="!noParticles"/>
  </div>
</template>
<script setup lang="ts">
import MyParticles from "@/components/common/MyParticles.vue";
import {IonSpinner} from "@ionic/vue";
// props noParticles: boolean and noSpinner: boolean

const props = defineProps<{
  noParticles?: boolean;
  noSpinner?: boolean;
}>();
</script>
