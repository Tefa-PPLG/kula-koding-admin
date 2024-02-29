<template>
  <div class="max-w-auto mx-auto">
    <h2 class="text-lg font-medium text-gray-900">Edit Tools</h2>
    <div class="w-full pt-4">
      <form @submit.prevent="save()" method="POST">
        <div class="col-span-6 sm:col-span-6 mb-5">
          <label for="icon" class="block text-xs font-medium text-gray-700">Icon</label>
          <label for="" class="text-gray-400 text-xs">Masukkan icon dengan SVG format</label>
          <textarea rows="10" v-model="form.icon" name="icon" id="icon"
            class="mt-1 p-5 focus:ring-primary focus:border-primary block w-full shadow sm:text-xs border-gray-300 rounded-md" />
        </div>
        <div class="shadow overflow-hidden sm:rounded-md ">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-6">
                <label for="nama" class="block text-xs font-medium text-gray-700">Nama</label>
                <input type="text" v-model="form.tools" name="nama" id="nama"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-xs border-gray-300 rounded-md" />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 sm:px-6">
            <div class="flex justify-between">
              <div class="flex">
                <router-link :to="{ name: 'tools' }"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-gray-900 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                  <ChevronLeftIcon class="mr-2 h-4 w-4" aria-hidden="false" />
                  Kembali
                </router-link>
                <button type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secbg-secondary ml-2">
                  <PencilSquareIcon class="mr-2 h-4 w-4" aria-hidden="false" />
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
  import useTools from '@/services/data/tools'
  import { ChevronLeftIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
  import { defineProps, reactive, watch, onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  const props = defineProps(['kategori'])
  const { DetailTools, tools } = useTools()

  const router = useRoute()
  const form = reactive({
    tools: '',
    icon: ''
  })

  function save() { }

  onMounted(() => {
    DetailTools(router.params.id)
  })

  watch(tools, (item) => {
    form.tools = item.tools
    form.icon = item.icon
  })
</script>