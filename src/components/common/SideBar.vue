

<template>
    <v-navigation-drawer
        :rail="rail"
        expand-on-hover
        v-if="userLogin"
        permanent
        update:rail="()=>drawer"
        @click="rail = false"
    >
        <v-list color="blue">
            <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            >
                <template v-slot:append>
                    <v-btn
                        :icon="true"
                        variant="text"
                        size="20"
                        @click.stop="rail = !rail"
                    >
                        <v-icon size="10"
                        >{{ rail ? "fa fa-chevron-left" : "fa fa-chevron-right" }}
                        </v-icon>
                    </v-btn>
                </template>
                <v-list-item-title>
                    <div class="_flex _gap-2">
                        <b>
                            {{ userLogin.name }}
                        </b>
                    </div>
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{ userLogin.email }}
                </v-list-item-subtitle>
            </v-list-item>
        </v-list>

        <v-divider class="border-opacity-100 _border-gray-400"></v-divider>
        <v-treeview
            :items="dashboardChildren"
            class="!_p-0"
            collapse-icon=""
            density="comfortable"
            expand-icon=""
        >
            <template v-slot:prepend="{ item }">
                <router-link
                    v-if="item.meta && item.meta.icon"
                    :to="item.path"
                    class="_ml-[-1rem] _pr-5 _pl-5"
                >
                    <v-icon>{{ item.meta.icon }}</v-icon>
                </router-link>
            </template>
            <template v-slot:title="{ item }">
                <router-link :to="item.path" class="_block _mr-[-1rem] _capitalize">
                    {{ item.meta && item.meta.__name }}
                </router-link>
            </template>
        </v-treeview>

        <template v-slot:append>
            <v-list-item class="!_py-4 !px-2">
                <template v-slot:prepend>
                    <v-menu open-on-hover>
                        <template v-slot:activator="{ props }">
                            <v-btn density="comfortable" flat :icon="true" v-bind="props">
                                <v-icon size="20">fa fa-cog</v-icon>
                            </v-btn>
                        </template>
                        <v-list width="250">
                            <v-list-item density="compact" link @click="logout">
                                <template v-slot:prepend>
                                    <v-icon>fa fa-door-open</v-icon>
                                </template>
                                <v-list-item-title> Logout</v-list-item-title>
                            </v-list-item>
                            <v-list-item density="compact" link @click="toggleTheme">
                                <template v-slot:prepend>
                                    <v-icon
                                    >{{
                                            theme.global.current.value.dark
                                                ? "fa fa-sun"
                                                : "fa fa-moon"
                                        }}
                                    </v-icon>
                                </template>
                                <v-list-item-title> Toggle Theme</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-list-item>
        </template>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import {loginState} from "@/stats/loginState";
import {type Ref, ref, type UnwrapRef} from "vue";
import {useTheme} from "vuetify";
import type {RouteRecordRaw} from "vue-router";
import router from "@/router";


const {userLogin, logout} = loginState();
const rail = ref(false);
const theme = useTheme();
const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
const dashboardRoute: RouteRecordRaw = router.options.routes.find(
    (route) => route.name === "dashboard",
) as RouteRecordRaw;
const dashboardChildren: Ref<UnwrapRef<RouteRecordRaw>[]> = ref(
    dashboardRoute?.children || [],
);
dashboardChildren.value =
    dashboardRoute?.children!.filter((i: RouteRecordRaw) => {
        if (i.meta) {
            return i.meta["sidebar"] !== false;
        } else {
            return false;
        }
    }) || [];
</script>
