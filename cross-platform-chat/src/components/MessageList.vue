<template>
  <div class="message-list">
    <div
      class="message-item flex mb-5"
      v-for="{ id, type, createdAt, status, content } in items"
      :key="id"
      :class="{
        'justify-end': type === 'question',
      }"
    >
      <div class="max-w-[80%] flex-col">
        <div class="text-gray-500 mb-2 text-sm px-2" :class="{ 'text-right': type === 'question' }">
          {{ createdAt }}
        </div>
        <div
          class="message-item-chat rounded-md p-2 shadow-md inline-block"
          :class="{
            'bg-green-700': type === 'question',
            'bg-gray-200': type === 'answer',
            'text-white': type === 'question',
          }"
        >
          <template v-if="status === 'loading'">
            <Icon icon="svg-spinners:ring-resize" width="24" height="24" />
          </template>
          <template v-else>
            {{ content }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MessageProps } from "../types";
import { Icon } from "@iconify/vue";
defineProps<{ items: MessageProps[] }>();
</script>
