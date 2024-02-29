<template>
  <form @submit.prevent="upload" class="flex flex-col gap-5" enctype="multipart/form-data">
    <!-- Icon Tool -->
    <div class="col-span-6 sm:col-span-6">
      <label for="icon" class="block text-xs font-medium text-gray-700">Icon</label>
      <label for="" class="text-gray-400 text-xs">Masukkan icon dengan SVG format</label>
      <textarea rows="10" v-model="payload.icon" name="icon" id="icon"
        class="mt-1 focus:ring-primary focus:border-primary block w-1/2 shadow-sm sm:text-xs border-gray-300 rounded-md" />
    </div>
    <!-- Name Tool -->
    <div class="flex gap-10">
      <label for="deskripsi">Nama Tool :</label>
      <div class="relative flex flex-col gap-5">
        <input v-model="payload.tools" type="text" id="tools"
          class="py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          placeholder="Nama Project" />
      </div>
    </div>
    <div class="flex gap-10">
      <Button class="flex gap-3 px-6 py-1.5 rounded-md bg-green-500 text-white">
        <PlusIcon class="w-5 h-5"></PlusIcon>
        <span class=""> Tambah Data </span>
      </Button>
    </div>
  </form>
</template>

<script setup>
  import { PlusIcon } from "@heroicons/vue/24/solid";
  import { reactive, ref } from "vue";
  import useTools from "@/services/data/tools";

  const { StoreTools } = useTools();

  const payload = reactive({
    tools: "",
    icon: "",
  });

  async function upload() {
    const formData = new FormData();
    formData.append("tools", payload.tools);
    formData.append("icon", payload.icon);
    await StoreTools(formData);
  }
</script>