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

<script setup>
import ProviderList from "../components/ProviderList.vue";
import MessageInput from "../components/MessageInput.vue";
import { ProviderListMockData } from "../data/mockData";
</script>

<style></style>
