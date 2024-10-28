<template>
  <div class="_flex _items-center _justify-center _h-screen">
    <v-progress-circular
      indeterminate
      size="150"
        width="10"
      color="success"
    ></v-progress-circular>
    <MyParticles />
  </div>
</template>
<script setup lang="ts">
import MyParticles from "@/components/common/MyParticles.vue";
</script>
