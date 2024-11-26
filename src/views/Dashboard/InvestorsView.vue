<template>
  <v-container class="mb-2" style="padding: 1px" fluid>
    <v-row>
      <!-- Investors List -->
      <v-col cols="12" md="8" class="mb-0">
        <v-card style="border: 1px solid #7a7a7a; padding: 1rem;">
          <v-card-title>
            <span class="_text-3xl">Investors</span>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" v-for="(investor, index) in investors" :key="index">
                <v-card class="mb-2" outlined>
                  <v-card-title class="d-flex align-items-center justify-space-between">
                    <span>{{ investor.name }}</span>
                    <span class="_text-blue-400">Total Value: {{ toCurrency(investor.totalValue) }}</span>
                  </v-card-title>
                  <v-card-text>
                    <div class="d-flex justify-space-between">
                      <span class="_text-green-300">Initial Stake: {{ toCurrency(investor.initialStake) }}</span>
                      <span class="_text-blue-400">Percentage Owned: {{ investor.percentageOwned }}%</span>
                      <span :class="investor.profitLoss >= 0 ? '_text-green-300' : '_text-red-200'">
                        {{ investor.profitLoss >= 0 ? 'Profit: ' : 'Loss: ' }} {{ toCurrency(investor.profitLoss) }}
                      </span>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { toCurrency } from "@/stats/Utils";

// Fake Investors Array
const investors = [
  {
    name: "Chris",
    totalValue: 1500,
    initialStake: 2000,
    percentageOwned: 60,
    profitLoss: 2000,
  },
  {
    name: "Tim",
    totalValue: 750,
    initialStake: 600,
    percentageOwned: 40,
    profitLoss: 150,
  },
  {
    name: "Rick",
    totalValue: 130,
    initialStake: 100,
    percentageOwned: 10,
    profitLoss: 30,
  },
];
</script>

<style scoped>
</style>
