<template>
  <div class="_flex flex-wrap _gap-2">
    <v-card class="_flex-1">
      <v-card-title>
        <h1>Orders BTC</h1>
      </v-card-title>
      <v-card-text>
        <div class="_overflow-scroll">
          <v-list :lines="false" slim class="_h-[200px]" density="compact">
            <v-list-item
              v-for="(item, i) in buyOrder"
              :key="i"
              :value="item"
            >
              <template v-slot:prepend>
                <v-icon :icon="'fa-thin fa-spinner fa-spin'"></v-icon>
              </template>

              <v-list-item-title class="_text-green-400 !_text-sm ">
                {{ item.outstanding_hold_amount }}
              </v-list-item-title>
              <template v-slot:append v-if="item.fillCount > 1">
                  <b class="_mr-2">  {{item.fillCount}}</b>
                <v-icon :class="fillCountColor(item.fillCount)">fa-solid fa-recycle</v-icon>
              </template>
            </v-list-item>
          </v-list>
        </div>
        <v-divider color="red" class="_my-2" />
        <div class="_overflow-scroll">
          <v-list class="_h-[200px]" :lines="false" slim density="compact">
            <v-list-item
              v-for="(item, i) in sellOrder"
              :key="i"
              :value="item"
              color="primary"
            >
              <template v-slot:prepend>
                <v-icon :icon="'fa-thin fa-user'"></v-icon>
              </template>

              <v-list-item-title class="_text-red-500 !_text-sm">
                <VIcon size="15">fa-solid fa-bitcoin-sign</VIcon>
                {{ item.outstanding_hold_amount }}
              </v-list-item-title>
              <template v-slot:append v-if="item.fillCount > 1">
                  <b class="_mr-2">  {{item.fillCount}}</b>
                  <v-icon :class="fillCountColor(item.fillCount)">fa-solid fa-recycle</v-icon>
              </template>
            </v-list-item>
          </v-list>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import { AccountState } from "@/stats/AccountState";
import { computed } from "vue";
import {fill} from "lodash";

const { accountOrderList } = AccountState();

const sellOrder = computed(() => {
  return accountOrderList.value
    .filter((item) => item.side === "SELL")
    .slice(0, 10);
});

const buyOrder = computed(() => {
  return accountOrderList.value
    .filter((item) => item.side === "BUY")
    .slice(0, 10);
});

const fillCountColor = (fillCount: number, color?:string) => {
    color = color || 'blue';
  if (fillCount >9) {
    return `_text-${color}-500`;
  }else {
    return `_text-${color}-${fillCount}00`;
  }
};
</script>
