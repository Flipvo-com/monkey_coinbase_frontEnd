<template>
  <div class="dashboard-layout _flex _flex-wrap _gap-4 _mb-2">

    <!-- Account Balance Card -->
    <v-card class="_w-full md:_w-1/3 lg:_w-1/3 bg-blue-100">
      <v-card-title class="text-blue-700 font-semibold">
        <i class="fa-solid fa-wallet mr-2"></i>Account Balance
      </v-card-title>
      <v-card-text class="text-center">
        <div class="text-3xl font-bold text-blue-900">$12,345.67</div>
        <div class="text-sm text-blue-600 mt-1">Last updated: 5 minutes ago</div>
      </v-card-text>
    </v-card>

    <!-- Portfolio Summary Card -->
    <v-card class="_w-full md:_w-1/2 lg:_w-1/4 bg-green-100">
      <v-card-title class="text-green-700 font-semibold">
        <i class="fa-solid fa-chart-pie mr-2"></i>Portfolio Summary
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Bitcoin</span>
              <span class="font-semibold">$5,000.00</span>
            </v-list-item-title>
            <v-list-item-subtitle class="_text-green-500 text-xs">+2.3%</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Ethereum</span>
              <span class="font-semibold">$3,000.00</span>
            </v-list-item-title>
            <v-list-item-subtitle class="_text-red-500 text-xs">-1.8%</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Litecoin</span>
              <span class="font-semibold">$1,200.00</span>
            </v-list-item-title>
            <v-list-item-subtitle class="_text-green-500 text-xs">+4.1%</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Recent Transactions Card -->
    <v-card class="_w-full md:_w-1/2 lg:_w-1/4 bg-purple-100">
      <v-card-title class="text-purple-700 font-semibold">
        <i class="fa-solid fa-exchange-alt mr-2"></i>Recent Transactions
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Buy Bitcoin</span>
              <span class="text-xs text-purple-500">Completed</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-xs">Amount: $500</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Sell Ethereum</span>
              <span class="text-xs text-purple-500">Pending</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-xs">Amount: $300</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Buy Litecoin</span>
              <span class="text-xs text-purple-500">Completed</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-xs">Amount: $200</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Performance Summary Card -->
    <v-card class="_w-full md:_w-1/2 lg:_w-1/4 bg-yellow-100">
      <v-card-title class="text-yellow-700 font-semibold">
        <i class="fa-solid fa-chart-line mr-2"></i>Performance Summary
      </v-card-title>
      <v-card-text>
        <div class="text-lg font-semibold text-yellow-800">Profit/Loss</div>
        <p class="text-2xl font-bold text-green-600">$1,234.56 (+5.2%)</p>
        <div class="mt-3 text-sm">
          <div>Monthly Return: <span class="text-green-500 font-bold">+8.3%</span></div>
          <div>Yearly Return: <span class="text-green-500 font-bold">+15.6%</span></div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Alerts Card -->
    <v-card class="_w-full md:_w-1/2 lg:_w-1/3 bg-red-100">
      <v-card-title class="text-red-700 font-semibold">
        <i class="fa-solid fa-bell mr-2"></i>Alerts
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Bitcoin reached $60,000</span>
              <span class="text-xs text-red-500">3 hrs ago</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Ethereum down 5%</span>
              <span class="text-xs text-red-500">1 day ago</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Portfolio up 10%</span>
              <span class="text-xs text-red-500">2 days ago</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Market Overview Card -->
    <v-card class="_w-full md:_w-1/2 lg:_w-1/3 bg-gray-100">
      <v-card-title class="text-gray-700 font-semibold">
        <i class="fa-solid fa-globe mr-2"></i>Market Overview
      </v-card-title>
      <v-card-text>
        <div>Bitcoin: <span class="font-semibold">$55,000</span></div>
        <div>Ethereum: <span class="font-semibold">$3,500</span></div>
        <div>Litecoin: <span class="font-semibold">$180</span></div>
        <div class="text-xs text-gray-500 mt-1">Updated every 15 minutes</div>
      </v-card-text>
    </v-card>
  </div>

  <!-- Other examples  -->
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

  <!-- More examples  -->
  <div class="dashboard-layout flex flex-wrap gap-4">
    <!-- Account Balance Card -->
    <v-card class="w-full md:w-1/2 lg:w-1/4 bg-blue-50 shadow-md">
      <v-card-title class="text-blue-700 font-semibold">
        <v-icon class="mr-2">mdi-wallet</v-icon>Account Balance
      </v-card-title>
      <v-card-text class="text-center">
        <div class="text-3xl font-bold text-blue-900">$12,345.67</div>
        <div class="text-sm text-blue-600 mt-1">Last updated: 5 minutes ago</div>
      </v-card-text>
    </v-card>

    <!-- Portfolio Summary Card -->
    <v-card class="w-full md:w-1/2 lg:w-1/4 bg-green-50 shadow-md">
      <v-card-title class="text-green-700 font-semibold">
        <v-icon class="mr-2">mdi-chart-pie</v-icon>Portfolio Summary
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Bitcoin</span>
              <span class="font-semibold">$5,000.00</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-green-600 text-xs">+2.3%</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Ethereum</span>
              <span class="font-semibold">$3,000.00</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-red-500 text-xs">-1.8%</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Litecoin</span>
              <span class="font-semibold">$1,200.00</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-green-600 text-xs">+4.1%</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Recent Transactions Card -->
    <v-card class="w-full md:w-1/2 lg:w-1/4 bg-purple-50 shadow-md">
      <v-card-title class="text-purple-700 font-semibold">
        <v-icon class="mr-2">mdi-swap-horizontal</v-icon>Recent Transactions
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Buy Bitcoin</span>
              <span class="text-xs text-purple-500">Completed</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-xs">Amount: $500</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Sell Ethereum</span>
              <span class="text-xs text-purple-500">Pending</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-xs">Amount: $300</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Buy Litecoin</span>
              <span class="text-xs text-purple-500">Completed</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-xs">Amount: $200</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Performance Summary Card -->
    <v-card class="w-full md:w-1/2 lg:w-1/4 bg-yellow-50 shadow-md">
      <v-card-title class="text-yellow-700 font-semibold">
        <v-icon class="mr-2">mdi-trending-up</v-icon>Performance Summary
      </v-card-title>
      <v-card-text>
        <div class="text-lg font-semibold text-yellow-800">Profit/Loss</div>
        <p class="text-2xl font-bold text-green-600">$1,234.56 (+5.2%)</p>
        <div class="mt-3 text-sm">
          <div>Monthly Return: <span class="text-green-500 font-bold">+8.3%</span></div>
          <div>Yearly Return: <span class="text-green-500 font-bold">+15.6%</span></div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Alerts Card -->
    <v-card class="w-full md:w-1/2 lg:w-1/3 bg-red-50 shadow-md">
      <v-card-title class="text-red-700 font-semibold">
        <v-icon class="mr-2">mdi-bell-alert</v-icon>Alerts
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Bitcoin reached $60,000</span>
              <span class="text-xs text-red-500">3 hrs ago</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Ethereum down 5%</span>
              <span class="text-xs text-red-500">1 day ago</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="flex justify-between">
              <span>Portfolio up 10%</span>
              <span class="text-xs text-red-500">2 days ago</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Market Overview Card -->
    <v-card class="w-full md:w-1/2 lg:w-1/3 bg-gray-50 shadow-md">
      <v-card-title class="text-gray-700 font-semibold">
        <v-icon class="mr-2">mdi-finance</v-icon>Market Overview
      </v-card-title>
      <v-card-text>
        <div>Bitcoin: <span class="font-semibold">$55,000</span></div>
        <div>Ethereum: <span class="font-semibold">$3,500</span></div>
        <div>Litecoin: <span class="font-semibold">$180</span></div>
        <div class="text-xs text-gray-500 mt-1">Updated every 15 minutes</div>
      </v-card-text>
    </v-card>
  </div>



