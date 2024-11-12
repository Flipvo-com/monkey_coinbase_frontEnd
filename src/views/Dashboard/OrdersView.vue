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
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { AccountState } from "@/stats/AccountState";
import OrderItem from "@/components/OrderItem.vue"; // Assuming you place this as a child component

const { accountOrderList, accountInfo, allJsonData } = AccountState();

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
