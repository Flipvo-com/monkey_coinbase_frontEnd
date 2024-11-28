<template>
  <div>
    <!-- Investments Management Section -->
    <div class="investment-section">
      <h1 class="text-xl font-semibold mb-4">Manage Investments</h1>
      <InvestmentForm
          :users="users"
          :investments="investments"
          @save="handleSave"
          @edit="handleEdit"
      />
    </div>

    <!-- User Settings Section -->
    <div class="user-settings-layout flex flex-wrap gap-4 mt-8 d-none">
      <!-- Profile Details Card -->
      <v-card class="w-full md:w-1/2 lg:w-1/3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md">
        <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
          <v-icon class="mr-2">mdi-account</v-icon>
          Profile Details
        </v-card-title>
        <v-card-text>
          <div class="mb-4">
            <label class="block text-sm font-medium">Username</label>
            <v-text-field placeholder="Your Username" class="w-full mt-2" outlined></v-text-field>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium">Email</label>
            <v-text-field placeholder="Your Email" type="email" class="w-full mt-2" outlined></v-text-field>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium">Phone Number</label>
            <v-text-field placeholder="Your Phone Number" type="tel" class="w-full mt-2" outlined></v-text-field>
          </div>
        </v-card-text>
      </v-card>

      <!-- Security Settings Card -->
      <v-card class="w-full md:w-1/2 lg:w-1/3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md">
        <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
          <v-icon class="mr-2">mdi-shield-lock</v-icon>
          Security Settings
        </v-card-title>
        <v-card-text>
          <div class="mb-4">
            <label class="block text-sm font-medium">Change Password</label>
            <v-text-field placeholder="New Password" type="password" class="w-full mt-2" outlined></v-text-field>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium">Two-Factor Authentication</label>
            <v-switch label="Enable 2FA" class="mt-2" inset></v-switch>
          </div>
        </v-card-text>
      </v-card>

      <!-- Notification Preferences Card -->
      <v-card class="w-full lg:w-1/3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md">
        <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
          <v-icon class="mr-2">mdi-bell</v-icon>
          Notification Preferences
        </v-card-title>
        <v-card-text>
          <div class="mb-4">
            <v-checkbox label="Email Notifications" class="mt-2"></v-checkbox>
          </div>
          <div class="mb-4">
            <v-checkbox label="SMS Notifications" class="mt-2"></v-checkbox>
          </div>
          <div class="mb-4">
            <v-checkbox label="Push Notifications" class="mt-2"></v-checkbox>
          </div>
        </v-card-text>
      </v-card>

      <!-- Coming Soon Message -->
      <div v-if="showMessage" class="w-full text-center mt-4 text-lg font-semibold text-blue-500">
        Coming Soon
      </div>

      <!-- Save Button -->
      <div class="w-full flex justify-end mt-4">
        <v-btn color="primary" class="text-white" @click="showComingSoon">Save Changes</v-btn>
      </div>
    </div>

    <!-- Log Out Button -->
    <LogOutButton />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InvestmentForm from '@/components/dashboard/InvestmentForm.vue'
import LogOutButton from "@/components/common/LogOutButton.vue";

/** Mock data for users and investments */
const users = ref([
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
])

const investments = ref([
  { id: 1, user_name: 'John Doe', percentage: '50.0000' },
  { id: 2, user_name: 'Jane Smith', percentage: '50.0000' },
])

/** Handle save event */
const handleSave = (investment: { id?: number; user_id: number; percentage: string }) => {
  const existingIndex = investments.value.findIndex((i) => i.id === investment.id)
  if (existingIndex !== -1) {
    // Update existing investment
    investments.value[existingIndex] = {
      ...investments.value[existingIndex],
      percentage: investment.percentage,
    }
  } else {
    // Add new investment
    investments.value.push({
      id: investments.value.length + 1,
      user_name: users.value.find((user) => user.id === investment.user_id)?.name || '',
      percentage: investment.percentage,
    })
  }
}

/** Handle edit event */
const handleEdit = (investment: { id: number; user_name: string; percentage: string }) => {
  console.log('Edit Investment:', investment)
}

// Reactive state to control message visibility
const showMessage = ref(false)

// Function to show the "Coming Soon" message for 5 seconds
const showComingSoon = () => {
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
  }, 5000)
}
</script>
