<template>
  <div class="_flex _flex-wrap _gap-2">
    <v-card class="_w-full">
      <v-card-text class=" ">
        <v-list lines="one">
          <v-list-item>
            <v-list-item-title class="mb-3">
              <i class="fa-brands fa-bitcoin _text-[#ff9933] _text-3xl"></i>
              Bitcoin asdf
              <div class="float-right">Price: {{ toCurrency(90000) }}</div>
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

const {accountOrderList, accountInfo, allJsonData} = AccountState();

const btcPrice = computed(() => {
  let BTCBook = allJsonData.value.pricebooks.find(
      (item) => item.product_id === "BTC-USD",
  );
  let asks = parseFloat(BTCBook?.asks[0].price);
  let bids = parseFloat(BTCBook?.bids[0].price);

  return (asks + bids) / 2;
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
