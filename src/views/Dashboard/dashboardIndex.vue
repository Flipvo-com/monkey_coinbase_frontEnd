<template>
  <div class="_flex _flex-wrap _gap-2">
    <div class="user-settings-layout flex flex-wrap gap-4">

      <!-- Account Summary Cards -->
      <v-card class="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md" v-for="account in accounts" :key="account.uuid">
        <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
          <v-icon class="mr-2">mdi-wallet</v-icon>{{ account.name }}
        </v-card-title>
        <v-card-text>
          <p>Available Balance: {{ toCurrency(account.available_balance.value, account.currency) }}</p>
          <p>Hold: {{ toCurrency(account.hold.value, account.currency) }}</p>
          <p>Total: {{ toCurrency(parseFloat(account.available_balance.value) + parseFloat(account.hold.value), account.currency) }}</p>
        </v-card-text>
      </v-card>

      <!-- BTC Price Card -->
      <v-card class="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md">
        <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
          <v-icon class="mr-2">mdi-currency-btc</v-icon>BTC Price
        </v-card-title>
        <v-card-text>
          <p>Bid Price: {{ btcBidPrice }}</p>
          <p>Ask Price: {{ btcAskPrice }}</p>
          <p>Average Price: {{ btcAveragePrice }}</p>
        </v-card-text>
      </v-card>

    </div>

    <v-card class="_w-full">
      <v-card-text class="">
        <v-list lines="one" class="">
          <v-list-item>
            <v-list-item-title class="mb-3">
              <i class="fa-brands fa-bitcoin _text-[#ff9933] _text-3xl"></i>
              Bitcoin
              <div class="float-right">Price: {{ toCurrency(btcPrice) }}</div>
            </v-list-item-title>
            <v-list-item-title class="mb-3">
              <div>
                <div class="float-right">
                  Total Value: {{ toCurrency(3000) }}
                </div>
                ₿ {{ 0.12345678 }}
              </div>
            </v-list-item-title>
            <v-list-item-subtitle class="_text-green-500 _text-3xl">
              🟢 Available: {{ toCurrency(3000) }}
              <div class="float-right">🛑 Hold: {{ toCurrency(3000) }}</div>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-card class="_w-full">
      <v-card-text class=" ">
        <v-list lines="one">
          <v-list-item>
            <v-list-item-title class="mb-3">
              💵 Cash
              <div class="float-right">Total: {{ toCurrency(90000) }}</div>
            </v-list-item-title>
            <v-list-item-subtitle class="_text-green-500 _text-3xl">
              🟢 Available: {{ toCurrency(3000) }}
              <div class="float-right">🛑 Hold: {{ toCurrency(3000) }}</div>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

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

  </div>
</template>

<script setup lang="ts">
import {toCurrency} from "@/stats/Utils";
import {computed} from "vue";
import {AccountState} from "@/stats/AccountState";

const {accountOrderList, accountInfo, coinbaseState} = AccountState();

const btcPrice = computed(() => {
  let BTCBook = coinbaseState.value.pricebooks.find((item:{
    product_id: string;
    asks: {price: string}[];
    bids: {price: string}[];
  }) => item.product_id === "BTC-USD");
  if (!BTCBook) {
    return 0;
  }

  let asks = parseFloat(BTCBook?.asks[0].price);
  let bids = parseFloat(BTCBook?.bids[0].price);
  return (asks + bids) / 2;
});

// Computed properties for accounts and prices
const accounts = computed(() => coinbaseState.value.accounts || []);

const btcBidPrice = computed(() => {
  const btcPriceBook = coinbaseState.value.pricebooks.find(book => book.product_id === "BTC-USD");
  return btcPriceBook ? parseFloat(btcPriceBook.bids[0].price).toFixed(2) : "N/A";
});

const btcAskPrice = computed(() => {
  const btcPriceBook = coinbaseState.value.pricebooks.find(book => book.product_id === "BTC-USD");
  return btcPriceBook ? parseFloat(btcPriceBook.asks[0].price).toFixed(2) : "N/A";
});

const btcAveragePrice = computed(() => {
  const bid = parseFloat(btcBidPrice.value);
  const ask = parseFloat(btcAskPrice.value);
  return (bid && ask) ? ((bid + ask) / 2).toFixed(2) : "N/A";
});

const openOrders = computed(() => {
  return coinbaseState.value.accounts.flatMap(account => account.orders || [])
      .filter(order => order.status === "OPEN")
      .map(order => ({
        side: order.side,
        price: order.order_configuration.limit_limit_gtc.limit_price,
        size: order.order_configuration.limit_limit_gtc.base_size,
      }));
});

const coinState = computed(() => {
  return coinbaseState.value || {};
});

// const btcAvailable = computed(() => {
//   parseFloat(accountInfo.value.hold.value);
// });

const btcHold = parseFloat(accountInfo.value.hold.value);
// const btcTotal = btcAvailable + btcHold;
// const btcAvailableUsdValue = parseFloat((btcAvailable * btcPrice.value).toFixed(2));
// const btcHoldUsdValue = parseFloat((btcHold*btcPrice.value).toFixed(2));

const sellOrder = computed(() => {
  return accountOrderList.value.filter((item) => item.side === "SELL");
});

const TotalBitcoin = computed(() => {
  let a = accountInfo.value.available_balance.value;
  let b = accountInfo.value.hold.value;
  // console.log(a, b, parseFloat(a) + parseFloat(b));
  return (parseFloat(a) + parseFloat(b)).toFixed(8);
});

const getBTCTotalToUSD = computed(() => {
  console.log(accountInfo.value);
  let av = parseFloat(accountInfo.value.available_balance.value);
  let hold = parseFloat(accountInfo.value.hold.value);
  return ((av + hold) * btcPrice.value).toFixed(2);
});

const getBTCAvailableToUSD = computed(() => {
  let av = parseFloat(accountInfo.value.available_balance.value);
  return (av * btcPrice.value).toFixed(2);
});

const getBTCHoldToUSD = computed(() => {
  let hold = parseFloat(accountInfo.value.hold.value);
  return (hold * btcPrice.value).toFixed(2);
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

</script>
