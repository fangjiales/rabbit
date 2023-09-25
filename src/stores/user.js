import { loginApi } from "@/apis/user"
import { defineStore } from "pinia"
import { ref } from "vue"


export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})
    const getUserInfo = async ({ account, password }) => {
      const res = await loginApi({ account, password })
      userInfo.value = res.result
    }
    const cleanUserInfo = () => {
      userInfo.value = {}
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
