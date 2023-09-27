import request from '@/utils/https'

export const getCheckoutInfoApi = () => {
  return request({
    url: '/member/order/pre'
  })
}