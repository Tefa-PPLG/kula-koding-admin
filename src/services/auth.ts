import { useRouter } from 'vue-router'
import axios from './axios'
import useSwal from './swal'
import { ref } from 'vue'
import type { User } from '@/utils'

export default function useAuth() {
  const { accepted, confirmed, rejected } = useSwal()
  const router = useRouter()
  const auth = ref<User[]>([])

  async function Login(payload: User) {
    try {
      const response = await axios.post('/api/v1/auth/login', payload)
      console.log(response.data)
      const user = response.data.user
      const token = response.data.token
      console.log(token)
      if (user.role == 'admin') {
        setHeaderToken(response.data.token)
        accepted('Login success!')
        setTimeout(() => {
          router.push('/')
        }, 1500)
      } else {
        rejected('Anda tidak memiliki akses untuk halaman ini!')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data)
        rejected(error.response?.data.message)
      }
    }
  }

  async function getAuth() {
    try {
      const response = await axios.get('/api/v1/profile')
      auth.value = await response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) router.push('/login')
      }
    }
  }

  function setHeaderToken(token: string) {
    localStorage.setItem('access_token', token)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  function removeHeaderToken() {
    delete axios.defaults.headers.common.Authorization
    localStorage.removeItem('access_token')
  }

  async function Logout() {
    const response = await confirmed('Apa anda ingin keluar?')
    if (response.isConfirmed) {
      try {
        await axios.get('/api/logout')
        removeHeaderToken()
        router.push('/login')
        await accepted('Anda telah keluar')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return {
    Login,
    Logout,
    getAuth,
    auth
  }
}
