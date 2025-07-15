<template>
  <div class="conversation-view h-[100vh] w-[80%] mx-auto overflow-hidden">
    <div class="message-wrap h-[calc(100%-114px)] overflow-y-auto my-5">
      <MessageList :items="messageList" />
    </div>
    <div class="message-input-wrap h-[54px]">
      <MessageInput />
    </div>
  </div>
</template>

<script setup>
import MessageInput from "../components/MessageInput.vue";
import MessageList from "../components/MessageList.vue";
import { messageList } from "../data/mockData";
</script>
