import request from '@/utils/http'


export const insertCartApi = ({ skuId, count }) => {
  return request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

export const findNewCartListApi = () => {
  return request({
    url: '/member/cart'
  })
}