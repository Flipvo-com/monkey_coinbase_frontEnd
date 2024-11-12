<template>
  <div class="_flex _flex-wrap _gap-2">
    <v-card class="_flex-1">
      <v-card-text class=" ">
        <v-list lines="one">
          <v-list-item>
            <v-list-item-title> Bitcoin</v-list-item-title>
            <v-list-item-subtitle class="_text-green-500 _text-3xl">
              {{ TotalBitcoin }}
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
              {{ getBTCHoldToUSD }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card class="_flex-1">
      <v-card-text class=" ">
        <v-list lines="one">
          <v-list-item>
            <v-list-item-title>Total USD</v-list-item-title>
            <v-list-item-subtitle class="_text-red-500 _text-3xl">
              {{ getBTCTotalToUSD }}
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
import { toCurrency } from "@/stats/Utils";
import { computed } from "vue";
import { AccountState } from "@/stats/AccountState";

const { accountOrderList, accountInfo, allJsonData } = AccountState();

const btcPrice = computed(() => {
  let BTCBook = allJsonData.value.pricebooks.find(
    (item) => item.product_id === "BTC-USD",
  );
  let asks = parseFloat(BTCBook?.asks[0].price);
  let bids = parseFloat(BTCBook?.bids[0].price);

  return (asks + bids) / 2;
});


const btcAvailable = computed(()=>{

    parseFloat(accountInfo.value.hold.value);
}) 

const btcHold = parseFloat(accountInfo.value.hold.value);
const btcTotal = btcAvailable + btcHold;
const btcAvailableUsdValue = parseFloat((btcAvailable * btcPrice.value).toFixed(2));
const btcHoldUsdValue = parseFloat((btcHold*btcPrice.value).toFixed(2));

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
  return ( av * btcPrice.value).toFixed(2);
});

const getBTCHoldToUSD = computed(() => {
    let hold = parseFloat(accountInfo.value.hold.value);
  return ( hold * btcPrice.value).toFixed(2);
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