<!-- todo - Need this info  -->
  <v-card>
    <v-card-text>
      <div>
        📈 Profit/Loss --- 🪙 Crypto Summary ---
        <br/>
        Gross: $429.43 | Net: $348.44 | %Gross: 2.76% | %Net: 2.23% ---
        Bought: 0.224326 | Sold: 0.230504 | Position: -0.006178 | Avg Buy:
        $69,394.61 | Avg Sell: $69,397.64
        <br/>
        📊 Profit/Loss Summary: todo - double check!!
        <br/>
        💸 Total Buy Value: $15,567.02 | Total Buy Fees: $40.10 | Total Buy
        Cost: $15,607.12
        <br/>
        📜 Total Sell Value: $15,996.44 | Total Sell Fees: $40.89 | Total Sell
        Proceeds: $15,955.56
        <br/>
        📈 Profit/Loss:
        <br/>
        📉 Gross Profit/Loss: $429.43 | Net Profit/Loss: $348.44
        <br/>
        📉 Gross Profit/Loss %: 2.76% | Net Profit/Loss %: 2.23%
        <br/>
        🪙 Crypto Summary:
        <br/>
        📥 Total Crypto Bought: 0.224326 | 📤 Total Crypto Sold: 0.230504 | 📊
        Net Crypto Position (traded): -0.006178 | 📈 Status: DOWN
        <br/>
        🔄 Average Buy Price: $69,394.61 | Average Sell Price: $69,397.64 |
        Avg Fee per Trade: $0.02
        <br/>
        🔄 Average Sell Price: $69,397.64
        <br/>
        --- Diff: $3.03 (0.00%) 🔄 Average Buy Price: $69,394.61
        <br/>

        📉 Holdings Summary:
        <br/>
        💰 Current Holdings Value (Trade-Based): -$546.21
        <br/>
        📈 Unrealized P/L: -$117.48
        <br/>
        💸 Realized P/L: $465.93 | Holdings/Buy Ratio: -2.75%
        <br/>

        🌕 BTC Wallet 🛡️0.00149848 💰 $132.48 🪙 🔒 🛡️0.00014762 💰 $13.05
        <br/>
        ⚖️ Balance: Buys(72) - %71.29 / %28.71 - (29)Sells - Total: 101
        <br/>
        💲 $130.87 ♻️ %49.69 🚧 %50.31 ♻️ $132.48 🛡️
        <br/>
        💰 Total: $263.35
      </div>
    </v-card-text>
  </v-card>


</template>

<script setup lang="ts">

</script>
