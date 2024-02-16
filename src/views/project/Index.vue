<template>
  <div class="max-w-auto mx-auto">
    <div class="flex justify-between">
      <h2 class="text-lg font-medium text-gray-900">Project</h2>
      <input
        v-model="keyword"
        type="text"
        class="focus:outline-none border-2 border-secondary px-2 py-1 rounded-lg focus:ring-none focus-border-none"
      />
    </div>
  </div>
  <div class="max-w-auto mx-auto mt-4">
    <div
      class="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
    >
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-primary">
          <tr>
            <th class="py-2.5 text-left text-white text-xs font-semibold sm:pl-6">No.</th>
            <th
              scope="col"
              class="py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-secondary sm:pl-6"
            >
              Nama Project
            </th>
            <th
              scope="col"
              class="py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-secondary sm:pl-6"
            >
              Author
            </th>
            <th
              scope="col"
              class="py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-secondary sm:pl-6"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(item, index) in searchings" :key="item.id">
            <td class="py-2 pl-7 text-xs font-medium">
              {{ index + 1 }}
            </td>
            <td class="py-2 pl-4 pr-3 text-xs font-medium">
              {{ item.nama_project }}
            </td>
            <td class="py-2 pl-4 pr-3 text-xs font-medium">
              {{ item.user?.username }}
            </td>
            <td class="py-2 pl-4 pr-3 text-xs font-medium">
              <RouterLink
                class="flex gap-2 bg-secondary w-20 rounded-md items-center p-2 hover:bg-gray-900 duration-300 transition-colors"
                :to="{ name: 'project.detail', params: { id: item.id } }"
              >
                <ArrowRightCircleIcon class="w-5 h-5 text-primary"></ArrowRightCircleIcon>
                <span class="text-primary">Detail</span></RouterLink
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline'
import useProject from '@/services/data/project'

const { IndexProject, project } = useProject()

import { RouterLink } from 'vue-router'
const keyword = ref('')

const searchings = computed(() => {
  if (keyword.value) {
    return project.value.data.filter((item) => {
      return keyword.value
        .toLowerCase()
        .split(' ')
        .every((items) => item.username.toLowerCase().includes(items))
    })
  } else {
    return project.value.data
  }
})

onMounted(() => {
  IndexProject()
})
</script>
