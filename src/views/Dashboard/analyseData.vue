<template>
  <div class="flex flex-wrap gap-2 mb-5">

    <v-card class="flex-1">
      <v-card-title class="flex justify-between items-center">
        <h1 class="flex items-center space-x-2">
          <i class="fa-solid fa-list text-gray-600 text-xl"></i>
          <span>Orders</span>
        </h1>
        <span class="text-gray-600">{{ buyOrder.length + sellOrder.length }} Orders</span>
      </v-card-title>

      <v-card-text>
        <!-- Sell Orders Section -->
        <section>
          <h2 class="text-red-500 mb-2"><i class="fa-thin fa-arrow-trend-down"></i> Sell Orders</h2>
          <v-list :lines="false" slim density="compact">
            <OrderItem
                v-for="(item, i) in sellOrder"
                :key="i"
                :order="item"
                :isBuyOrder="false"
                :fillCountColor="fillCountColor"
            />
          </v-list>
        </section>

        <v-divider color="red" class="my-4"/>
        <div class="text-center text-gray-600">
          Price: $90,000.00 | 24hr Change: +0.75% | 24hr High: $90,000.00 | 24hr Low: $90,000.00
        </div>
        <v-divider color="red" class="my-4"/>

        <!-- Buy Orders Section -->
        <section>
          <v-list :lines="false" slim density="compact">
            <OrderItem
                v-for="(item, i) in buyOrder"
                :key="i"
                :order="item"
                :isBuyOrder="true"
                :fillCountColor="fillCountColor"
            />
          </v-list>
          <h2 class="text-green-500 mb-2"><i class="fa-thin fa-arrow-trend-up"></i> Buy Orders</h2>
        </section>

      </v-card-text>
    </v-card>

    <!-- Open Orders Summary -->
    <v-card class="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md">
      <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
        <v-icon class="mr-2">mdi-format-list-bulleted</v-icon>Open Orders
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item v-for="order in openOrders" :key="order.order_id">
            <v-list-item-title>
              <span>{{ order.side }} Order</span>
              <span class="float-right">Size: {{ order.size }} @ {{ order.price }}</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { AccountState } from "@/stats/AccountState";
import {toCurrency} from "@/stats/Utils";
import OrderItem from "@/components/OrderItem.vue"; // Assuming you place this as a child component

const {accountOrderList, coinbaseState} = AccountState();

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
  const btcPriceBook = coinbaseState.value.pricebooks.find((book:any) => book.product_id === "BTC-USD");
  return btcPriceBook ? parseFloat(btcPriceBook.bids[0].price).toFixed(2) : "N/A";
});

const btcAskPrice = computed(() => {
  const btcPriceBook = coinbaseState.value.pricebooks.find((book:any) => book.product_id === "BTC-USD");
  return btcPriceBook ? parseFloat(btcPriceBook.asks[0].price).toFixed(2) : "N/A";
});

const btcAveragePrice = computed(() => {
  const bid = parseFloat(btcBidPrice.value);
  const ask = parseFloat(btcAskPrice.value);
  return (bid && ask) ? ((bid + ask) / 2).toFixed(2) : "N/A";
});

const openOrders = computed(() => {
  return coinbaseState.value.accounts.flatMap((account:any) => account.orders || [])
      .filter((order:any) => order.status === "OPEN")
      .map((order:any) => ({
        side: order.side,
        price: order.order_configuration.limit_limit_gtc.limit_price,
        size: order.order_configuration.limit_limit_gtc.base_size,
      }));
});

const sellOrder = computed(() => {
  return accountOrderList.value
      .filter((item) => item.side === "SELL")
      .sort((a, b) => parseFloat(b.order_configuration.limit_limit_gtc.limit_price) - parseFloat(a.order_configuration.limit_limit_gtc.limit_price))
      .slice(0, 10);
});

const buyOrder = computed(() => {
  return accountOrderList.value
      .filter((item) => item.side === "BUY")
      .sort((a, b) => parseFloat(b.order_configuration.limit_limit_gtc.limit_price) - parseFloat(a.order_configuration.limit_limit_gtc.limit_price))
      .slice(0, 10);
});

const fillCountColor = (fillCount: number, color = 'blue') => {
  return fillCount > 9 ? `_text-${color}-500` : `_text-${color}-${fillCount}00`;
};
</script>
