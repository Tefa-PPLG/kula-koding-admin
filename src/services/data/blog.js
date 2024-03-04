import { isAxiosError } from "axios";
import axios from "../axios";
import { ref } from "vue";

export default function useBlog() {
  const blog = ref([]);

  async function IndexBlog() {
    const response = await axios.get("/api/v1/admin/blog");
    console.log(response.data);
    blog.value = response.data;
  }

  async function StoreBlog(payload) {
    try {
      const response = await axios.post("/api/v1/admin/blog", payload);
      console.log(response.data);
      success("Data berhasil ditambahkan");
      router.back()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  }

  async function ShowBlog(id) {
    const response = await axios.get(`/api/v1/admin/blog/${id}`);
    console.log(response.data);
    blog.value = response.data;
  }

  async function UpdateBlog(id, payload) {
    try {
      const response = await axios.put(`/api/v1/admin/blog/${id}`);
      console.log(response.data);
      success("Data berhasil diubah");
      router.back()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  }

  return {
    blog,
    IndexBlog,
    StoreBlog,
    ShowBlog,
    UpdateBlog,
  };
}
