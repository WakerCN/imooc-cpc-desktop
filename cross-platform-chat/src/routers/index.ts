/*
 * @Author       : 魏威
 * @Date         : 2025-07-13 16:53
 * @LastEditTime : 2025-07-13 17:10
 * @LastEditors  : StarOne
 * @Description  :
 */

import { createRouter, createMemoryHistory, RouterOptions } from "vue-router";
const HomeView = () => import("../views/HomeView.vue");
const ConversationView = () => import("../views/ConversationView.vue");
const SettingsView = () => import("../views/SettingsView.vue");

const routes: RouterOptions["routes"] = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/conversation/:id",
    component: ConversationView,
  },
  {
    path: "/settings",
    component: SettingsView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
