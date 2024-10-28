<template>
  <v-bottom-navigation mode="shift">
    <v-btn
      v-for="(item, i) in dashboardChildren"
      :key="i"
      :to="item.path"
      exact
    >
      <v-icon>{{ item.meta?.icon }}</v-icon>
      <span>{{ item.meta.name }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router";
import router from "@/router";
import { ref, type Ref, type UnwrapRef } from "vue";


interface CustomRouteMeta {
    name: string;
    icon: string;
    sidebar?: boolean;
}

interface CustomRouteRecordRaw extends RouteRecordRaw {
    meta?: CustomRouteMeta;
    [key: string]: any;
}
const dashboardRoute = router.options.routes.find(
    (route) => route.name === "dashboard",
) as CustomRouteRecordRaw;

const dashboardChildren: Ref<UnwrapRef<CustomRouteRecordRaw>[]> = ref(
    dashboardRoute?.children || [],
);
dashboardChildren.value =
  dashboardRoute?.children!.filter((i: CustomRouteRecordRaw) => {
    if (i.meta) {
      return i.meta["sidebar"] !== false;
    } else {
      return false;
    }
  }) || [];
</script>
