import axios from "../axios";
import { ref } from "vue";

export default function useUser() {
  const user = ref([]);

  async function IndexUser() {
    const response = await axios.get("/api/v1/admin/user");
    console.log(response.data);
    user.value = response.data.data;
  }

  return {
    user,
    IndexUser,
  };
}
