<template>
  <div class="_flex flex-wrap _gap-2 mb-5">
    <v-card class="_flex-1">
      <v-card-title>
        <h1>
          <i class="fa-solid fa-list text-gray-600 text-xl"></i> Orders
          <span class="_float-right">
            {{ buyOrder.length + sellOrder.length }} Orders
          </span>
        </h1>
      </v-card-title>
      <v-card-text>

        <!-- Sell Orders Section -->
        <div>
          <v-list :lines="false" slim density="compact">
            <v-list-item v-for="(item, i) in sellOrder" :key="i" :value="item">
              <template v-slot:prepend>
                <v-icon>fa-thin fa-arrow-trend-down</v-icon> <!-- Arrow for Sell Order -->
              </template>
              <v-list-item-title class="flex flex-col space-y-2 _text-red-500 !_text-sm">
                <div class="flex items-center space-x-4">
                  <span>
                    <i class="fa-solid fa-scroll"></i> 💲{{ item.order_configuration.limit_limit_gtc.limit_price }}
                  </span>
                  <span><i class="fa-solid fa-arrow-trend-down"></i> -0.81%</span>
                  <span>🛡️ {{ item.order_configuration.limit_limit_gtc.base_size }}</span>
                  <span>💰 $6.34</span>
                  <span>🕒 2 minutes ago</span>
                  <span>
                    <span v-for="n in item.fillCount" :key="`fill-${n}`" class="fa-solid fa-battery-full mx-0.5"></span>
                  </span>
                  <span>💲 {{ item.average_filled_price }}</span>
                  <span>🛡️ {{ item.outstanding_hold_amount }}</span>
                  <span>💰 ${{ parseFloat(item.total_value_after_fees).toFixed(2) }}</span>
                  <span>🍌 $0.3805</span>
                  <span>💵 💰$0.3488</span>
                  <span>💲$0.0195</span>
                </div>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </div>

        <v-divider color="red" class="my-2"/>
        <div class="text-center text-gray-600">Price Details</div>
        <v-divider color="red" class="my-2"/>

        <!-- Buy Orders Section -->
        <div class="mb-4">
          <v-list :lines="false" slim density="compact">
            <v-list-item v-for="(item, i) in buyOrder" :key="i" :value="item">
              <template v-slot:prepend>
                <v-icon>fa-thin fa-arrow-trend-up</v-icon> <!-- Up arrow for Buy Order -->
              </template>
              <v-list-item-title class="flex flex-col space-y-2 _text-green-400 !_text-sm">
                <div class="flex items-center space-x-4">
                  <span><i class="fa-solid fa-scroll"></i> 💲{{
                      item.order_configuration.limit_limit_gtc.limit_price
                    }}</span>
                  <span><i class="fa-solid fa-arrow-trend-up"></i> +672.29 (+0.759%)</span>
                  <span>🛡️ {{ item.order_configuration.limit_limit_gtc.base_size }}</span>
                  <span>💰 $6.74</span>
                  <span>🕒 4 minutes ago</span>
                  <span>
                    <span v-for="n in item.fillCount" :key="`fill-${n}`" class="fa-solid fa-battery-full mx-0.5"></span>
                  </span>
                  <span>💱 715.94 - 0.81%</span>
                  <span>💲 {{ item.average_filled_price }}</span>
                  <span>🛡️ {{ item.outstanding_hold_amount }}</span>
                  <span>💰 ${{ parseFloat(item.total_value_after_fees).toFixed(2) }}</span>
                </div>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </div>

      </v-card-text>
    </v-card>
  </div>
  <v-card-title>
    <i class="fa-solid fa-clipboard-list v-icon notranslate v-theme--dark v-icon--size-default"
       aria-hidden="true"></i>
    <i class="fa-solid fa-arrows-rotate text-gray-600 text-xl"></i>
    <i class="fa-solid fa-coins text-gray-600 text-xl"></i>
    <h1>
      <i class="fa-solid fa-list text-gray-600 text-xl"></i> Orders
    </h1>
  </v-card-title>
</template>

<script setup lang="ts">

import {computed} from "vue";
import {AccountState} from "@/stats/AccountState";

const {accountOrderList, accountInfo, allJsonData} = AccountState();

console.log('accountOrderList.value', accountOrderList.value);
console.log('accountInfo.value', accountInfo.value);
console.log('allJsonData.value', allJsonData.value);

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

const fillCountColor = (fillCount: number, color?: string) => {
  color = color || 'blue';
  if (fillCount > 9) {
    return `_text-${color}-500`;
  } else {
    return `_text-${color}-${fillCount}00`;
  }
};
</script>
