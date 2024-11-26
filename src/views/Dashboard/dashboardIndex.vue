<template>
  <v-container class="mb-2" style="padding: 1px" fluid>
    <v-row>
      <v-col cols="12" md="4" class="mb-0">
        <v-card style="border: 1px solid #7a7a7a; padding: 1rem;">
          <v-card-title class="d-flex align-items-center justify-space-between">
            <div class="d-flex align-items-center">
              <i class="fa-brands fa-bitcoin _text-[#ff9933] mr-2" style="line-height: 1;"></i>
              <span>Bitcoin</span>
            </div>
            <span class="_text-blue-400">{{ toCurrency(btcPrice) }}</span>
          </v-card-title>

          <v-card-text>
            <div class="d-flex justify-space-between mb-3">

              <v-tooltip text="Total BTC">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" style="padding: 0">
                    <v-chip prepend-icon="fa-brands fa-bitcoin">
                      {{ totalBtc }}
                    </v-chip>
                  </v-btn>
                </template>
              </v-tooltip>

              <v-tooltip text="Total BTC">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" style="padding: 0">
                    <v-chip prepend-icon="fa-brands fa-bitcoin">
                      {{ totalBtc }}
                    </v-chip>
                  </v-btn>
                </template>
              </v-tooltip>

            </div>

            <div class="d-flex justify-space-between mb-3">
              <span class="_text-green-300">₿ {{ btcAvailable }}</span>
              <span class="_text-red-200">🛑 Hold: {{ btcHold }}</span>
            </div>


            <div class="d-flex justify-space-between align-items-center _text-blue-300 mb-3">
              <span><strong>Total Value:</strong></span>
              <span>{{ totalBtcValue }}</span>
            </div>

            <div class="d-flex justify-space-between mb-3">
              <span class="_text-green-300">₿ 🟢 Available: {{ btcAvailable }}</span>
              <span class="_text-red-200">🛑 Hold: {{ btcHold }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <span class="_text-green-300">₿ 💲 Value: {{ btcAvailableValue }}</span>
              <span class="_text-red-200">💲 Value: {{ btcHoldValue }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Bitcoin Account Card -->
      <v-col cols="12" md="4" class="mb-0">
        <v-card class="p-0" style="border: 1px solid #7a7a7a;">
          <v-card-title class="d-flex align-items-center">
            <i class="fa-brands fa-bitcoin _text-[#ff9933] _text-3xl mr-2"></i>
            <span class="_text-3xl">Bitcoin</span>
            <span class="_text-2xl _text-blue-400 ml-auto">{{ toCurrency(btcPrice) }}</span>
          </v-card-title>
          <v-card-text>
            <div class="_text-blue-300 mb-3">
              <strong>Total Value:</strong> {{ totalBtcValue }}
              <div>₿ 💰 {{ totalBtc }}</div>
            </div>
            <div class="d-flex justify-space-between mb-3">
              <span class="_text-green-300">₿ 🟢 Available: {{ btcAvailable }}</span>
              <span class="_text-red-200">🛑 Hold: {{ btcHold }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <span class="_text-green-300">₿ 💲 Value: {{ btcAvailableValue }}</span>
              <span class="_text-red-200">💲 Value: {{ btcHoldValue }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Cash Account Card -->
      <v-col cols="12" md="4" class="mb-0">
        <v-card style="border: 1px solid #7a7a7a;">
          <v-card-title class="d-flex align-items-center">
            <span class="_text-3xl mr-2">💵 Cash</span>
            <span class="_text-2xl _text-blue-400 ml-auto">Total: {{ totalCashValue }}</span>
          </v-card-title>
          <v-card-text>
            <div class="d-flex justify-space-between">
              <span class="_text-green-300">🟢 Available: {{ cashAvailableValue }}</span>
              <span class="_text-red-200">🛑 Hold: {{ cashHoldValue }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- USDC Account Card -->
      <v-col cols="12" md="4" class="mb-0">
        <v-card style="border: 1px solid #7a7a7a;">
          <v-card-title class="d-flex align-items-center">
            <img src="/public/usd-coin-usdc-logo.svg" class="_w-8 _h-8 mr-2 d-inline-block" alt="USDC">
            <span class="_text-3xl">USDC</span>
            <span class="_text-2xl _text-blue-400 ml-auto">Total: {{ totalUsdcValue }}</span>
          </v-card-title>
          <v-card-text>
            <div class="d-flex justify-space-between">
              <span class="_text-green-300">🟢 Available: {{ usdcAvailableValue }}</span>
              <span class="_text-red-200">🛑 Hold: {{ usdcHoldValue }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <div class="text-center">
    <div>
      <v-btn
          class="ma-2"
          color="primary"
      >
        Accept
        <v-icon
            icon="mdi-checkbox-marked-circle"
            end
        ></v-icon>
      </v-btn>

      <v-btn
          class="ma-2"
          color="red"
      >
        Decline
        <v-icon
            icon="mdi-cancel"
            end
        ></v-icon>
      </v-btn>

      <v-btn
          class="ma-2"
      >
        <v-icon
            icon="mdi-minus-circle"
            start
        ></v-icon>
        Cancel
      </v-btn>
    </div>

    <div>
      <v-btn
          class="ma-2"
          color="orange-darken-2"
      >
        <v-icon
            icon="mdi-arrow-left"
            start
        ></v-icon>
        Back
      </v-btn>

      <v-btn
          class="ma-2"
          color="purple"
          icon="mdi-wrench"
      ></v-btn>

      <v-btn
          class="ma-2"
          color="indigo"
          icon="mdi-cloud-upload"
      ></v-btn>
    </div>

    <div>
      <v-btn
          class="ma-2"
          color="blue-lighten-2"
          icon="mdi-thumb-up"
          variant="text"
      ></v-btn>

      <v-btn
          class="ma-2"
          color="red-lighten-2"
          icon="mdi-thumb-down"
          variant="text"
      ></v-btn>
    </div>
  </div>


  <v-icon icon="$vuetify"></v-icon>
  <v-tooltip text="Tooltip">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">Hover Over Me</v-btn>
    </template>
  </v-tooltip>


  <div>
    <div class="d-flex justify-space-around">
      <v-icon icon="fa:fas fa-lock"></v-icon>

      <v-icon icon="fa:fas fa-search"></v-icon>

      <v-icon icon="fa:fas fa-list"></v-icon>

      <v-icon icon="fa:fas fa-edit"></v-icon>

      <v-icon icon="fa:fas fa-tachometer-alt"></v-icon>

      <v-icon icon="fa:fas fa-circle-notch fa-spin"></v-icon>
    </div>
  </div>

  <!--  todo - finish down from here-->
  <div class="_flex _flex-wrap _gap-2 d-none">
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
    <!-- todo - Need to convert all this stuff to better looking data    -->
    <!-- todo - Need to convert all this stuff to better looking data    -->
    <!-- todo - Need to convert all this stuff to better looking data    -->

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
  accountOrderList,
  coinbaseState,
  usdAccount,
  usdcAccount,
  btcAccount
} = AccountState();

const btcPrice = computed(() => {
  console.log(coinbaseState.value.pricebooks);


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

// todo - Keep working my way down
// todo - Keep working my way down
// todo - Keep working my way down


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

<style scoped>
</style>