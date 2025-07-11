<template>
  <div class="conversation-list">
    <div
      class="item p-2 border-gray-300 border-t bg-white cursor-pointer hover:bg-gray-200"
      v-for="item in items"
      :key="item.id"
    >
      <div
        class="flex items-center justify-between text-sm leading-5 select-none"
      >
        <span>{{ item.selectedModel }}</span>
        <span>{{ item.createdAt }}</span>
      </div>
      <h2 class="font-semibold leading-6 text-gray-900 truncate">
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
