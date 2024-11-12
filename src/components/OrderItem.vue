<template>
  <v-list-item>
    <template v-slot:prepend>
      <v-icon :class="isBuyOrder ? 'text-green-500' : 'text-red-500'">
        {{ isBuyOrder ? 'fa fa-arrow-trend-up' : 'fa fa-arrow-trend-down' }}
      </v-icon>
    </template>
    <v-list-item-title class="flex flex-wrap items-center space-x-4 text-sm">
      <span><v-icon>fa fa-scroll</v-icon> 💲{{ order.order_configuration.limit_limit_gtc.limit_price }}</span>
      <span>
        <v-icon :class="isBuyOrder ? 'fa fa-arrow-trend-up' : 'fa fa-arrow-trend-down'"></v-icon>
        {{ isBuyOrder ? '+672.29 (+0.759%)' : '-0.81%' }}
      </span>
      <span>🛡️ {{ order.order_configuration.limit_limit_gtc.base_size }}</span>
      <span>💰 ${{ formatPrice(order) }}</span>
      <span>🕒 {{ timeAgo(order.created_time) }}</span>
      <span v-for="n in order.fillCount" :key="`fill-${n}`" :class="fillCountColor(order.fillCount)" class="fa-solid fa-battery-full mx-0.5"></span>
      <span>💲 {{ order.average_filled_price }}</span>
      <span>🛡️ {{ order.outstanding_hold_amount }}</span>
      <span>💰 ${{ parseFloat(order.total_value_after_fees).toFixed(2) }}</span>
    </v-list-item-title>
  </v-list-item>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { format, formatDistanceToNow } from 'date-fns';

interface Props {
  order: any;
  isBuyOrder: boolean;
  fillCountColor: (fillCount: number, color?: string) => string;
}

const props = defineProps<Props>();

const formatPrice = (order: any) => {
  return parseFloat(order.total_value_after_fees).toFixed(2);
};

const timeAgo = (created_time: string) => {
  return formatDistanceToNow(new Date(created_time), { addSuffix: true });
};
</script>
