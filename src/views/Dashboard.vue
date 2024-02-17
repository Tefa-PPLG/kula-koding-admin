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
    <div class="flex justify-between mt-5">
      <div class="flex justify-center items-center">
        <div class="p-6 flex flex-col border-2 border-secondary rounded-md shadow bg-primary">
          <h3 class="">Latest User</h3>
          <div class="grid gap-4 mt-3 grid-cols-3">
            <div
              class="flex flex-col justify-center items-center gap-3"
              v-for="item in latest.user"
            >
              <img
                :src="`https://api.dicebear.com/7.x/initials/svg?seed=${item.username}`"
                alt=""
                class="w-14 h-1w-14 rounded-full"
              />
              <h3 class="">{{ item.username }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="p-6 flex flex-col border-2 border-secondary rounded-md shadow bg-primary">
          <h3 class="">Latest Project</h3>
          <div class="grid gap-4 mt-3 grid-cols-3">
            <Table class="min-w-full divide-y divide-gray-300">
              <thead>
                <th class="px-2">Nama Project</th>
                <th class="px-2">Author</th>
              </thead>
              <tbody>
                <tr v-for="item in latest.project">
                  <td>
                    {{ item.nama_project }}
                  </td>
                  <td>
                    {{ item.user.username }}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
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

const { total, TotalData, latest, Latest } = useDashboard()

onMounted(() => {
  TotalData()
  Latest()
})
</script>
