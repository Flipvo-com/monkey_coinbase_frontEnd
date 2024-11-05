<style scoped lang="scss">
ion-content {
  //@apply _bg-green-900
  ion-row.banners {
    .swiper .swiper-pagination .swiper-pagination-bullet {
      background: #fff;
    }
    .swiper {
      height: 15rem !important;
      padding: 0 1rem;
      margin-top: 2rem;

      .swiperSlide {
        @apply
        _font-bold
        _rounded-[2rem] ;
        .depositBtn, .withdrawBtn {
          --border-radius: 3rem;
        }

        .withdrawBtn {

        }
      }

      .swiperSlide::after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        right: 1px;
        bottom: 1px;
        background: #0f2b2c;
        z-index: -10;
        @apply _rounded-[2rem] ;

      }

    }
  }
}


.pageHeader {
  @apply _bg-gradient-to-r _from-gray-900 _to-green-900
  _shadow-none ;

  ion-toolbar {
    --padding-start: 16px;
    --padding-end: 16px;
    --border-width: 0px;

    ion-title {
      max-width: 40vh;

      ion-label {
        ion-text {
          font-size: 1rem;
        }

        p {
          ion-text {
            font-size: 1.3rem !important;
          }
        }
      }
    }

    ion-avatar {
      height: 2.5rem;
      width: 2.5rem;
      border: 1px solid var(--ion-color-tertiary);

      img {
        max-width: 100%;
      }
    }
  }

}
</style>

<template>
  <ion-page>
    <ion-header :translucent="true" class="pageHeader">
      <ion-toolbar>
        <ion-title mode="md" class="ion-no-padding">
          <ion-label>
            <ion-text>Welcome</ion-text>
            <p>
              <ion-text>
                <strong>Monkey User</strong>
              </ion-text>
            </p>
          </ion-label>
        </ion-title>
        <ion-avatar slot="end">
          <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg"/>
        </ion-avatar>
      </ion-toolbar>
    </ion-header>
    <ion-content color="primary">

      <ion-row class="banners ">
        <swiper
            class=" "
            :modules="[EffectCards]"
            effect="cards"

            :grabCursor="true"
            :pagination="{ clickable: true }"
            loop
            @swiper="resetSlider"
        >

          <swiper-slide
                        class="swiperSlide _bg-gradient-to-bl _from-orange-600 _to-yellow-400">

            <div class="_text-center">
              <div class="_text-gray-400 _text-lg">
                <p>Balance</p>
              </div>

              <ion-text>
                <h1 class="">
                  &#8383 {{ accountInfo.available_balance.value }}
                </h1>
              </ion-text>


              <ion-grid class="_pt-10 _px-10">
                <ion-row>
                  <ion-col>
                    <ion-button class="depositBtn">
                      Deposit
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button class="withdrawBtn">
                      Withdraw
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </div>
          </swiper-slide>
          <swiper-slide
                        class="swiperSlide _bg-gradient-to-tl _from-green-600 _to-cyan-400">

            <div class="_text-center">
              <div class="_text-gray-400 _text-lg">
                <p>Balance</p>
              </div>

              <ion-text>
                <h1 class="">
                  {{ toCurrency(45000) }}
                </h1>
              </ion-text>
              <ion-grid class="_pt-10 _px-10">
                <ion-row>
                  <ion-col>
                    <ion-button class="depositBtn">
                      Deposit
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button class="withdrawBtn">
                      Withdraw
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </div>
          </swiper-slide>

        </swiper>
      </ion-row>

      <div class="example-content">

        <template v-for="i in 5">
          <ion-list :inset="true">

            <ion-item :button="true" class="!_bg-red-400">
              <div class="_w-12 _h-12 _bg-amber-300 _rounded-full _m-2
              _flex _items-center _justify-center">
                <ion-icon class="_fill-amber-700"
                          slot="start"
                          size="large"
                          :icon="logoBitcoin"
                ></ion-icon>
              </div>
              <ion-label>General</ion-label>
              <ion-note slot="end">{{ i }}</ion-note>
            </ion-item>

          </ion-list>
          <ion-note class="_m-4">
            Default Note
          </ion-note>

        </template>

      </div>

    </ion-content>
  </ion-page>

</template>
<script setup lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonList,
  IonItem,
  IonListHeader,
  IonLabel,
  IonNote,
  IonText,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol

} from '@ionic/vue';

import {
  listCircle,
  logoBitcoin
} from 'ionicons/icons';

import {toCurrency} from "@/stats/Utils";
import {computed, onMounted, ref} from "vue";
import {AccountState, type AccountOrderModel} from "@/stats/AccountState";
import router from "@/router";

// import Swiper core and required modules
import {EffectCards, Pagination} from 'swiper/modules';

// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {SwiperRef} from "swiper/swiper-react";
import {SwiperEvents} from "swiper/types";
// import 'swiper/css/scrollbar';
// import 'swiper/css/effect-cards';


const refSwiper = ref<SwiperRef | null>(null);
const resetSlider = (el: SwiperRef) => {
  refSwiper.value = el;
  if (refSwiper.value) {
    // el.slideReset();
    refSwiper.value.slideTo(1, 300);
    // refSwiper.value.slideTo(0, 300)
  }

};

onMounted(() => {
  // resetSlider();
  setTimeout(() => {
    if (refSwiper.value) {
      refSwiper.value.slideTo(0, 300)
      refSwiper.value.update();
    }
  }, 200);
});

const {accountOrderList, accountInfo} = AccountState();
const sellOrder = computed(() => {
  return accountOrderList.value.filter((item) => item.side === "SELL");
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