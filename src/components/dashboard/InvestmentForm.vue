<template>
  <div class="investment-form flex flex-wrap gap-4">
    <!-- Investment Form -->
    <v-card class="w-full md:w-2/3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md">
      <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
        <v-icon class="mr-2">mdi-cash</v-icon>
        {{ investment.id ? 'Edit Investment' : 'Add Investment' }}
      </v-card-title>
      <v-card-text>
        <div class="mb-4">
          <label class="block text-sm font-medium">Select User</label>
          <v-select
              :items="users"
              v-model="investment.user_id"
              item-text="name"
              item-value="id"
              placeholder="Choose a User"
              class="w-full mt-2"
              outlined
          ></v-select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium">Investment Percentage</label>
          <v-text-field
              v-model="investment.percentage"
              type="number"
              placeholder="Enter percentage (e.g., 33.3235)"
              class="w-full mt-2"
              outlined
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="text-white" @click="saveInvestment">Save Investment</v-btn>
        <v-btn color="error" class="text-white" @click="resetForm">Reset</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Existing Investments -->
    <v-card v-if="showInvestmentsList"
            class="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 shadow-md">
      <v-card-title class="text-gray-800 dark:text-gray-100 font-semibold">
        <v-icon class="mr-2">mdi-file-document-outline</v-icon>
        Existing Investments
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item
              v-for="investment in investments"
              :key="investment.id"
              @click="editInvestment(investment)"
              class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <v-list-item-content>
              <v-list-item-title>{{ investment.user_name }}</v-list-item-title>
              <v-list-item-subtitle>Percentage: {{ investment.percentage }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import {PropType, reactive} from 'vue'

/** Combine all props into a single defineProps call */
const props = defineProps({
  users: {
    type: Array as PropType<Array<{ id: number; name: string }>>,
    default: () => [],
  },
  investments: {
    type: Array as PropType<Array<{ id: number; user_name: string; percentage: string }>>,
    default: () => [],
  },
  showInvestmentsList: {
    type: Boolean,
    default: true,
  },
})

/** Emit events to the parent */
const emit = defineEmits(['save', 'edit'])

/** Reactive state for the form */
const investment = reactive({
  id: null,
  user_id: null,
  percentage: null,
})

/** Emit the save event */
const saveInvestment = () => {
  emit('save', {...investment})
  resetForm()
}

/** Populate form for editing an investment */
const editInvestment = (selectedInvestment: any) => {
  investment.id = selectedInvestment.id
  investment.user_id = props.users.find((user) => user.name === selectedInvestment.user_name)?.id || null
  investment.percentage = selectedInvestment.percentage
  emit('edit', selectedInvestment)
}

/** Reset the form */
const resetForm = () => {
  investment.id = null
  investment.user_id = null
  investment.percentage = null
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
