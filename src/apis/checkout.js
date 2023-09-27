import request from '@/utils/https'

export const getCheckoutInfoApi = () => {
  return request({
    url: '/member/order/pre'
  })
}

export const createOrderApi = (data) => {
  return request({
    url: '/member/order',
    method: 'POST',
    data
  })
}