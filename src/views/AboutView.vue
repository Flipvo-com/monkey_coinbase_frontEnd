<template>
  <MyParticles/>
  <v-app class="!_bg-transparent">

    <v-app-bar app color="#1a237e" dark elevate-on-scroll>
      <v-toolbar-title class="_text-xl _font-bold">
        <v-btn :to="{name:'home'}">Flipvo.com</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn :to="{name:'home'}">Home</v-btn>
      <v-btn :to="{name:'about'}">About</v-btn>
      <v-btn :to="{name:'login'}">login</v-btn>
      <v-btn :to="{name:'register'}">register</v-btn>
    </v-app-bar>
    <div class="_flex _justify-center _items-center _h-screen _flex-col _gap-4">
      <v-icon size="100" color="primary">fa-duotone fa-solid fa-monkey</v-icon>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import MyParticles from "@/components/common/MyParticles.vue";

</script>

<style scoped>

</style>