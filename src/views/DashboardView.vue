<template>
  <v-app v-if="pageAvailable">
    <top-bar/>
    <DashboardRouteView/>
    <BottomBar/>
  </v-app>
  <LoadingProgress v-else/>
</template>

<script setup lang="ts">

import router from "@/router";
import type {RouteRecordRaw} from "vue-router";
import {type Ref, ref, type UnwrapRef} from "vue";
import {AccountState} from "@/stats/AccountState";
import {executeGlobalLongPolling, onResultSuccessGlobalLongPolling,} from "@/api/useLongPolling";
import BottomBar from "@/components/common/BottomBar.vue";
import TopBar from "@/components/common/TopBar.vue";
import LoadingProgress from "@/components/common/LoadingProgress.vue";
import DashboardRouteView from "@/components/dashboard/dashboardRouteView.vue";

const {
  accountOrderList,
  allJsonData,
  renderAccountOrderList,
  renderAccountInfo,
} = AccountState();

const dashboardRoute: RouteRecordRaw = router.options.routes.find(
    (route) => route.name === "dashboard",
) as RouteRecordRaw;

const dashboardChildren: Ref<UnwrapRef<RouteRecordRaw>[]> = ref(
    dashboardRoute?.children || [],
);

const pageAvailable = ref(false);

const renderAllJsonData = (res: any) => {
  allJsonData.value = res.allJson;
};

dashboardChildren.value =
    dashboardRoute?.children!.filter((i: RouteRecordRaw) => {
      if (i.meta) {
        return i.meta["sidebar"] !== false;
      } else {
        return false;
      }
    }) || [];

executeGlobalLongPolling({
  data: {
    accountCurrency: "BTC",
  },
});

onResultSuccessGlobalLongPolling((res: any) => {
  console.log('-----------------');
  console.log(res);
  console.log(res.data);

  accountOrderList.value = res.data;
  renderAllJsonData(res.data);
  renderAccountOrderList(res.data);
  renderAccountInfo(res.data);
  pageAvailable.value = true;
});


/**
 * Get total value of all accounts
 * @returns {{totalCash: number, totalAccountValue: *, totalCryptoAvailable: *, totalCryptoValue: *}}

 tim 50% - $500
 admin 50% - $500
 total = $1000
 --------------------------
 total = $1,132.23
 ----------------------------
 tim - 50% * $1,200 - $600 + $200 = $800
 admin - 50% * $1,200 - $600
 total - $1,400
 (800/1400) *100 = 57.14
 (600/1400) *100 = 42.85
 */
// const getTotalValue = () => {
//   if (this === undefined) {
//     return;
//   }
//
//   const tradeAccounts = this.getTradeAccounts();
//   const usdAccount = this.accounts.find(
//     (account) => account.currency === "USD",
//   );
//   const usdcAccount = this.accounts.find(
//     (account) => account.currency === "USDC",
//   );
//   const { available_balance: usdAvailableBalance, hold: usdHoldBalance } =
//     usdAccount;
//   const { available_balance: usdcAvailableBalance, hold: usdcHoldBalance } =
//     usdcAccount;
//   const usdAvailable = parseFloat(usdAvailableBalance.value);
//   const usdcAvailable = parseFloat(usdcAvailableBalance.value);
//   const usdHold = parseFloat(usdHoldBalance.value);
//   const usdcHold = parseFloat(usdcHoldBalance.value);
//   const totalCash = usdAvailable + usdcAvailable + usdHold + usdcHold;
//
//   const totalCryptoValue = tradeAccounts.reduce((acc, account) => {
//     const { ask, bid } = this.getBestBidAskPrice(account);
//     const mid = (ask + bid) / 2;
//     const { available_balance, hold } = account;
//     const holdValue = parseFloat(hold.value);
//     const availableCrypto = parseFloat(available_balance.value);
//     const totalAccountCrypto = availableCrypto + holdValue;
//     return acc + totalAccountCrypto * mid;
//   }, 0);
//
//   // Get available crypto value
//   const totalCryptoAvailable = tradeAccounts.reduce((acc, account) => {
//     const { ask, bid } = this.getBestBidAskPrice(account);
//     const mid = (ask + bid) / 2;
//     const { available_balance } = account;
//     const availableCrypto = parseFloat(available_balance.value);
//     return acc + availableCrypto * mid;
//   }, 0);
//
//   const totalAccountValue = totalCash + totalCryptoValue;
//
//   return {
//     totalCash,
//     totalCryptoValue,
//     totalCryptoAvailable,
//     totalAccountValue,
//   };
// };


</script>

