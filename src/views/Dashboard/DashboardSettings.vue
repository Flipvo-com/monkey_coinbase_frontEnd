<template>
  <div class="dashboard-layout _flex _flex-wrap _gap-4">
    <!-- Account Balance Card -->
    <v-card class="_w-full md:_w-1/2 lg:_w-1/3">
      <v-card-title>Account Balance</v-card-title>
      <v-card-text>
        <div class="text-2xl font-bold">Total Balance: $12,345.67</div>
        <div class="text-sm text-gray-500 mt-1">
          Last updated: 5 minutes ago
        </div>
      </v-card-text>
    </v-card>

    <!-- Portfolio Summary Card -->
    <v-card class="_w-full md:_w-1/2 lg:_w-1/3">
      <v-card-title>Portfolio Summary</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              Bitcoin
              <span class="float-right">$5,000.00</span>
            </v-list-item-title>
            <v-list-item-subtitle class="_text-green-500">+2.3%</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              Ethereum
              <span class="float-right">$3,000.00</span>
            </v-list-item-title>
            <v-list-item-subtitle class="_text-red-500">-1.8%</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              Litecoin
              <span class="float-right">$1,200.00</span>
            </v-list-item-title>
            <v-list-item-subtitle class="_text-green-500">+4.1%</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Recent Transactions Card -->
    <v-card class="_w-full lg:_w-1/3">
      <v-card-title>Recent Transactions</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title>Buy Bitcoin</v-list-item-title>
            <v-list-item-subtitle>Amount: $500 - Status: Completed</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Sell Ethereum</v-list-item-title>
            <v-list-item-subtitle>Amount: $300 - Status: Pending</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Buy Litecoin</v-list-item-title>
            <v-list-item-subtitle>Amount: $200 - Status: Completed</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Performance Summary Card -->
    <v-card class="_w-full">
      <v-card-title>Performance Summary</v-card-title>
      <v-card-text>
        <div>
          <p class="text-lg font-semibold">Overall Profit/Loss</p>
          <p class="text-2xl font-bold text-green-500">$1,234.56 (+5.2%)</p>
        </div>
        <div class="mt-3">
          <v-list-item>
            <v-list-item-title>Monthly Return</v-list-item-title>
            <v-list-item-subtitle>+8.3%</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Yearly Return</v-list-item-title>
            <v-list-item-subtitle>+15.6%</v-list-item-subtitle>
          </v-list-item>
        </div>
      </v-card-text>
    </v-card>

    <!-- Alerts Card -->
    <v-card class="_w-full md:_w-1/2">
      <v-card-title>Alerts</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title>Bitcoin reached $60,000</v-list-item-title>
            <v-list-item-subtitle class="text-sm text-gray-500">3 hours ago</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Ethereum down 5%</v-list-item-title>
            <v-list-item-subtitle class="text-sm text-gray-500">1 day ago</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Portfolio up 10%</v-list-item-title>
            <v-list-item-subtitle class="text-sm text-gray-500">2 days ago</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Additional Info Card (Example) -->
    <v-card class="_w-full md:_w-1/2">
      <v-card-title>Market Overview</v-card-title>
      <v-card-text>
        <p>Bitcoin Price: $55,000</p>
        <p>Ethereum Price: $3,500</p>
        <p>Litecoin Price: $180</p>
        <div class="text-sm text-gray-500 mt-1">
          Updated every 15 minutes
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
</script>
