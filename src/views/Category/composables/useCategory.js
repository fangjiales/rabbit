import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { getTopCategroyApi } from '@/apis/category'

export function useCategory() {
  const route = useRoute()
  const categoryData = ref([])
  const getCategory = async (id = route.params.id) => {
    const res = await getTopCategroyApi(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}