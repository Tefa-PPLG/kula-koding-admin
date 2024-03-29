import axios from "../axios";
import { ref } from "vue";
import useSwal from "../swal";

export default function useTools() {
  const tools = ref([]);
  const { accepted, failed, confirmed, success } = useSwal();

  async function IndexTools() {
    const response = await axios.get("/api/v1/tool");
    console.log(response.data);
    tools.value = response.data.tools;
  }

  async function DetailTools(id) {
    const response = await axios.get(`/api/v1/tool/${id}`);
    console.log(response.data);
    tools.value = response.data.tools;
  }

  async function StoreTools(payload) {
    try {
      const response = await axios.post("/api/v1/tool", payload);
      console.log(response.data);
      if (response) {
        success("Data berhasil ditambahkan");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  }

  return {
    tools,
    IndexTools,
    DetailTools,
    StoreTools,
  };
}
