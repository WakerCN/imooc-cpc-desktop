<template>
  <div class="mx-auto h-full w-[80%]">
    <div class="model-list flex h-[calc(100%-74px)] items-center">
      <ProviderList :items="ProviderListMockData" v-model="selectedModel" />
    </div>
    <div class="message-btn mb-5 h-[54px]">
      <MessageInput />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProviderList from "../components/ProviderList.vue";
import MessageInput from "../components/MessageInput.vue";
import { ProviderListMockData } from "../data/mockData";
import { ref } from "vue";

const selectedModel = ref("");
</script>

<style></style>
