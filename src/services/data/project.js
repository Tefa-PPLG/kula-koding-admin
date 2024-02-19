import axios from "axios";
import { ref } from "vue";

export default function useProject() {
  const project = ref([]);

  async function IndexProject() {
    const response = await axios.get("/api/v1/admin/project");
    console.log(response.data);
    project.value = response.data;
  }

  return {
    project,
    IndexProject,
  };
}
