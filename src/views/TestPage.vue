<template>
  <v-app>
    <v-container>
      <v-text-field
          label="Type something..."
          v-model="inputValue"
          outlined
          @focus="handleFocus"
          @blur="handleBlur"
      ></v-text-field>
    </v-container>
  </v-app>
</template>

<script >
import { Keyboard } from '@capacitor/keyboard';

export default {
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    handleFocus() {
      Keyboard.setAccessoryBarVisible(true); // Shows accessory bar
      Keyboard.show(); // Ensure keyboard shows
    },
    handleBlur() {
      Keyboard.hide(); // Hide keyboard on blur, if necessary
    },
  },
};
</script>