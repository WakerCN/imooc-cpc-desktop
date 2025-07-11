<template>
  <div class="flex items-center justify-between h-screen">
    <div class="w-[300px] h-full bg-gray-300 text-gray-700 hover:bg-yellow-300">
      <ConversationList :items="ConversationListMockData" />
    </div>
    <div class="bg-cyan-300 text-cyan-700 flex-1 h-full">content</div>
  </div>
</template>

<script setup>
import ConversationList from "./components/ConversationList.vue";
import { ConversationListMockData } from "./data/mockData";
</script>
