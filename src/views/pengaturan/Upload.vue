<template>
  <form
    @submit.prevent="upload"
    class="flex flex-col gap-5"
    enctype="multipart/form-data"
  >
    <!-- Project Picture -->
    <div class="flex gap-20">
      <label for="picture">Project Picture :</label>
      <div
        class="relative flex flex-col border border-gray-300 focus:outline-none rounded-md items-center p-2 gap-5"
      >
        <input
          type="file"
          @change="previewProjectPicture"
          name="my-input"
          id="picture"
          class="text-gray-500 bg-gray-300 rounded-md"
          accept=".png, .jpg, .jpeg"
        />
        <div class="w-64 h-64 rounded-md">
          <img
            v-if="projectPicturePreview"
            :src="projectPicturePreview"
            alt="Project Preview"
            class="w-full h-full object-contain p-5"
          />
        </div>
      </div>
    </div>
    <div class="flex gap-10">
      <label for="deskripsi">Config :</label>
      <div class="relative flex flex-col gap-5">
        <input
          v-model="payload.config"
          type="text"
          id="tools"
          class="py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nama Project"
        />
      </div>
    </div>
    <div class="flex gap-10">
      <label for="deskripsi">Value :</label>
      <div class="relative flex flex-col gap-5">
        <textarea
          v-model="payload.value"
          type="text"
          id="tools"
          class="py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nama Project"
        />
      </div>
    </div>
    <div class="flex gap-10">
      <Button class="flex gap-3 px-6 py-1.5 rounded-md bg-green-500 text-white">
        <PlusIcon class="w-5 h-5"></PlusIcon>
        <span class=""> Tambah Data </span></Button
      >
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
  image: "",
});

const projectPicturePreview = ref(null);

const previewProjectPicture = (event) => {
  const allowedExtensions = ["png", "jpg", "jpeg"];
  const file = event.target.files[0];
  payload.image = file;

  // Validasi ekstensi file
  const extension = file.name.split(".").pop().toLowerCase();
  if (!allowedExtensions.includes(extension)) {
    alert("File harus berupa gambar dengan ekstensi PNG, JPG, atau JPEG.");
    event.target.value = "";
    return;
  }
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      projectPicturePreview.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const getImage = ($event) => {
  const target = $event.target;
  form.image = target.files[0];
  form.preview = URL.createObjectURL($event.target.files[0]);
};

async function upload() {
  const formData = new FormData();
  formData.append("config", payload.config);
  formData.append("value", payload.value);
  formData.append("image", payload.image);
  await StoreConfig(formData);
}
</script>
