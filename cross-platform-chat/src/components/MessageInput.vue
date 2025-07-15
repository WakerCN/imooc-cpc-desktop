<template>
  <div
    class="message-input flex w-full mb-5 h-full rounded-lg border border-gray-300 p-2 transition-all duration-300
      hover:border-green-700"
  >
    <input type="text" class="flex-1 outline-none" v-model="inputText" />
    <button
      class="inline-flex h-10 items-center gap-1 rounded-[4px] border bg-green-700 p-2 text-sm text-white shadow-sm
        hover:bg-green-700/90"
      @click="onCreate"
    >
      <Icon icon="material-symbols:send-rounded" width="24" height="24" />
      发送
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const emit = defineEmits<{ create: [value: string] }>();

const inputText = defineModel<string>();

const onCreate = () => {
  if (inputText.value.trim()) {
    emit("create", inputText.value);
  }
};
</script>

<style scoped></style>
