import request from "@/utils/https"

export const getDetailApi = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}