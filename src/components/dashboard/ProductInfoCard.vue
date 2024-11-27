<template>
  <v-container class="mb-2" style="padding: 1px" fluid>
    <v-row>
      <!-- Product Information Card -->
      <v-col cols="12" class="py-1 mb-0">
        <v-card style="border: 1px solid #7a7a7a; padding: 1rem;">
          <v-card-title>
            <span class="_text-3xl">📊 Product Information: BTC-USD</span>
          </v-card-title>
          <v-card-text v-if="product">
            <v-row>
              <!-- Basic Information -->
              <v-col cols="12">
                <div class="d-flex justify-space-between">
                  <span>💵 Price: {{ toCurrency(Number(product.price)) }}</span>
                  <span>📈 24h % Change: {{ Number(product.price_percentage_change_24h).toFixed(2) }}%</span>
                  <span>📊 24h Volume: {{ product.volume_24h }}</span>
                  <span>💰 24h Volume (USD): {{ toCurrency(dayVolumeUsdValue) }}</span>
                </div>
              </v-col>

              <!-- Additional Information -->
              <v-col cols="12">
                <div class="d-flex justify-space-between">
                  <span>📊 Volume % Change (24h): {{ Number(product.volume_percentage_change_24h).toFixed(2) }}%</span>
                  <span>🔄 Status: {{ product.status }}</span>
                  <span>🪙 Base Currency: {{ product.base_name }}</span>
                  <span>💱 Quote Currency: {{ product.quote_name }}</span>
                </div>
              </v-col>

              <v-col cols="12">
                <div class="d-flex justify-space-between">
                  <span>📉 Base Increment: {{ product.base_increment }}</span>
                  <span>📊 Quote Increment: {{ product.quote_increment }}</span>
                  <span>🔄 Product Type: {{ product.product_type }}</span>
                  <span>📍 Venue: {{ product.product_venue }}</span>
                </div>
              </v-col>

              <v-col cols="12">
                <div class="d-flex justify-space-between">
                  <span>🔍 Minimum Trade Size (Base): {{ product.base_min_size }}</span>
                  <span>🔍 Maximum Trade Size (Base): {{ product.base_max_size }}</span>
                  <span>🔍 Minimum Trade Size (Quote): {{ product.quote_min_size }}</span>
                  <span>🔍 Maximum Trade Size (Quote): {{ product.quote_max_size }}</span>
                </div>
              </v-col>

              <v-col cols="12">
                <div class="d-flex justify-space-between">
                  <span>🪙 Aliases: {{ product.alias_to.join(', ') }}</span>
                  <span>💰 Approximate 24h Quote Volume: {{ toCurrency(Number(product.approximate_quote_24h_volume)) }}</span>
                </div>
              </v-col>

              <!-- Trading Statuses -->
              <v-col cols="12">
                <div class="d-flex justify-space-between">
                  <span>🛑 Cancel Only: {{ product.cancel_only ? 'Yes' : 'No' }}</span>
                  <span>📉 Limit Only: {{ product.limit_only ? 'Yes' : 'No' }}</span>
                  <span>📈 Post Only: {{ product.post_only ? 'Yes' : 'No' }}</span>
                  <span>⚠️ Trading Disabled: {{ product.trading_disabled ? 'Yes' : 'No' }}</span>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text v-else>
            Loading product data...
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import axios from 'axios';
import {computed, onMounted, ref} from 'vue';

interface ProductData {
  product_id: string;
  price: string;
  price_percentage_change_24h: string;
  volume_24h: string;
  volume_percentage_change_24h: string;
  base_increment: string;
  quote_increment: string;
  quote_min_size: string;
  quote_max_size: string;
  base_min_size: string;
  base_max_size: string;
  base_name: string;
  quote_name: string;
  status: string;
  product_type: string;
  alias_to: string[];
  product_venue: string;
  approximate_quote_24h_volume: string;
  cancel_only: boolean;
  limit_only: boolean;
  post_only: boolean;
  trading_disabled: boolean;
}

const product = ref<ProductData | null>(null);

const dayVolumeUsdValue = computed(() => {
  return product.value ? Number(product.value.volume_24h) * Number(product.value.price) : 0;
});
const tradingStatus = computed(() => {
  if (product.value) {
    return {
      cancelOnly: product.value.cancel_only ? 'Yes' : 'No',
      limitOnly: product.value.limit_only ? 'Yes' : 'No',
      postOnly: product.value.post_only ? 'Yes' : 'No',
      tradingDisabled: product.value.trading_disabled ? 'Yes' : 'No',
    };
  }
  return { cancelOnly: 'No', limitOnly: 'No', postOnly: 'No', tradingDisabled: 'No' };
});

// Utility function to format numbers as currency
import {toCurrency} from "@/stats/Utils";

// Reactive product state to hold the data from the API
// const product = ref(null);

// Function to fetch product data from API
const fetchProductData = async () => {
  try {
    const response = await axios.get('https://flipvo.com/api/getPublicProduct', {
      // const response = await axios.get('/api/getPublicProduct', {
      params: {
        product_id: 'BTC-USD' // Optionally, you can pass this as a parameter if needed.
      }
    });

    if (response.data.state === 'success') {
      product.value = response.data.data;
    } else {
      console.error('API Error:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
};

// Call the fetchProductData function when the component is mounted
onMounted(() => {
  fetchProductData();
});
</script>

<style scoped>
/* Optional: Custom styles if needed */
</style>
