<template>
  <form @submit.prevent="upload" class="flex flex-col gap-5" enctype="multipart/form-data">
    <!-- Project Picture -->
    <div class="flex gap-20">
      <label for="picture">Config Picture :</label>
      <div class="relative flex flex-col border border-gray-300 focus:outline-none rounded-md items-center p-2 gap-5">
        <input multiple type="file" @change="getImage($event)" name="image[]" id="picture"
          class="text-gray-500 bg-gray-300 rounded-md" accept=".png, .jpg, .jpeg" />
        <div v-if="payload.preview" class="flex flex-wrap w-full bg-slate-200 rounded-md p-5 gap-5">
          <div class="relative" v-for="(item, index) in payload.preview" :key="index">
            <button
              class="bg-primary relative top-2 right-5 w-7 font-bold h-7 rounded-full text-kuning flex justify-center items-center"
              @click="click(item)">
              X
            </button>
            <img class="w-full border border-black flex mx-auto" :src="item" alt="" v-if="payload.preview" />
          </div>
        </div>
        <div v-else class="mx-auto">
          <div v-if="payload.image" class="">
            <img v-for="(index, item) in payload.preview" :key="index" class="w-full border flex mx-auto" :src="item"
              :alt="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-10">
      <label for="deskripsi">Config :</label>
      <div class="relative flex flex-col gap-5">
        <input v-model="payload.config" type="text" id="tools"
          class="py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nama Project" />
      </div>
    </div>
    <div class="flex gap-10">
      <label for="deskripsi">Value :</label>
      <div class="relative flex flex-col gap-5">
        <textarea v-model="payload.value" type="text" id="tools"
          class="py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
  import useConfig from "@/services/data/config";

  const { StoreConfig } = useConfig();
  const { StoreTools } = useTools();

  const payload = reactive({
    config: "",
    value: "",
    image: [],
    preview: [],
  });

  const image = [];

  const click = (params) => {
    const index = payload.preview.indexOf(params);
    console.log("clicked");
    console.log(index);
    console.log(payload.preview);
    if (index !== -1) {
      payload.preview.splice(index, 1);
      payload.image.splice(index, 1);
      console.log(payload.preview);
    }
    console.log(params);
  };

  const getImage = ($event) => {
    const file = $event.target.files;

    payload.image = Array.from(file);
    const gambar = Array.from(file);
    console.log(file);
    console.log(gambar);

    for (let i = 0; i < payload.image.length; i++) {
      const files = payload.image[i];
      const url = URL.createObjectURL(files);
      console.log(url);

      payload.preview.push(url);
      console.log(files);
      console.log(payload.preview);
    }
  };

  async function upload() {
    const formData = new FormData();
    formData.append("config", payload.config);
    formData.append("value", payload.value);
    for (let i = 0; i < payload.image.length; i++) {
      formData.append("image[]", payload.image[i]);
    }
    await StoreConfig(formData);
    await console.log(payload);
  }
</script>