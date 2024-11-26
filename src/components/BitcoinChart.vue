<template>
  <!-- Sparkline Chart -->
  <v-sparkline
      :fill="fill"
      :gradient="selectedGradient"
      :line-width="lineWidth"
      :model-value="value"
      :padding="padding"
      :smooth="smooth"
      auto-draw
  ></v-sparkline>
</template>

<script setup>
import { ref } from "vue";

const fill = ref(true);
const lineWidth = ref(2);
const padding = ref(8);
const smooth = ref(true);

const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

const selectedGradient = ref(gradients[4]);

// Sample data
const value = ref([0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]);
</script>

<style scoped>
</style>
