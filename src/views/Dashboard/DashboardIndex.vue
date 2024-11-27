<template>

  <PieChart
      :totalValue="totalAccountUSDValue"
      :bitcoinValue="totalBtcValue"
      :cashValue="totalCashValue"
      :usdcValue="totalUsdcValue"
      :chartData="[totalBtcValueNumeric, totalCashValueNumeric, totalUsdcValueNumeric]"
  />


  <v-container class="mb-2" style="padding: 1px" fluid>
    <v-row>
      <!-- Bitcoin Account Card -->
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
            <!-- Total BTC -->
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
              <v-tooltip text="BTC Value">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" style="padding: 0">
                    <v-chip>
                      {{ totalBtcValue }}
                    </v-chip>
                  </v-btn>
                </template>
              </v-tooltip>
            </div>
            <!-- Available BTC -->
            <div class="d-flex justify-space-between mb-0">
              <div>
                <!-- Tooltip for Available BTC -->
                <v-tooltip text="Available BTC">
                  <template v-slot:activator="{ props }">
                    <span v-bind="props" class="_text-green-300">₿ {{ btcAvailable }}</span>
                  </template>
                </v-tooltip>
                <!-- Tooltip for Value of Available BTC -->
                <v-tooltip text="Value of Available BTC">
                  <template v-slot:activator="{ props }">
                    <div v-bind="props" class="_text-green-300">💲 Value: {{ btcAvailableValue }}</div>
                  </template>
                </v-tooltip>
              </div>
              <div>
                <!-- Tooltip for BTC on Hold -->
                <v-tooltip text="BTC on Hold">
                  <template v-slot:activator="{ props }">
                    <span v-bind="props" class="_text-red-200">🛑 Hold: {{ btcHold }}</span>
                  </template>
                </v-tooltip>
                <!-- Tooltip for Value of BTC on Hold -->
                <v-tooltip text="Value of BTC on Hold">
                  <template v-slot:activator="{ props }">
                    <div v-bind="props" class="_text-red-200">💲 Value: {{ btcHoldValue }}</div>
                  </template>
                </v-tooltip>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Cash Account Card -->
      <v-col cols="12" md="4" class="mb-0">
        <v-card style="border: 1px solid #7a7a7a; padding: 1rem;">
          <v-card-title class="d-flex align-items-center justify-space-between">
            <div class="d-flex align-items-center">
              <span class="_text-3xl mr-2">💵 Cash</span>
            </div>
            <span class="_text-2xl _text-blue-400">Total: {{ totalCashValue }}</span>
          </v-card-title>
          <v-card-text>
            <!-- Available Cash and Cash on Hold with Tooltips -->
            <div class="d-flex justify-space-between mb-0">
              <div>
                <!-- Tooltip for Available Cash -->
                <v-tooltip text="Available Cash">
                  <template v-slot:activator="{ props }">
                    <span v-bind="props" class="_text-green-300">🟢 Available: {{ cashAvailableValue }}</span>
                  </template>
                </v-tooltip>
              </div>
              <div>
                <!-- Tooltip for Cash on Hold -->
                <v-tooltip text="Cash on Hold">
                  <template v-slot:activator="{ props }">
                    <span v-bind="props" class="_text-red-200">🛑 Hold: {{ cashHoldValue }}</span>
                  </template>
                </v-tooltip>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- USDC Account Card -->
      <v-col cols="12" md="4" class="mb-0">
        <v-card style="border: 1px solid #7a7a7a; padding: 1rem;">
          <v-card-title class="d-flex align-items-center justify-space-between">
            <div class="d-flex align-items-center">
              <img src="/public/usd-coin-usdc-logo.svg" class="_w-8 _h-8 mr-2 d-inline-block" alt="USDC">
              <span class="_text-3xl">USDC</span>
            </div>
            <span class="_text-2xl _text-blue-400">Total: {{ totalUsdcValue }}</span>
          </v-card-title>
          <v-card-text>
            <!-- Available USDC and USDC on Hold with Tooltips -->
            <div class="d-flex justify-space-between mb-0">
              <div>
                <!-- Tooltip for Available USDC -->
                <v-tooltip text="Available USDC">
                  <template v-slot:activator="{ props }">
                    <span v-bind="props" class="_text-green-300">🟢 Available: {{ usdcAvailableValue }}</span>
                  </template>
                </v-tooltip>
              </div>
              <div>
                <!-- Tooltip for USDC on Hold -->
                <v-tooltip text="USDC on Hold">
                  <template v-slot:activator="{ props }">
                    <span v-bind="props" class="_text-red-200">🛑 Hold: {{ usdcHoldValue }}</span>
                  </template>
                </v-tooltip>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>


  <div>
    <ProductInfoCard />
  </div>

  <!-- Account Summary Cards - todo - buttons -->
  <div class="text-center d-none">
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
  <!--  todo - finish down from here - icon bar-->
  <div class="d-none">
    <div class="d-flex justify-space-around">
      <v-icon icon="fa:fas fa-lock"></v-icon>
      <v-icon icon="fa:fas fa-search"></v-icon>
      <v-icon icon="fa:fas fa-list"></v-icon>
      <v-icon icon="fa:fas fa-edit"></v-icon>
      <v-icon icon="fa:fas fa-tachometer-alt"></v-icon>
      <v-icon icon="fa:fas fa-circle-notch fa-spin"></v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toCurrency} from "@/stats/Utils";
import {computed} from "vue";
import {AccountState} from "@/stats/AccountState";
import PieChart from "@/components/common/PieChart.vue";
import ProductInfoCard from "@/components/dashboard/ProductInfoCard.vue";

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

// Total account value: BTC + Cash + USDC
const totalAccountUSDValue = computed(() => {
  const btcValue = totalBtc.value * btcPrice.value;
  return btcValue + totalCash.value + totalUsdc.value;
});

// Bitcoin Account
const totalBtc = computed(() => {
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
const totalBtcValueNumeric = computed(() => {
  return Number((totalBtc.value * btcPrice.value).toFixed(2));
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
const totalCashValueNumeric = computed(() => {
  return totalCash.value;
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
const totalUsdcValueNumeric = computed(() => {
  return totalUsdc.value;
});



// todo  --------






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


// import PieChart from './components/PieChart.vue';
//
// export default {
//   components: {
//     PieChart,
//   },
// };


</script>

<style scoped>
</style>