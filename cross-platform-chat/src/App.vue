<template>
  <div class="flex h-screen items-center justify-between">
    <div class="h-full w-[300px] bg-gray-300 text-gray-700">
      <ConversationList :items="ConversationListMockData" />
      <div class="grid h-[60px] grid-cols-2 gap-2 p-2">
        <button
          class="inline-block h-[100%] flex-1 rounded-[4px] border border-green-700 bg-green-700 p-1 text-white shadow-sm hover:bg-green-700/90"
        >
          新建聊天
        </button>
        <button
          class="inline-block h-[100%] flex-1 rounded-[4px] border border-green-700 bg-green-50 p-1 text-green-700 shadow-sm hover:bg-green-700/90 hover:text-white"
        >
          应用设置
        </button>
      </div>
    </div>
    <div class="h-full flex-1 bg-cyan-300 text-cyan-700">content</div>
  </div>
</template>

<script setup>
import ConversationList from "./components/ConversationList.vue";
import { ConversationListMockData } from "./data/mockData";
</script>
