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
    <div class="flex gap-7 mt-5">
      <div class="flex justify-center items-center">
        <div class="p-6 h-[375px] w-[670px] flex flex-col border-2 border-secondary rounded-md shadow bg-primary">
          <h3 class="">Latest User</h3>
          <div class="grid gap-4 mt-3 grid-cols-3">
            <div class="flex flex-col justify-center items-center gap-3" v-for="item in latest.user">
              <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${item.username}`" alt=""
                class="w-14 h-1w-14 rounded-full" />
              <h3 class="">{{ item.username }}</h3>
            </div>
          </div>
          <button class="w-full bg-secondary text-white py-2 mt-5 hover:bg-gray-900 duration-150 transition-colors">
            View All User
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="p-6 w-[455px] h-[375px] flex flex-col border-2 border-secondary rounded-md shadow bg-primary">
          <h3 class="font-medium text-center mb-5 text-xl">Latest Project</h3>
          <div class="">
            <Table class="min-w-full divide-y divide-gray-300">
              <thead class="border bg-[#9C9C9C] border-secondary">
                <th class="px-2 border-2 border-secondary">Nama Project</th>
                <th class="px-2 border-2 border-secondary">Author</th>
              </thead>
              <tbody>
                <tr class="border border-secondary odd:bg-[#D9D9D9] even:bg-[#ABABAB]" v-for="item in latests.project">
                  <td class="border-2 border-secondary">
                    {{ item.nama_project }}
                  </td>
                  <td class="border-2 border-secondary">
                    {{ item.user?.username }}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
    <div class="flex mt-5 justify-center items-center">
      <div class="p-6 w-full flex flex-col  border-2 border-dark rounded-md shadow bg-primary">
        <h3 class="font-medium text-center mb-5 text-xl">Latest Comments</h3>
        <div class="flex flex-col gap-5 items-center">
          <div v-for="item in latest.komentar" class="flex gap-5 items-end border-t-2 border-t-dark">
            <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${item.user?.username}`" alt="profile"
              class="rounded-full cursor-pointer w-10 items-end justify-end" />
            <div class="flex flex-col relative">
              <div class="flex gap-4 items-center mt-1">
                <h3 class="">{{ item.user?.kelas }}</h3>
                <h3 class="text-light bg-dark p-1 rounded-md">
                  {{ item.user?.kelas }}
                </h3>
              </div>
              <input disabled type="text" class="bg-transparent text-dark placeholder:text-dark lg:w-96 border-none p-0"
                :value="item.komentar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    UserIcon,
    CodeBracketIcon,
    WrenchIcon,
    ChatBubbleOvalLeftIcon,
  } from "@heroicons/vue/24/solid";
  import useDashboard from "@/services/data";
  import { onMounted } from "vue";

  const { total, TotalData, latest, Latest } = useDashboard();

  const latests = latest;

  onMounted(() => {
    TotalData();
    Latest();
  });
</script>