import { defineStore } from "pinia"
import { computed, ref } from "vue"


export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([])
    const addCart = (goods) => {
      const item = cartList.value.find((item) => item.skuId === goods.skuId)
      if (item) {
        item.count += goods.count
      } else {
        cartList.value.push(goods)
      }
    }
    const delCart = (skuId) => {
      cartList.value = cartList.value.filter(item => item.skuId !== skuId)
    }
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find(item => item.skuId === skuId)
      item.selected = selected
    }
    const allCheck = (selected) => {
      cartList.value.forEach(item => {
        item.selected = selected
      })
    }
    const allCount = computed(() => cartList.value.reduce((u, v) => u + v.count, 0))
    const allPrice = computed(() => cartList.value.reduce((u, v) => u + (v.count * v.price), 0))
    const isAll = computed(() => cartList.value.every(u => u.selected))
    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      addCart,
      delCart,
      singleCheck,
      allCheck
    }
  },
  {
    persist: true
  }
)