<template>
  <div class="max-w-auto mx-auto">
    <div class="flex justify-between">
      <h2 class="text-lg font-medium text-gray-900">Tools</h2>
      <div class="flex gap-5">
        <RouterLink
          class="flex items-center gap-2 bg-green-500 hover:bg-green-700 duration-200 transition-colors px-2 rounded-md py-1"
          :to="{ name: 'blog.add' }"
        >
          <PlusIcon class="w-5 h-5 text-primary"></PlusIcon>
          <span class="text-primary">Add Blog</span>
        </RouterLink>
        <input
          v-model="keyword"
          type="text"
          class="focus:outline-none border-2 border-secondary px-2 py-1 rounded-lg focus:ring-none focus-border-none"
        />
      </div>
    </div>
  </div>
  <div class="max-w-auto mx-auto mt-4">
    <div
      class="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
    >
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-primary">
          <tr>
            <th
              class="py-2.5 text-left text-secondary text-xs font-semibold sm:pl-6"
            >
              No.
            </th>
            <th
              scope="col"
              class="py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-secondary sm:pl-6"
            >
              Judul
            </th>
            <th
              scope="col"
              class="py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-secondary sm:pl-6"
            >
              Slug
            </th>
            <th
              scope="col"
              class="py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-secondary sm:pl-6"
            >
              konten
            </th>
            <th
              scope="col"
              class="py-2.5 pl-4 pr-3 text-left text-xs font-semibold text-secondary sm:pl-6"
            >
              Thumbnail
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
          <tr v-for="(item, index) in blog" :key="item.id">
            <td class="py-2 pl-7 text-xs font-medium">
              {{ index + 1 }}
            </td>
            <td class="py-2 pl-4 pr-3 text-xs font-medium">
              {{ item.judul }}
            </td>
            <td class="py-2 pl-4 pr-3 text-xs font-medium">
              {{ item.slug }}
            </td>
            <td class="py-2 pl-4 pr-3 text-xs font-medium">
              {{ item.konten }}
            </td>
            <td class="py-2 pl-4 pr-3 text-xs font-medium">
              <img
                :src="BASE_URL + '/' + item.thumbnail"
                class="w-12 h-12"
                alt=""
              />
            </td>
            <td class="py-2 flex gap-5 pl-4 pr-3 text-xs font-medium">
              <RouterLink
                class="flex items-center gap-2 bg-green-500 hover:bg-green-700 duration-200 transition-colors px-2 rounded-md py-1"
                :to="{ name: 'blog.detail', params: { id: item.id } }"
              >
                <PencilSquareIcon
                  class="w-5 h-5 text-primary"
                ></PencilSquareIcon>
                <span class="text-primary">Edit</span>
              </RouterLink>
              <RouterLink
                class="flex items-center gap-2 bg-red-500 hover:bg-red-700 duration-200 transition-colors px-2 rounded-md py-1"
                :to="{ name: 'tools.detail', params: { id: item.id } }"
              >
                <TrashIcon class="w-5 h-5 text-primary"></TrashIcon>
                <span class="text-primary">Delete</span>
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup >
import {
  TrashIcon,
  PencilSquareIcon,
  PlusIcon,
} from "@heroicons/vue/24/outline";
import { onMounted, computed, ref } from "vue";
import useBlog from "@/services/data/blog";

const { IndexBlog, blog } = useBlog();
const BASE_URL = import.meta.env.VITE_API_URL;

onMounted(() => {
  IndexBlog();
});
</script>
