<!--<template>-->
<!--  <v-app>-->
<!--    <v-app-bar>-->
<!--      <v-toolbar-title>Home</v-toolbar-title>-->
<!--      <v-spacer></v-spacer>-->
<!--      <v-btn  :to="{name:'login'}">Login</v-btn>-->
<!--      <v-btn  :to="{name:'register'}">Register</v-btn>-->
<!--    </v-app-bar>-->
<!--     <v-main>-->
<!--        <RouterView/>-->
<!--     </v-main>-->
<!--  </v-app>-->

<!--</template>-->
<!--<script setup lang="ts">-->
<!--const navigateToExchange = () => {-->


<!--}-->
<!--</script>-->


<template>
  <v-app>
    <v-app-bar app color="#1a237e" dark elevate-on-scroll>
      <v-toolbar-title class="_text-xl _font-bold">CryptoTrade</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>Home</v-btn>
      <v-btn>About</v-btn>
      <v-btn :to="{name:'login'}">login</v-btn>
      <v-btn :to="{name:'register'}">register</v-btn>
    </v-app-bar>

    <v-main>
      <!-- Hero Section with Bitcoin Trading SVG -->
      <v-container fluid class="_bg-blue-900 _py-16">
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" class="_text-center _text-white">
            <h1 class="_text-5xl _font-bold _mb-6">Trade Bitcoin with Confidence</h1>
            <p class="_text-xl _mb-8">Secure, fast, and intuitive platform for all your cryptocurrency
              needs</p>
            <v-btn x-large color="success" class="_px-8 _py-4 _text-lg _font-semibold">Start Trading Now
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-img>
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="#1a237e"/>
                <circle cx="200" cy="150" r="80" fill="#ffc107"/>
                <text x="200" y="170" font-size="100" text-anchor="middle" fill="#1a237e">₿</text>
                <polyline points="50,200 100,150 150,180 200,120 250,160 300,100 350,140"
                          stroke="#4caf50" stroke-width="4" fill="none"/>
                <text x="200" y="250" font-size="24" text-anchor="middle" fill="#ffffff">CryptoTrade
                </text>
              </svg>
            </v-img>
          </v-col>
        </v-row>
      </v-container>

      <!-- Live Market Data -->
      <v-container fluid class="_py-12 _bg-gray-100">
        <v-row justify="center" align="center">
          <v-col cols="12" md="3" v-for="coin in topCoins" :key="coin.name">
            <v-card class="_text-center _shadow-lg _hover:shadow-xl _transition-shadow _duration-300">
              <v-card-text>
                <div class="_flex _items-center _justify-center _mb-2">
                  <svg width="32" height="32" viewBox="0 0 32 32" class="_mr-2">
                    <circle cx="16" cy="16" r="16" :fill="coin.color"/>
                    <text x="16" y="22" font-size="16" text-anchor="middle" fill="white">
                      {{ coin.symbol }}
                    </text>
                  </svg>
                  <span class="_text-xl _font-bold">{{ coin.name }}</span>
                </div>
                <div class="_text-3xl _font-bold _mb-2">{{ coin.price }}</div>
                <div :class="coin.change >= 0 ? '_text-green-500' : '_text-red-500'">
                  {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Features Section -->
      <v-container class="_py-16">
        <h2 class="_text-4xl _font-bold _mb-12 _text-center">Why Choose CryptoTrade?</h2>
        <v-row>
          <v-col cols="12" md="4" v-for="feature in features" :key="feature.title">
            <v-card class="_h-full _shadow-lg _hover:shadow-xl _transition-shadow _duration-300">
              <v-img>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="200" fill="#f5f5f5"/>
                  <circle cx="100" cy="100" r="60" :fill="feature.color"/>
                  <text x="100" y="120" font-size="60" text-anchor="middle" fill="white">
                    {{ feature.icon }}
                  </text>
                </svg>
              </v-img>
              <v-card-title class="_text-center _text-2xl">{{ feature.title }}</v-card-title>
              <v-card-text class="_text-center _text-lg">{{ feature.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Trading Interface Preview -->
      <v-container fluid class="_bg-gray-900 _py-16">
        <v-row justify="center">
          <v-col cols="12" md="10">
            <h2 class="_text-4xl _font-bold _mb-8 _text-center _text-white">Powerful Trading Tools at Your
              Fingertips</h2>
            <v-img>
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="400" fill="#2c3e50"/>
                <rect x="20" y="20" width="760" height="360" rx="10" fill="#34495e"/>
                <rect x="40" y="40" width="300" height="200" rx="5" fill="#2c3e50"/>
                <polyline points="50,220 100,180 150,200 200,150 250,190 300,130"
                          stroke="#2ecc71" stroke-width="2" fill="none"/>
                <rect x="360" y="40" width="400" height="320" rx="5" fill="#2c3e50"/>
                <text x="560" y="200" font-size="24" text-anchor="middle" fill="#ecf0f1">Trading
                  Interface
                </text>
              </svg>
            </v-img>
          </v-col>
        </v-row>
      </v-container>

      <!-- CTA Section -->
      <v-container class="_py-16">
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" class="_text-center">
            <h2 class="_text-4xl _font-bold _mb-4">Ready to Start Your Crypto Journey?</h2>
            <p class="_text-xl _mb-8">Join millions of traders on CryptoTrade and take control of your
              financial future.</p>
            <v-btn x-large color="success" class="_px-8 _py-4 _text-lg _font-semibold">Create Your Free
              Account
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="#1a237e" dark>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <h3 class="_text-2xl _font-bold _mb-4">CryptoTrade</h3>
            <p>Your trusted partner in cryptocurrency trading</p>
          </v-col>
          <v-col cols="12" md="4">
            <h4 class="_text-xl _font-bold _mb-4">Quick Links</h4>
            <div class="_flex _flex-col _gap-4">
              <v-btn width="100">Home</v-btn>

              <v-btn width="100">Markets</v-btn>
              <v-btn width="100">Features</v-btn>
              <v-btn width="100">About</v-btn>
              <v-btn width="100">Contact</v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <h4 class="_text-xl _font-bold _mb-4">Connect With Us</h4>
            <div class="_flex _space-x-4">
              <v-btn icon>
                <v-icon>fa-brands fa-facebook</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>fa-brands fa-twitter</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>fa-brands fa-linkedin</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>fa-brands fa-instagram</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="_text-center" cols="12">
            {{ new Date().getFullYear() }} — <strong>CryptoTrade</strong> | All Rights Reserved
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">

import {useTheme} from "vuetify";
import {onUnmounted} from "vue";

const theme = useTheme();

theme.global.name.value = 'light';

const topCoins = [
  {name: 'Bitcoin', symbol: '₿', price: '$45,000', change: 2.5, color: '#f7931a'},
  {name: 'Ethereum', symbol: 'Ξ', price: '$3,200', change: -1.2, color: '#627eea'},
  {name: 'Litecoin', symbol: 'Ł', price: '$150', change: 0.8, color: '#345d9d'},
  {name: 'Ripple', symbol: 'X', price: '$0.75', change: -0.5, color: '#006097'}
];

const features = [
  {
    title: 'Secure',
    description: 'State-of-the-art security measures to protect your assets',
    icon: '🔒',
    color: '#4caf50'
  },
  {title: 'Fast', description: 'Lightning-fast trades and withdrawals', icon: '⚡', color: '#2196f3'},
  {
    title: 'User-Friendly',
    description: 'Intuitive interface for both beginners and experts',
    icon: '👤',
    color: '#ff9800'
  }
];

onUnmounted(() => {
  theme.global.name.value = 'dark'
});

</script>
