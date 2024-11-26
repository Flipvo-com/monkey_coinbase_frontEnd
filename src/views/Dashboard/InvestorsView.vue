<template>
  <v-container class="mb-2" style="padding: 1px" fluid>
    <v-row>
      <!-- Total Account Value -->
      <v-col cols="12" class="mb-0">
        <v-card style="border: 1px solid #7a7a7a; padding: 1rem;">
          <v-card-title>
            <span class="_text-3xl">Total Account Value: {{ toCurrency(totalAccountUSDValue) }}</span>
          </v-card-title>
        </v-card>
      </v-col>

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
import { computed } from "vue";
import { AccountState } from "@/stats/AccountState";

// Import the necessary state
const {
  coinbaseState,
  usdAccount,
  usdcAccount,
  btcAccount,
} = AccountState();

// Total account value: BTC + Cash + USDC
const totalAccountUSDValue = computed(() => {
  const btcValue = totalBtc.value * btcPrice.value;
  return btcValue + totalCash.value + totalUsdc.value;
});

// Bitcoin Account
const totalBtc = computed(() => {
  return Number((btcAvailable.value + btcHold.value).toFixed(8));
});
const btcAvailable = computed(() => {
  return Number(parseFloat(btcAccount.value.available_balance.value).toFixed(8));
});
const btcHold = computed(() => {
  return Number(parseFloat(btcAccount.value.hold.value).toFixed(8));
});

// Bitcoin Price
const btcPrice = computed(() => {
  let BTCBook = coinbaseState.value.pricebooks.find((item: {
    product_id: string;
    asks: { price: string }[];
    bids: { price: string }[];
  }) => item.product_id === "BTC-USD");
  if (!BTCBook) {
    return 0;
  }
  let asks = parseFloat(BTCBook?.asks[0].price);
  let bids = parseFloat(BTCBook?.bids[0].price);
  return (asks + bids) / 2;
});

// Cash Account
const totalCash = computed(() => {
  return parseFloat(usdAccount.value.available_balance.value) + parseFloat(usdAccount.value.hold.value);
});

// USDC Account
const totalUsdc = computed(() => {
  return parseFloat(usdcAccount.value.available_balance.value) + parseFloat(usdcAccount.value.hold.value);
});

// Investors Array with dynamically calculated values
const investors = computed(() => {
  // Initial hard-coded investor percentage shares
  const investorData = [
    {
      name: "Chris",
      percentageOwned: 50,
      initialStake: 600,
    },
    {
      name: "Tim",
      percentageOwned: 42,
      initialStake: 600,
    },
    {
      name: "Rick",
      percentageOwned: 8,
      initialStake: 100,
    },
  ];

  // Calculating values for each investor based on their percentage share
  return investorData.map((investor) => {
    const totalValue = (totalAccountUSDValue.value * investor.percentageOwned) / 100;

    // Using the initial stake from investorData directly
    const initialStake = investor.initialStake;
    const profitLoss = totalValue - initialStake;

    return {
      ...investor,
      totalValue,
      initialStake,
      profitLoss,
    };
  });
});
</script>

<style scoped>
</style>
