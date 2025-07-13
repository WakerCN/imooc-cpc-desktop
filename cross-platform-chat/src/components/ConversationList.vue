<template>
  <div class="conversation-list h-[calc(100%-60px)] overflow-y-auto bg-white">
    <div
      class="item cursor-pointer border-b border-gray-300 bg-white p-2 hover:bg-gray-200"
      v-for="item in items"
      :key="item.id"
    >
      <div class="flex select-none items-center justify-between text-sm leading-5">
        <span>{{ item.selectedModel }}</span>
        <span>{{ item.createdAt }}</span>
      </div>
      <h2 class="truncate font-semibold leading-6 text-gray-900">
        {{ item.title }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ConversationProps } from "src/types";

defineProps<{ items: ConversationProps[] }>();
</script>

<style scoped></style>
