import { type Tools } from '@/utils'
import axios from '../axios'
import { ref } from 'vue'

export default function useTools() {
  const tools = ref<Tools[]>([])

  async function IndexTools() {
    const response = await axios.get('/api/v1/tool')
    console.log(response.data)
    tools.value = response.data.tools
  }

  async function DetailTools(id: String | String[]) {
    const response = await axios.get(`/api/v1/tool/${id}`)
    console.log(response.data)
    tools.value = response.data.tools
  }

  async function StoreTools(payload: Tools) {
    try {
      const response = await axios.post('/api/v1/tool', payload)
      console.log(response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data)
      }
    }
  }

  return {
    tools,
    IndexTools,
    DetailTools,
    StoreTools
  }
}
