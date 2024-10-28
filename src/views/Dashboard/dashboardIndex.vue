<template>
  <div class="_flex _flex-wrap _gap-2 ">
    <v-card class="_flex-1">
      <v-card-text class=" ">
        <v-list lines="one">
          <v-list-item>
            <v-list-item-title>Available Balance</v-list-item-title>
            <v-list-item-subtitle class="_text-green-500 _text-3xl">
              {{ accountInfo.available_balance.value }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card class="_flex-1">
      <v-card-text class=" ">
        <v-list lines="one">
          <v-list-item>
            <v-list-item-title>Hold</v-list-item-title>
            <v-list-item-subtitle class="_text-red-500 _text-3xl">
              {{ accountInfo.hold.value }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
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
                                      (sellOrder.length / (sellOrder.length + buyOrder.length)) *
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
import { toCurrency } from "@/stats/Utils";
import { computed } from "vue";
import { AccountState } from "@/stats/AccountState";

const { accountOrderList, accountInfo } = AccountState();
const sellOrder = computed(() => {
  return accountOrderList.value.filter((item) => item.side === "SELL");
});

const buyOrder = computed(() => {
  return accountOrderList.value.filter((item) => item.side === "BUY");
});
const valueBuyOrder = computed(() => {
  return buyOrder.value.reduce((acc, item) => {
    return (
      acc +
      item.order_configuration.limit_limit_gtc.limit_price *
        item.order_configuration.limit_limit_gtc.base_size
    );
  }, 0);
});
const valueSellOrder = computed(() => {
  return sellOrder.value.reduce((acc, item) => {
    return (
      acc +
      item.order_configuration.limit_limit_gtc.limit_price *
        item.order_configuration.limit_limit_gtc.base_size
    );
  }, 0);
});
</script>
