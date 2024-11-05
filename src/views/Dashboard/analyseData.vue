<style scoped>
ion-content {
  @apply _bg-green-800
}

</style>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Listen now</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content color="light">
      <ion-header>
        <ion-toolbar>
          <ion-title>qsdqsd</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Analyse
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list lines="none">
            <ion-item>
              <ion-label class="_text-green-500 _text-2xl">
                azeazea
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

      <ion-button router-link="/dashboard/Index">Go to Index</ion-button>
      <!--      <ion-list :inset="true">-->
      <!--        <ion-list-header>-->
      <!--          <ion-icon slot="start" :icon="search"></ion-icon>-->
      <!--          <ion-label>-->
      <!--            Available-->
      <!--          </ion-label>-->
      <!--        </ion-list-header>-->
      <!--        <ion-item button :detail="true"-->
      <!--                  :href="getFromRoute({name: 'dashboardIndex'})"-->
      <!--                  v-for="(item, i) in buyOrder" :key="i"-->
      <!--        >-->
      <!--          <ion-icon slot="start" :icon="search"></ion-icon>-->
      <!--          <ion-label>-->
      <!--            <b> {{ item.outstanding_hold_amount }}</b>-->
      <!--          </ion-label> -->
      <!--        </ion-item>-->
      <!--      </ion-list>-->
    </ion-content>
  </ion-page>
  <!--  <div class="_flex flex-wrap _gap-2">-->
  <!--    <v-card class="_flex-1">-->
  <!--      <v-card-title>-->
  <!--        <h1>Orders BTC</h1>-->
  <!--      </v-card-title>-->
  <!--      <v-card-text>-->
  <!--        <div class="_overflow-scroll">-->
  <!--          <v-list :lines="false" slim class="_h-[200px]" density="compact">-->
  <!--            <v-list-item-->
  <!--              v-for="(item, i) in buyOrder"-->
  <!--              :key="i"-->
  <!--              :value="item"-->
  <!--            >-->
  <!--              <template v-slot:prepend>-->
  <!--                <v-icon :icon="'fa-thin fa-spinner fa-spin'"></v-icon>-->
  <!--              </template>-->

  <!--              <v-list-item-title class="_text-green-400 !_text-sm ">-->
  <!--                {{ item.outstanding_hold_amount }}-->
  <!--              </v-list-item-title>-->
  <!--              <template v-slot:append v-if="item.fillCount > 1">-->
  <!--                  <b class="_mr-2">  {{item.fillCount}}</b>-->
  <!--                <v-icon :class="fillCountColor(item.fillCount)">fa-solid fa-recycle</v-icon>-->
  <!--              </template>-->
  <!--            </v-list-item>-->
  <!--          </v-list>-->
  <!--        </div>-->
  <!--        <v-divider color="red" class="_my-2" />-->
  <!--        <div class="_overflow-scroll">-->
  <!--          <v-list class="_h-[200px]" :lines="false" slim density="compact">-->
  <!--            <v-list-item-->
  <!--              v-for="(item, i) in sellOrder"-->
  <!--              :key="i"-->
  <!--              :value="item"-->
  <!--              color="primary"-->
  <!--            >-->
  <!--              <template v-slot:prepend>-->
  <!--                <v-icon :icon="'fa-thin fa-user'"></v-icon>-->
  <!--              </template>-->

  <!--              <v-list-item-title class="_text-red-500 !_text-sm">-->
  <!--                <VIcon size="15">fa-solid fa-bitcoin-sign</VIcon>-->
  <!--                {{ item.outstanding_hold_amount }}-->
  <!--              </v-list-item-title>-->
  <!--              <template v-slot:append v-if="item.fillCount > 1">-->
  <!--                  <b class="_mr-2">  {{item.fillCount}}</b>-->
  <!--                  <v-icon :class="fillCountColor(item.fillCount)">fa-solid fa-recycle</v-icon>-->
  <!--              </template>-->
  <!--            </v-list-item>-->
  <!--          </v-list>-->
  <!--        </div>-->
  <!--      </v-card-text>-->
  <!--    </v-card>-->
  <!--  </div>-->


  <!--  <div class="_flex _flex-wrap _gap-2 ">-->
  <!--    <v-card class="_flex-1">-->
  <!--      <v-card-text class=" ">-->
  <!--        <v-list lines="one">-->
  <!--          <v-list-item>-->
  <!--            <v-list-item-title>Available Balance</v-list-item-title>-->
  <!--            <v-list-item-subtitle class="_text-green-500 _text-3xl">-->
  <!--              {{ accountInfo.available_balance.value }}-->
  <!--            </v-list-item-subtitle>-->
  <!--          </v-list-item>-->
  <!--        </v-list>-->
  <!--      </v-card-text>-->
  <!--    </v-card>-->
  <!--    <v-card class="_flex-1">-->
  <!--      <v-card-text class=" ">-->
  <!--        <v-list lines="one">-->
  <!--          <v-list-item>-->
  <!--            <v-list-item-title>Hold</v-list-item-title>-->
  <!--            <v-list-item-subtitle class="_text-red-500 _text-3xl">-->
  <!--              {{ accountInfo.hold.value }}-->
  <!--            </v-list-item-subtitle>-->
  <!--          </v-list-item>-->
  <!--        </v-list>-->
  <!--      </v-card-text>-->
  <!--    </v-card>-->
  <!--    <v-card class="_w-full" density="compact">-->
  <!--      <v-card-text class="_overflow-scroll _max-h-[400px]">-->
  <!--        <v-list lines="one">-->
  <!--          <v-list-item>-->
  <!--            <v-list-item-title> Total</v-list-item-title>-->
  <!--            <v-list-item-subtitle class="_font-bold">-->
  <!--              {{ toCurrency(3000) }}-->
  <!--            </v-list-item-subtitle>-->
  <!--          </v-list-item>-->

  <!--          <v-list-item>-->
  <!--            <v-list-item-title>buy Orders</v-list-item-title>-->
  <!--            <v-list-item-subtitle class="_font-bold">-->
  <!--              {{ buyOrder.length }}-->
  <!--              ({{-->
  <!--                buyOrder.length + sellOrder.length > 0-->
  <!--                    ? (-->
  <!--                        (buyOrder.length / (buyOrder.length + sellOrder.length)) *-->
  <!--                        100-->
  <!--                    ).toFixed(2)-->
  <!--                    : 0-->
  <!--              }}%)-->
  <!--            </v-list-item-subtitle>-->
  <!--          </v-list-item>-->
  <!--          <v-list-item>-->
  <!--            <v-list-item-title>Value buy Orders</v-list-item-title>-->
  <!--            <v-list-item-subtitle class="_font-bold">-->
  <!--              {{ valueBuyOrder }}-->
  <!--            </v-list-item-subtitle>-->
  <!--          </v-list-item>-->

  <!--          <v-list-item>-->
  <!--            <v-list-item-title>sell Orders</v-list-item-title>-->
  <!--            <v-list-item-subtitle class="_font-bold">-->
  <!--              {{ sellOrder.length }}-->
  <!--              ({{-->
  <!--                sellOrder.length + buyOrder.length > 0-->
  <!--                    ? (-->
  <!--                        (sellOrder.length / (sellOrder.length + buyOrder.length)) *-->
  <!--                        100-->
  <!--                    ).toFixed(2)-->
  <!--                    : 0-->
  <!--              }}%)-->
  <!--            </v-list-item-subtitle>-->
  <!--          </v-list-item>-->

  <!--          <v-list-item>-->
  <!--            <v-list-item-title>Value sell Orders</v-list-item-title>-->
  <!--            <v-list-item-subtitle class="_font-bold">-->
  <!--              {{ valueSellOrder }}-->
  <!--            </v-list-item-subtitle>-->
  <!--          </v-list-item>-->
  <!--        </v-list>-->
  <!--      </v-card-text>-->
  <!--    </v-card>-->
  <!--  </div>-->
</template>
<script setup lang="ts">
import {AccountState} from "@/stats/AccountState";
import {computed} from "vue";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonButton, IonCardHeader, IonCardContent, IonCard, IonCardTitle,
} from "@ionic/vue";

import {
  playCircle,
  radio,
  library,
  search,
  heart
}
  from 'ionicons/icons';
import {getFromRoute} from "@/stats/Utils";
import router from "@/router";

const {accountOrderList} = AccountState();

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

const fillCountColor = (fillCount: number, color?: string) => {
  color = color || 'blue';
  if (fillCount > 9) {
    return `_text-${color}-500`;
  } else {
    return `_text-${color}-${fillCount}00`;
  }
};
</script>
