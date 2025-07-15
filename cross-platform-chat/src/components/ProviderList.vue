<template>
  <SelectRoot v-model="selectedModel">
    <SelectTrigger
      class="flex w-full items-center justify-between rounded-md border p-2 shadow-md data-[placeholder]:text-gray-400"
    >
      <SelectValue placeholder="Select a model" />
      <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent class="z-[100] rounded-md border bg-white shadow-md">
        <SelectViewport class="p-2">
          <div v-for="provider in items" :key="provider.id">
            <SelectLabel class="flex h-7 items-center px-6 text-gray-500">
              <img width="30px" height="30px" :src="provider.avatar" :alt="provider.name" class="mr-2 rounded" />
              {{ provider.name }}
            </SelectLabel>
            <SelectGroup>
              <SelectItem
                v-for="model in provider.models"
                :key="model"
                :value="`${provider.id}/${model}`"
                class="relative flex h-7 cursor-pointer items-center rounded px-6 text-green-700 outline-none
                  data-[highlighted]:bg-green-100"
              >
                <SelectItemIndicator class="absolute left-[2px] w-6">
                  <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                </SelectItemIndicator>
                <SelectItemText>{{ model }}</SelectItemText>
              </SelectItem>
            </SelectGroup>
            <SelectSeparator class="my-2 h-[1px] bg-gray-300" />
          </div>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "radix-vue";
import { ProviderProps } from "../types";

defineProps<{ items: ProviderProps[] }>();

const selectedModel = defineModel<string>();
</script>

<style scoped></style>
