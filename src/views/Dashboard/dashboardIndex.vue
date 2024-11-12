<template>
  <div class="_flex _flex-wrap _gap-2">
    <v-card class="_flex-1">
      <v-card-text class=" ">
        <v-list lines="one">
          <v-list-item>
            <v-list-item-title class="mb-3">
              <img src="/public/bitcoin-btc-logo.svg"
                   class="bitcoin-logo mr-1"
                   alt="Bitcoin"/>
              Bitcoin
              <div class="float-right">
                Price: {{ toCurrency(90000) }}
              </div>
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
              <div class="float-right">
                🛑 Hold: {{ toCurrency(3000) }}
              </div>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card class="_flex-1">
      <v-card-text class=" ">
        <v-list lines="one">
          <v-list-item>
            <v-list-item-title class="mb-3">
              💵 Cash
              <div class="float-right">
                Total: {{ toCurrency(90000) }}
              </div>
            </v-list-item-title>
            <v-list-item-subtitle
                class="_text-green-500 _text-3xl">
              🟢 Available: {{ toCurrency(3000) }}
              <div class="float-right">
                🛑 Hold: {{ toCurrency(3000) }}
              </div>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-card class="_w-full" density="compact">
      <h1>Coming Soon!</h1>

      📜:💲89210.55 📉 +798.38 (+0.903%) 🛡️ 0.00010156 💰$9.06 🕒 4 hours ago 5 🔋🔋🔋🔋🔋🔋🔋🔋🔋 💱1086.07 - 1.23%💱 💲88124.48 🛡️0.00010 💰$9.09 🍌 $-0.0606 💵 💰$0.1454 💲$0.0653
      <br />
      📜:💲89210.55 📉 +798.38 (+0.903%) 🛡️ 0.00010156 💰$9.06 🕒 4 hours ago 5 🔋🔋🔋🔋🔋🔋🔋🔋🔋 💱1086.07 - 1.23%💱 💲88124.48 🛡️0.00010 💰$9.09 🍌 $-0.0606 💵 💰$0.1454 💲$0.0653
      <br />
      📜:💲89149.64 📉 +737.47 (+0.834%) 🛡️ 0.00011347 💰$10.12 🕒 36 minutes ago 1 🔋🔋🔋🔋🔋🔋🔋🔋🔋🔋 💱689.56 - 0.78%💱 💲88460.08 🛡️0.00011 💰$9.52 🍌 $0.5645 💵 💰$0.5197 💲$0.0264
      <br />
      --- 🏦 Ask/Bid: 📜 $88412.17 - 💸 $88412.16 --
      <br />
      💸:💲88012.88 📈 -399.28 (-0.452%) 🛡️ 0.00004876 💰$4.29 🕒 2 hours ago 8 🔋🔋🔋🔋 🥇
      <br />
      💸:💲87942.54 📈 -469.62 (-0.531%) 🛡️ 0.00007812 💰$6.87 🕒 2 hours ago 6 🔋🔋🔋🔋🔋🔋 🥇
      <br />
      💸:💲87872.92 📈 -539.24 (-0.609%) 🛡️ 0.00007812 💰$6.87 🕒 2 hours ago 6 🔋🔋🔋🔋🔋🔋 🥇

    </v-card>

    <v-card class="_w-full" density="compact">
      <div>
        <div class="mb-2">
          🛡️ Available: $13.04  ♻️ %4.95   🚧   🛡️ Crypto Value: $132.40          ♻️  %50.29
        </div>
        <div>
          💲 Available: $8.59  ♻️ %3.26   🚧   💲 Cash Value: $130.87    ♻️  %49.71
        </div>
      </div>
    </v-card>

    <v-card class="_w-full" density="compact">
      <div>
        <div>
          🏦 Accounts: 1 📝 Total Orders: 101 | 🚀 🟢 Running - Auto Buy: 🟢 On --- 📜 Show All Orders: 🔴 Off | 📵 DELETE_BUYS: 🟢 On
        </div>
        <div>
          📊 Total Orders Value: $253.37 | Avg Order Value: $2.51 | 🕒 Last Trade: 30 minutes ago
        </div>
        <div>
          ⚙️ Settings: 📈 Buy Gain: %1.0777 | 📉 Sell Gain: %1.0533 --- 🛑 Stop Gain: 3.3% --- 🧩 Main Spread (Buys): %0.6900 ± 9.3300% | 📊 Main Sell Spread: %0.6900 ± 0.6900%
        </div>
        <div>
          🍌 Bananas: 🎲 Random %1.6 | 💸 Buy: $5.27 | 🎟️ Sell: $5.27
        </div>
        <div>
          📜 Sell: 💲110922.64 🛡️0.00000947 💰$1.05  +$22510.39 (+25.46%) 🕒 12 hours ago 🔋
        </div>
        <div>
          💸 Buy:  💲75464.10 🛡️0.00001325 💰$1.00  -$12945.39 (-14.64%) 🕒 4 days ago
        </div>
      </div>
    </v-card>


    <v-card class="_w-full" density="compact">
      <div>
        <div>
          🏦 Ask/Bid: 📜 $88,412.25 - 💸 $88,409.49
          <br>
          📉 Ask: 📜 $88,412.25 - 🛡️ 0.0000 💰 $0.68
          <br>
          📈 Bid: 💸 $88,409.49 - 🛡️ 0.0000 💰 $3.39
          <br>
          🧮 Spread: 💲 $2.76 - %0.0031
        </div>
      </div>
    </v-card>




    <v-card class="_w-full" density="compact">
      <div>
        📈 Profit/Loss --- 🪙 Crypto Summary ---
        <br/>
        Gross: $429.43 | Net: $348.44 | %Gross: 2.76% | %Net: 2.23%    ---     Bought: 0.224326 | Sold: 0.230504 | Position: -0.006178 | Avg Buy: $69,394.61 | Avg Sell: $69,397.64
        <br/>
        📊 Profit/Loss Summary: todo - double check!!
        <br/>
        💸 Total Buy Value:  $15,567.02 | Total Buy Fees: $40.10  | Total Buy Cost: $15,607.12
        <br/>
        📜 Total Sell Value: $15,996.44 | Total Sell Fees: $40.89 | Total Sell Proceeds: $15,955.56
        <br/>
        📈 Profit/Loss:
        <br/>
        📉 Gross Profit/Loss: $429.43 | Net Profit/Loss: $348.44
        <br/>
        📉 Gross Profit/Loss %: 2.76% | Net Profit/Loss %: 2.23%
        <br/>
        🪙 Crypto Summary:
        <br/>
        📥 Total Crypto Bought: 0.224326 | 📤 Total Crypto Sold: 0.230504 | 📊 Net Crypto Position (traded): -0.006178 | 📈 Status: DOWN
        <br/>
        🔄 Average Buy Price: $69,394.61 | Average Sell Price: $69,397.64 | Avg Fee per Trade: $0.02
        <br/>
        🔄 Average Sell Price: $69,397.64
        <br/>
        --- Diff:                $3.03 (0.00%)
        🔄 Average Buy Price:  $69,394.61
        <br/>

        📉 Holdings Summary:
        <br/>
        💰 Current Holdings Value (Trade-Based): -$546.21
        <br/>
        📈 Unrealized P/L: -$117.48
        <br/>
        💸 Realized P/L: $465.93 | Holdings/Buy Ratio: -2.75%
        <br/>

        🌕 BTC Wallet 🛡️0.00149848 💰 $132.48 🪙  🔒 🛡️0.00014762 💰 $13.05
        <br/>
        ⚖️ Balance: Buys(72) - %71.29 / %28.71 - (29)Sells - Total: 101
        <br/>
        💲 $130.87 ♻️ %49.69 🚧 %50.31 ♻️ $132.48 🛡️
        <br/>
        💰 Total: $263.35

      </div>
    </v-card>


    <v-card class="_w-full" density="compact">
      <v-card-text class="">
        <div>
          ⏱️ (Minutes): 1min: 📈 +0.01% ($263.24) | 30min: 📉 -0.06% ($263.42)
          <br />
          ⏳ (Hours):   1h:   📉 -0.00% ($263.27) | 5h:   📈 +0.23% ($262.66) | 15h:   📈 +0.32% ($262.41) | 24h:   📈 +1.22% ($260.08)
          <br />
          📅 (Days):    1day: 📈 +1.22% ($260.08) | 5day: 📈 +2.97% ($255.68) | 10day: 📈 +2.97% ($255.68) | 30day: 📉 -83.28% ($1,574.56)
        </div>
      </v-card-text>
    </v-card>

  </div>
