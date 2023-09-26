import request from '@/utils/https'


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

export const deleteCartApi = (ids) => {
  return request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

export const mergeCartApi = (data) => {
  return request({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}