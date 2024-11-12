<template>
  <div class="user-settings-layout flex flex-wrap gap-4">
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

    <!-- Save Button -->
    <div class="w-full flex justify-end mt-4">
      <v-btn color="primary" class="text-white">Save Changes
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
