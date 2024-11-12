<template>

  <v-container
      class="mb-2"
      style="padding: 0;" fluid>
    <v-row>
      <!-- Bitcoin Account Card -->
      <v-col cols="12" md="4" class="mb-0">
        <v-card style="border: 1px solid #7a7a7a;">
          <v-card-text style="padding: 0;">
            <v-list lines="one">
              <v-list-item>
                <v-list-item-title class="flex items-center mb-3">
                  <i class="fa-brands fa-bitcoin _text-[#ff9933] _text-3xl mr-2"></i>
                  <span class="_text-3xl">Bitcoin</span>
                  <span class="float-right _text-2xl _text-blue-400 ml-auto">{{ toCurrency(btcPrice) }}</span>
                </v-list-item-title>
                <v-list-item-subtitle class="mb-2 _text-blue-300">
                  <span class="float-right">Total Value: {{ totalBtcValue }}</span>
                  <div>₿ 💰 {{ totalBtc }}</div>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="_text-3xl mb-2">
                  <span class="_text-green-300">₿ 🟢 Available: {{ btcAvailable }}</span>
                  <div class="_text-red-200 float-right">🛑 Hold: {{ btcHold }}</div>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="_text-3xl">
                  <span class="_text-green-300">₿ 💲 Value: {{ btcAvailableValue }}</span>
                  <div class="_text-red-200 float-right">💲 Value: {{ btcHoldValue }}</div>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Cash Account Card -->
      <v-col cols="12" md="4">
        <v-card style="border: 1px solid #7a7a7a;">
          <v-card-text style="padding: 0;">
            <v-list lines="one">
              <v-list-item>
                <v-list-item-title class="flex items-center mb-3">
                  <span class="_text-3xl mr-2">💵 Cash</span>
                  <span class="float-right _text-2xl _text-blue-400 ml-auto">Total: {{ totalCashValue }}</span>
                </v-list-item-title>
                <v-list-item-subtitle class="_text-3xl mb-2">
                  <span class="_text-green-300">🟢 Available: {{ cashAvailableValue }}</span>
                  <div class="_text-red-200 float-right">🛑 Hold: {{ cashHoldValue }}</div>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- USDC Account Card -->
      <v-col cols="12" md="4">
        <v-card style="border: 1px solid #7a7a7a;">
          <v-card-text style="padding: 0;">
            <v-list lines="one">
              <v-list-item>
                <v-list-item-title class="flex items-center mb-3">
                  <span class="display-inline _text-3xl mr-2">
                    <img src="/public/usd-coin-usdc-logo.svg" class="_w-8 _h-8 mr-2 d-inline-block" alt="USDC"> USDC
                  </span>
                  <span class="float-right _text-2xl _text-blue-400 ml-auto">Total: {{ totalUsdcValue }}</span>
                </v-list-item-title>
                <v-list-item-subtitle class="_text-3xl mb-2">
                  <span class="_text-green-300">🟢 Available: {{ usdcAvailableValue }}</span>
                  <div class="_text-red-200 float-right">🛑 Hold: {{ usdcHoldValue }}</div>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <div class="_flex _flex-wrap _gap-2">
    <!-- BTC Price Card -->
    <v-card class="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md">
      <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
        <v-icon class="mr-2">mdi-currency-btc</v-icon>
        BTC Price
      </v-card-title>
      <v-card-text>
        <p>Bid Price: {{ btcBidPrice }}</p>
        <p>Ask Price: {{ btcAskPrice }}</p>
        <p>Average Price: {{ btcAveragePrice }}</p>
      </v-card-text>
    </v-card>

    <!-- todo - Need to convert all this stuff to better looking data    -->
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

    <v-card class="_w-full" density="compact">
      <v-card-text class="_overflow-scroll _max-h-[400px]">
        <v-list lines="one">
          <v-list-item>
            <v-list-item-title> Total</v-list-item-title>
            <v-list-item-subtitle class="_font-bold">
              {{ toCurrency(3000) }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>buy Orders</v-list-item-title>
            <v-list-item-subtitle class="_font-bold">
              {{ buyOrder.length }}
              ({{
                buyOrder.length + sellOrder.length > 0
                    ? (
                        (buyOrder.length / (buyOrder.length + sellOrder.length)) *
                        100
                    ).toFixed(2)
                    : 0
              }}%)
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Value buy Orders</v-list-item-title>
            <v-list-item-subtitle class="_font-bold">
              {{ valueBuyOrder }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>sell Orders</v-list-item-title>
            <v-list-item-subtitle class="_font-bold">
              {{ sellOrder.length }}
              ({{
                sellOrder.length + buyOrder.length > 0
                    ? (
                        (sellOrder.length /
                            (sellOrder.length + buyOrder.length)) *
                        100
                    ).toFixed(2)
                    : 0
              }}%)
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Value sell Orders</v-list-item-title>
            <v-list-item-subtitle class="_font-bold">
              {{ valueSellOrder }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <div class="user-settings-layout flex flex-wrap gap-4">
      <!-- Account Summary Cards -->
      <v-card class="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md"
              v-for="account in accounts" :key="account.uuid">
        <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
          <v-icon class="mr-2">mdi-wallet</v-icon>
          {{ account.name }}
        </v-card-title>
        <v-card-text>
          <p>Available Balance: {{ toCurrency(account.available_balance.value) }}</p>
          <p>Hold: {{ toCurrency(account.hold.value) }}</p>
          <p>Total: {{ toCurrency(parseFloat(account.available_balance.value) + parseFloat(account.hold.value)) }}</p>
        </v-card-text>
      </v-card>

      <!-- BTC Price Card -->
      <v-card class="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md">
        <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
          <v-icon class="mr-2">mdi-currency-btc</v-icon>
          BTC Price
        </v-card-title>
        <v-card-text>
          <p>Bid Price: {{ btcBidPrice }}</p>
          <p>Ask Price: {{ btcAskPrice }}</p>
          <p>Average Price: {{ btcAveragePrice }}</p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toCurrency} from "@/stats/Utils";
import {computed} from "vue";
import {AccountState} from "@/stats/AccountState";

const {
  accountOrderList, accountInfo, coinbaseState,
  usdAccount, usdcAccount, btcAccount
} = AccountState();

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

// Bitcoin Account
const totalBtc = computed(() => {
  // return parseFloat(accountInfo.value.available_balance.value) + parseFloat(accountInfo.value.hold.value);
  return Number((btcAvailable.value + btcHold.value).toFixed(8));
});
const btcAvailable = computed(() => {
  return Number(parseFloat(btcAccount.value.available_balance.value).toFixed(8));
});
const btcHold = computed(() => {
  return Number(parseFloat(btcAccount.value.hold.value).toFixed(8));
});
// Bitcoin Account Values
const totalBtcValue = computed(() => {
  return toCurrency(Number((totalBtc.value * btcPrice.value).toFixed(2)));
});
const btcAvailableValue = computed(() => {
  return toCurrency(Number((btcAvailable.value * btcPrice.value).toFixed(2)));
});
const btcHoldValue = computed(() => {
  return toCurrency(Number((btcHold.value * btcPrice.value).toFixed(2)));
});

// Cash Account
const totalCash = computed(() => {
  return parseFloat(usdAccount.value.available_balance.value) + parseFloat(usdAccount.value.hold.value);
});
const cashAvailable = computed(() => {
  return parseFloat(usdAccount.value.available_balance.value);
});
const cashHold = computed(() => {
  return parseFloat(usdAccount.value.hold.value);
});
// Cash Account Values
const totalCashValue = computed(() => {
  return toCurrency(totalCash.value);
});
const cashAvailableValue = computed(() => {
  return toCurrency(cashAvailable.value);
});
const cashHoldValue = computed(() => {
  return toCurrency(cashHold.value);
});

// USDC Account
const usdcAvailable = computed(() => {
  return parseFloat(usdcAccount.value.available_balance.value);
});
const usdcHold = computed(() => {
  return parseFloat(usdcAccount.value.hold.value);
});
const totalUsdc = computed(() => {
  return parseFloat(usdcAccount.value.available_balance.value) + parseFloat(usdcAccount.value.hold.value);
});
const totalUsdcValue = computed(() => {
  return toCurrency(totalUsdc.value);
});
const usdcAvailableValue = computed(() => {
  return toCurrency(usdcAvailable.value);
});
const usdcHoldValue = computed(() => {
  return toCurrency(usdcHold.value);
});


// Computed properties for accounts and prices
const accounts = computed(() => coinbaseState.value.accounts || []);

const btcBidPrice = computed(() => {
  const btcPriceBook = coinbaseState.value.pricebooks.find((book: any) => book.product_id === "BTC-USD");
  return btcPriceBook ? parseFloat(btcPriceBook.bids[0].price).toFixed(2) : "N/A";
});

const btcAskPrice = computed(() => {
  const btcPriceBook = coinbaseState.value.pricebooks.find((book: any) => book.product_id === "BTC-USD");
  return btcPriceBook ? parseFloat(btcPriceBook.asks[0].price).toFixed(2) : "N/A";
});

const btcAveragePrice = computed(() => {
  const bid = parseFloat(btcBidPrice.value);
  const ask = parseFloat(btcAskPrice.value);
  return (bid && ask) ? ((bid + ask) / 2).toFixed(2) : "N/A";
});

const sellOrder = computed(() => {
  return accountOrderList.value.filter((item) => item.side === "SELL");
});

const buyOrder = computed(() => {
  return accountOrderList.value.filter((item) => item.side === "BUY");
});

const valueBuyOrder = computed(() => {
  return buyOrder.value.reduce((acc, item) => {
    const price = Number(item.order_configuration.limit_limit_gtc.limit_price) || 0;
    const size = Number(item.order_configuration.limit_limit_gtc.base_size) || 0;
    return acc + price * size;
  }, 0);
});

const valueSellOrder = computed(() => {
  return sellOrder.value.reduce((acc, item) => {
    const price = Number(item.order_configuration.limit_limit_gtc.limit_price) || 0;
    const size = Number(item.order_configuration.limit_limit_gtc.base_size) || 0;
    return acc + price * size;
  }, 0);
});

const openOrders = computed(() => {
  return coinbaseState.value.accounts.flatMap((account: any) => account.orders || [])
      .filter((order: any) => order.status === "OPEN")
      .map((order: any) => ({
        side: order.side,
        price: order.order_configuration.limit_limit_gtc.limit_price,
        size: order.order_configuration.limit_limit_gtc.base_size,
      }));
});

</script>
