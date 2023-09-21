import { defineStore } from "pinia"
import { getCategoryApi } from '@/apis/layout'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategory = async () => {
    const res = await getCategoryApi()
    categoryList.value = res.result
  }
  return {
    categoryList,
    getCategory
  }
})