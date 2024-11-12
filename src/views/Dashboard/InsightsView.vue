<template>
  <div class="trading-stats-page p-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <!-- Overview Cards -->
    <div class="flex flex-wrap gap-4 mb-6">
      <!-- BTC Holdings Card -->
      <v-card class="w-full md:w-1/3 bg-blue dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md mb-2">
        <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
          <v-icon class="mr-2">mdi-currency-btc</v-icon>
          BTC Holdings
        </v-card-title>
        <v-card-text>
          <p class="text-2xl font-bold">$45,200.00</p> <!-- Example amount -->
          <p class="text-sm text-gray-500 dark:text-gray-400">Current Value</p>
        </v-card-text>
      </v-card>

      <!-- Account Balance Card -->
      <v-card class="w-full md:w-1/3 bg-purple dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md mb-2">
        <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
          <v-icon class="mr-2">mdi-bank</v-icon>
          Account Balance
        </v-card-title>
        <v-card-text>
          <p class="text-2xl font-bold">$12,500.00</p> <!-- Example balance -->
          <p class="text-sm text-gray-500 dark:text-gray-400">Available Cash</p>
        </v-card-text>
      </v-card>

      <!-- Total Profit/Loss Card -->
      <v-card class="w-full md:w-1/3 bg-green dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md mb-2">
        <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
          <v-icon class="mr-2">mdi-chart-line</v-icon>
          Total P/L
        </v-card-title>
        <v-card-text>
          <p class="text-2xl font-bold text-green-500 dark:text-green-400">+$1,500.00</p> <!-- Example profit -->
          <p class="text-sm text-gray-500 dark:text-gray-400">Since Start</p>
        </v-card-text>
      </v-card>
    </div>

    <!-- Recent Trades Table -->
    <v-card class="bg-yellow dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md">
      <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
        <v-icon class="mr-2">mdi-history</v-icon>
        Recent Trades
      </v-card-title>
      <v-card-text>
        <v-simple-table dense>
          <thead>
          <tr>
            <th class="text-left">Date</th>
            <th class="text-left">Pair</th>
            <th class="text-left">Type</th>
            <th class="text-left">Amount</th>
            <th class="text-left">Price</th>
            <th class="text-left">Total</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="trade in trades" :key="trade.id">
            <td>{{ trade.date }}</td>
            <td>{{ trade.pair }}</td>
            <td>{{ trade.type }}</td>
            <td>{{ trade.amount }}</td>
            <td>{{ trade.price }}</td>
            <td>{{ trade.total }}</td>
          </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
// Example data for trades
const trades = [
  { id: 1, date: '2024-11-10 14:32', pair: 'BTC/USD', type: 'Buy', amount: '0.5', price: '$45,000', total: '$22,500' },
  { id: 2, date: '2024-11-10 12:50', pair: 'BTC/USD', type: 'Sell', amount: '0.3', price: '$46,200', total: '$13,860' },
  // Add more trades as needed
];
</script>
