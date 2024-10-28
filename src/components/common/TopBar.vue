
<template>
    <v-toolbar :title="routeTitle"></v-toolbar>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import type {CustomRouteMeta} from "@/router";

// Access the current route
const route = useRoute();

// Cast `route` to `CustomRouteRecordRaw` to access `meta.name`
const routeTitle = computed(() => (route.meta as CustomRouteMeta)?.name || 'Default Title');
</script>