</template>
<script setup lang="ts">
import {toCurrency} from "@/stats/Utils";
import {AccountState} from "@/stats/AccountState";
import "@/assets/styles.css";

const {accountOrderList, accountInfo, allJsonData} = AccountState();

console.log(accountOrderList.value);
console.log(accountInfo.value);
console.log(allJsonData.value);

//
// const btcPrice = computed(() => {
//   let BTCBook = allJsonData.value.pricebooks.find(
//     (item) => item.product_id === "BTC-USD",
//   );
//   let asks = parseFloat(BTCBook?.asks[0].price);
//   let bids = parseFloat(BTCBook?.bids[0].price);
//
//   return (asks + bids) / 2;
// });
//
//
// // const btcAvailable = computed(()=>{
// //     parseFloat(accountInfo.value.hold.value);
// // })
//
// // const btcHold = parseFloat(accountInfo.value.hold.value);
// // const btcTotal = btcAvailable + btcHold;
// // const btcAvailableUsdValue = parseFloat((btcAvailable * btcPrice.value).toFixed(2));
// // const btcHoldUsdValue = parseFloat((btcHold*btcPrice.value).toFixed(2));
//
// const sellOrder = computed(() => {
//   return accountOrderList.value.filter((item) => item.side === "SELL");
// });
//
// const TotalBitcoin = computed(() => {
//   let a = accountInfo.value.available_balance.value;
//   let b = accountInfo.value.hold.value;
//   return (parseFloat(a) + parseFloat(b)).toFixed(8);
// });
//
// const getBTCTotalToUSD = computed(() => {
//   console.log(accountInfo.value);
//   let av = parseFloat(accountInfo.value.available_balance.value);
//   let hold = parseFloat(accountInfo.value.hold.value);
//   return ((av + hold) * btcPrice.value).toFixed(2);
// });
//
//
// const getBTCAvailableToUSD = computed(() => {
//   let av = parseFloat(accountInfo.value.available_balance.value);
//   return ( av * btcPrice.value).toFixed(2);
// });
//
// const getBTCHoldToUSD = computed(() => {
//     let hold = parseFloat(accountInfo.value.hold.value);
//   return ( hold * btcPrice.value).toFixed(2);
// });
//
// const buyOrder = computed(() => {
//   return accountOrderList.value.filter((item) => item.side === "BUY");
// });

// const valueBuyOrder = computed(() => {
//   return buyOrder.value.reduce((acc, item) => {
//     return (
//       acc +
//       item.order_configuration.limit_limit_gtc.limit_price *
//         item.order_configuration.limit_limit_gtc.base_size
//     );
//   }, 0);
// });

// const valueSellOrder = computed(() => {
//   return sellOrder.value.reduce((acc, item) => {
//     return (
//       acc +
//       item.order_configuration.limit_limit_gtc.limit_price *
//         item.order_configuration.limit_limit_gtc.base_size
//     );
//   }, 0);
// });

</script>
