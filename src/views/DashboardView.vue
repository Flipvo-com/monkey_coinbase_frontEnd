<style lang="scss" scoped>
ion-tabs {
  //background: var(--ion-color-secondary);
  ion-tab-bar {
    position: relative;
    //width: 90%;
    //transform: translate(-50%, -50%);
    //left: 50%;
    //border-radius: px;
    padding-bottom: 0;
    border: 0px solid rgba(243, 227, 227, 0.08);
    overflow: hidden;
    box-shadow: 0px -5px 10px rgba(95, 234, 225, 0.08);
    height: 80px;
    //--background: var(--ion-color-light);
    ion-tab-button {
      --background: var(--ion-color-white);
      --color: #BEC2C6;

      ion-icon {
        font-size: 1.9rem;
      }
    }
  }
}
</style>
<template>
  <ion-page>
    <ion-tabs v-if="pageAvailable">
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home"
                        :href="getFromRoute({name: 'dashboardIndex'})">
          <ion-icon :icon="playCircle"/>
          <ion-label>Listen now</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="radio"
                        :href="getFromRoute({name: 'analyse'})">
          <ion-icon :icon="radio"/>
          <ion-label>Radio</ion-label>
        </ion-tab-button>
      </ion-tab-bar>

    </ion-tabs>
    <!--    <top-bar />-->
    <!--    <DashboardRouteView />-->
    <!--    <BottomBar />-->
    <!--        <LoadingProgress v-else />-->
  </ion-page>
</template>
<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar, IonTabButton,
  IonLabel,
  IonIcon
} from '@ionic/vue';
import {playCircle, radio, library, search} from 'ionicons/icons';

import {type Ref, ref, type UnwrapRef} from "vue";
import type {RouteRecordRaw} from "vue-router";
import {AccountState} from "@/stats/AccountState";
import router from "@/router";
import {
  executeGlobalLongPolling,
  onResultSuccessGlobalLongPolling,
} from "@/api/useLongPolling";
import BottomBar from "@/components/common/BottomBar.vue";
import TopBar from "@/components/common/TopBar.vue";
import LoadingProgress from "@/components/common/LoadingProgress.vue";
import DashboardRouteView from "@/components/dashboard/dashboardRouteView.vue";
import {getFromRoute} from "@/stats/Utils";

const {accountOrderList, renderAccountOrderList, renderAccountInfo} =
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
onResultSuccessGlobalLongPolling((res: any) => {
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
