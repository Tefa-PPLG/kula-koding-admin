<template>
  <div class="max-w-auto mx-auto">
    <div class="flex justify-between">
      <h2 class="text-lg font-medium text-gray-900">User</h2>
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
              Username
            </th>
            <th
              scope="col"
              class="py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-secondary sm:pl-6"
            >
              Kelas
            </th>
            <th scope="col" class="px-3 py-2.5 text-center text-xs font-semibold text-secondary">
              Role
            </th>
            <th scope="col" class="px-3 py-2.5 text-center text-xs font-semibold text-secondary">
              Email
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(item, index) in searchings" :key="item.id">
            <td class="py-2 pl-7 text-xs font-medium">
              {{ index + 1 }}
            </td>
            <td class="py-2 pl-4 pr-3 text-xs font-medium">
              {{ item.username }}
            </td>
            <td class="py-2 pl-4 pr-3 text-xs font-medium">
              {{ item.kelas }}
            </td>
            <td class="px-3 py-2 text-center text-xs font-medium">
              {{ item.role }}
            </td>
            <td class="px-3 py-2 text-center text-xs font-medium">
              {{ item.email }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import useUser from '../../services/data/user'

const { IndexUser, user } = useUser()

const keyword = ref('')

const searchings = computed(() => {
  if (keyword.value) {
    return user.value.filter((item) => {
      return keyword.value
        .toLowerCase()
        .split(' ')
        .every((items) => item.username.toLowerCase().includes(items))
    })
  } else {
    return user.value
  }
})

onMounted(() => {
  IndexUser()
})
</script>
