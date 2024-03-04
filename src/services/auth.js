import { useRouter } from "vue-router";
import axios from "./axios";
import useSwal from "./swal";
import { ref } from "vue";

export default function useAuth() {
  const { accepted, confirmed, rejected, success } = useSwal();
  const router = useRouter();
  const auth = ref([]);

  async function Login(payload) {
    try {
      const response = await axios.post("/api/v1/auth/login", payload);
      console.log(response.data);
      const user = response.data.user;
      const token = response.data.token;
      console.log(token);
      if (user.role == "admin") {
        setHeaderToken(response.data.token);
        success("Login success!");
        setTimeout(() => {
          router.push("dashboard");
        }, 1500);
      } else {
        rejected("Anda tidak memiliki akses untuk halaman ini!");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        rejected(error.response?.data.message);
      }
    }
  }

  async function getAuth() {
    try {
      const response = await axios.get("/api/v1/profile");
      auth.value = await response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) router.push("/login");
      }
    }
  }

  function setHeaderToken(token) {
    localStorage.setItem("access_token", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  function removeHeaderToken() {
    delete axios.defaults.headers.common.Authorization;
    localStorage.removeItem("access_token");
  }

  async function Logout() {
    const response = await confirmed("Apa anda ingin keluar?");
    if (response.isConfirmed) {
      try {
        await axios.get("/api/logout");
        removeHeaderToken();
        router.push("/login");
        await success("Anda telah keluar");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return {
    Login,
    Logout,
    getAuth,
    auth,
  };
}
