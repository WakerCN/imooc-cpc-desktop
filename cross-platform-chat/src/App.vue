<template>
  <div class="flex h-screen items-center justify-between">
    <div class="h-full w-[300px] border-r bg-gray-300 text-gray-700">
      <ConversationList :items="ConversationListMockData" />
      <div class="grid h-[60px] grid-cols-2 gap-2 p-2">
        <RouterLink to="/">
          <button
            class="inline-flex h-[100%] items-center justify-center gap-1 rounded-[4px] border border-green-700 bg-green-700 p-1 text-white shadow-sm hover:bg-green-700/90"
          >
            <Icon icon="material-symbols:chat-add-on-rounded" width="24" height="24" />
            新建聊天
          </button>
        </RouterLink>
        <RouterLink to="/settings">
          <button
            class="inline-flex h-[100%] items-center justify-center gap-1 rounded-[4px] border border-green-700 bg-green-50 p-1 text-green-700 shadow-sm hover:bg-green-700/90 hover:text-white"
          >
            <Icon icon="material-symbols:settings" width="24" height="24" />
            应用设置
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="h-full flex-1">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import ConversationList from "./components/ConversationList.vue";
import { ConversationListMockData, ProviderListMockData } from "./data/mockData";
import { ref } from "vue";

const selectedModel = ref("");
</script>
