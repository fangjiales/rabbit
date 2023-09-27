import request from '@/utils/https'


export const getOrderApi = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}