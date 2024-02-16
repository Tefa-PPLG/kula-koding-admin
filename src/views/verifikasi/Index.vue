<template>
  <div class="max-w-auto mx-auto">
    <div class="flex justify-between">
      <h2 class="text-lg font-medium text-gray-900">Verifikasi user</h2>
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
            <th scope="col" class="px-3 py-2.5 text-center text-xs font-semibold text-secondary">
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
            <td class="py-2 flex justify-center items-center gap-5 pl-4 pr-3 text-xs font-medium">
              <RouterLink
                v-if="item.isVerified != 1"
                class="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-700 duration-200 transition-colors px-2 rounded-md py-1"
                :to="{ name: 'tools.detail', params: { id: item.id } }"
              >
                <CheckIcon class="w-5 h-5 text-primary"></CheckIcon>
                <span class="text-primary">Verifikasi</span>
              </RouterLink>
              <RouterLink
                v-else
                class="flex items-center gap-2 bg-green-500 hover:bg-green-700 duration-200 transition-colors px-2 rounded-md py-1"
                :to="{ name: 'tools.detail', params: { id: item.id } }"
              >
                <CheckBadgeIcon class="w-5 h-5 text-primary"></CheckBadgeIcon>
                <span class="text-primary">Verified</span>
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { CheckBadgeIcon, CheckIcon } from '@heroicons/vue/24/outline'
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
