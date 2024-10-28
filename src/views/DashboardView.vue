<template>
  <v-app v-if="pageAvailable">
    <top-bar />
    <DashboardRouteView />
    <BottomBar />
  </v-app>
  <LoadingProgress v-else />
</template>
<script setup lang="ts">
import { type Ref, ref, type UnwrapRef } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { AccountState } from "@/stats/AccountState";
import router from "@/router";
import {
  executeGlobalLongPolling,
  onResultSuccessGlobalLongPolling,
} from "@/api/useLongPolling";
import BottomBar from "@/components/common/BottomBar.vue";
import TopBar from "@/components/common/TopBar.vue";
import LoadingProgress from "@/components/common/LoadingProgress.vue";
import DashboardRouteView from "@/components/dashboard/dashboardRouteView.vue";

const { accountOrderList, renderAccountOrderList, renderAccountInfo } =
  AccountState();

const dashboardRoute: RouteRecordRaw = router.options.routes.find(
  (route) => route.name === "dashboard",
) as RouteRecordRaw;
const dashboardChildren: Ref<UnwrapRef<RouteRecordRaw>[]> = ref(
  dashboardRoute?.children || [],
);

const pageAvailable = ref(false);

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
onResultSuccessGlobalLongPolling((res) => {
  accountOrderList.value = res.data;
  pageAvailable.value = true;
  renderAccountOrderList(res.data);
  renderAccountInfo(res.data);

  // executeGlobalLongPolling({
  //     data: {
  //         accountCurrency: "BTC",
  //     },
  // });
});
</script>
