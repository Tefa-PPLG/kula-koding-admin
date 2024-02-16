import { type Total } from '@/utils'
import axios from '../axios'
import { ref } from 'vue'

export default function useDashboard() {
  const total = ref<Total[]>([])

  async function TotalData() {
    const response = await axios.get('/api/v1/admin/total')
    console.log(response.data)
    total.value = response.data
  }

  return {
    total,
    TotalData
  }
}
