<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-4">
      <div class="flex gap-3 w-60 bg-primary p-6 shadow items-center">
        <div class="flex bg-green-500 p-5">
          <UserIcon class="w-5 h-5 text-primary"></UserIcon>
        </div>
        <div class="flex-col">
          <h3 class="font-semibold">User</h3>
          <h3 class="font-semibold">{{ total.user }}</h3>
        </div>
      </div>
      <div class="flex gap-3 w-60 bg-primary p-6 shadow items-center">
        <div class="flex bg-yellow-500 p-5">
          <CodeBracketIcon class="w-5 font-bold h-5 text-primary"></CodeBracketIcon>
        </div>
        <div class="flex-col">
          <h3 class="font-semibold">Project</h3>
          <h3 class="font-semibold">{{ total.project }}</h3>
        </div>
      </div>
      <div class="flex gap-3 w-60 bg-primary p-6 shadow items-center">
        <div class="flex bg-red-500 p-5">
          <WrenchIcon class="w-5 h-5 text-primary"></WrenchIcon>
        </div>
        <div class="flex-col">
          <h3 class="font-semibold">Tools</h3>
          <h3 class="font-semibold">{{ total.tools }}</h3>
        </div>
      </div>
      <div class="flex gap-3 w-60 bg-primary p-6 shadow items-center">
        <div class="flex bg-red-500 p-5">
          <ChatBubbleOvalLeftIcon class="w-5 h-5 text-primary"></ChatBubbleOvalLeftIcon>
        </div>
        <div class="flex-col">
          <h3 class="font-semibold">Comments</h3>
          <h3 class="font-semibold">{{ total.tools }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  UserIcon,
  CodeBracketIcon,
  WrenchIcon,
  ChatBubbleOvalLeftIcon
} from '@heroicons/vue/24/solid'
import useDashboard from '@/services/data'
import { onMounted } from 'vue'

const { total, TotalData } = useDashboard()

onMounted(() => {
  TotalData()
})
</script>
