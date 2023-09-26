import { ref } from "vue"
import { defineStore } from "pinia"
import { useCartStore } from './cartStore'
import { loginApi } from "@/apis/user"
import { mergeCartApi } from "@/apis/cart"


export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})
    const cartStore = useCartStore()

    const getUserInfo = async ({ account, password }) => {
      const res = await loginApi({ account, password })
      userInfo.value = res.result
      await mergeCartApi(cartStore.cartList.map(item => {
        return {
          skuId: item.skuId,
          count: item.count,
          selected: item.selected
        }
      }))
      await cartStore.updateNewList()
    }

    const cleanUserInfo = () => {
      userInfo.value = {}
      cartStore.clearCart()
    }

    return {
      userInfo,
      getUserInfo,
      cleanUserInfo
    }
  },
  {
    persist: true
  }
)
