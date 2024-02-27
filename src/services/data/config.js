import { ref } from "vue";
import axios from "../axios";

export default function useConfig() {
  const config = ref([]);

  async function IndexConfig() {
    const response = await axios.get("/api/v1/admin/config");
    console.log(response.data);
    config.value = response.data.data;
  }

  async function StoreConfig(payload) {
    try {
      const response = await axios.post("/api/v1/admin/config", payload);
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  }

  return {
    IndexConfig,
    StoreConfig,
    config,
  };
}
